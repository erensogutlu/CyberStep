import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UstBilgi from './Bilesenler/UstBilgi';
import Kahraman from './Bilesenler/Kahraman';
import Sonuclar from './Bilesenler/Sonuclar';
import Gecmis from './Bilesenler/Gecmis';
import Hakkinda from './Bilesenler/Hakkinda';
import SilmeMethodlari from './Bilesenler/SilmeMethodlari';
import { ExternalLink } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'https://cyberstep.onrender.com/api';

function App() {
  const [sonuclar, setSonuclar] = useState([]);
  const [gecmis, setGecmis] = useState([]);
  const [aktifSayfa, setAktifSayfa] = useState('ana'); // 'ana' veya 'hakkinda'
  const [aiAnalizi, setAiAnalizi] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(false);

  // uygulama ilk yüklendiğinde geçmişi getir
  useEffect(() => {
    gecmisiGetir();
  }, []);

  const gecmisiGetir = async () => {
    try {
      const cevap = await axios.get(`${API_URL}/gecmis`);
      setGecmis(cevap.data);
    } catch (hata) {
      console.error('geçmiş yüklenirken hata oluştu:', hata);
    }
  };

  const aramaYap = async (terim, tur) => {
    setAktifSayfa('ana');
    setYukleniyor(true);
    try {
      const cevap = await axios.post(`${API_URL}/arama`, { terim, tur });
      setSonuclar(cevap.data.sonuclar);
      setAiAnalizi(cevap.data.ai);
      gecmisiGetir(); 
    } catch (hata) {
      console.error('arama yapılırken hata oluştu:', hata);
      alert('Analiz sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setYukleniyor(false);
    }
  };

  const secileniGetir = async (aramaId) => {
    setYukleniyor(true);
    try {
      const cevap = await axios.get(`${API_URL}/sonuclar/${aramaId}`);
      setSonuclar(cevap.data);
      // sayfayı sonuçlara kaydır
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } catch (hata) {
      console.error('sonuçlar getirilirken hata oluştu:', hata);
    } finally {
      setYukleniyor(false);
    }
  };

  // ana uygulama yapısı
  return (
    <div className="uygulama-konteynir">
      <UstBilgi sayfaDegistir={setAktifSayfa} aktifSayfa={aktifSayfa} />
      
      <main className="ana-icerik">
        {aktifSayfa === 'ana' ? (
          <>
            <Kahraman aramaYap={aramaYap} yukleniyor={yukleniyor} />
            <Sonuclar sonuclar={sonuclar} ai={aiAnalizi} />
            {!yukleniyor && sonuclar.length === 0 && <Gecmis gecmis={gecmis} secileniGetir={secileniGetir} />}
          </>
        ) : aktifSayfa === 'hakkinda' ? (
          <Hakkinda />
        ) : (
          <SilmeMethodlari />
        )}
      </main>

      <footer style={{ textAlign: 'center', padding: '3rem 2rem', color: 'var(--metin-renk-ikincil)', fontSize: '0.9rem', borderTop: '1px solid var(--kenarlik)', marginTop: '4rem' }}>
        <p>&copy; 2026 CyberStep - Dijital Ayak İzi Analiz Sistemi. Tüm hakları saklıdır.</p>
        <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <span>Geliştirici:</span>
          <a 
            href="https://github.com/erensogutlu" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--ana-renk)', 
              textDecoration: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem',
              fontWeight: '600'
            }}
          >
            <ExternalLink size={18} /> @erensogutlu
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
