import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ShieldCheck, Mail, Globe, EyeOff, Key } from 'lucide-react';

const SilmeMethodlari = () => {
  const methodlar = [
    {
      ikon: <Trash2 size={24} />,
      baslik: "Kullanılmayan Hesapları Kapatın",
      aciklama: "Eski sosyal medya, alışveriş ve forum hesaplarınızı tek tek bulun ve kapatın. Hatırlayamadığınız hesaplar için e-posta kutunuzdaki 'Hoş geldiniz' veya 'Kaydol' aramalarını kullanın."
    },
    {
      ikon: <ShieldCheck size={24} />,
      baslik: "Google Etkinliklerini Temizleyin",
      aciklama: "myactivity.google.com adresine giderek konum geçmişinizi, web aramalarınızı ve YouTube izleme geçmişinizi düzenli olarak silin veya otomatik silmeyi aktif edin."
    },
    {
      ikon: <Mail size={24} />,
      baslik: "Veri Simsarlarından Silinme İsteyin",
      aciklama: "Whitepages, Spokeo gibi veri toplayıcı sitelere 'Opt-out' talebi gönderin. Bu siteler halka açık verilerinizi satar, bunları sildirmek dijital görünürlüğünüzü ciddi oranda azaltır."
    },
    {
      ikon: <EyeOff size={24} />,
      baslik: "Sosyal Medya Arşivleme",
      aciklama: "Tüm hesabınızı silmek istemiyorsanız, eski paylaşımlarınızı 'Sadece Ben' olarak ayarlayın veya Redact.dev gibi araçlarla toplu silme işlemi gerçekleştirin."
    },
    {
      ikon: <Globe size={24} />,
      baslik: "Çerezleri ve Önbelleği Temizleyin",
      aciklama: "Tarayıcınızın gizlilik ayarlarından üçüncü taraf çerezleri engelleyin. DuckDuckGo veya Brave gibi gizlilik odaklı tarayıcıları tercih ederek izlenmeyi zorlaştırın."
    },
    {
      ikon: <Key size={24} />,
      baslik: "2FA ve Güçlü Şifreler",
      aciklama: "İzlerinizi silerken mevcut hesaplarınızı koruyun. Her platform için benzersiz şifreler kullanın ve İki Faktörlü Doğrulamayı (2FA) mutlaka aktif hale getirin."
    }
  ];

  return (
    <motion.div 
      className="silme-methodlari-konteynir"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}
    >
      <div className="cam-kart" style={{ padding: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--ana-renk)', marginBottom: '1.5rem' }}>Dijital İzlerinizi Nasıl Silersiniz?</h1>
        <p style={{ color: 'var(--metin-renk-ikincil)', fontSize: '1.1rem' }}>
          İnternetteki varlığınızı minimize etmek ve kontrolü tekrar elinize almak için aşağıdaki profesyonel yöntemleri uygulayabilirsiniz.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {methodlar.map((m, i) => (
          <motion.div 
            key={i}
            className="cam-kart"
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div style={{ color: 'var(--ana-renk)', background: 'var(--ana-renk-hafif)', width: 'fit-content', padding: '0.75rem', borderRadius: '12px' }}>
              {m.ikon}
            </div>
            <h3 style={{ color: 'white' }}>{m.baslik}</h3>
            <p style={{ color: 'var(--metin-renk-ikincil)', fontSize: '0.9rem', lineHeight: '1.6' }}>{m.aciklama}</p>
          </motion.div>
        ))}
      </div>

      <div className="cam-kart" style={{ marginTop: '4rem', padding: '2.5rem', borderLeft: '4px solid var(--vurgu-sari)' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--vurgu-sari)' }}>⚠️ Önemli Not</h3>
        <p style={{ color: 'var(--metin-renk-ikincil)', fontSize: '0.95rem' }}>
          Dijital ayak izini tamamen sıfırlamak zordur ve zaman alır. Ancak düzenli temizlik ve bilinçli kullanım ile risklerinizi %90 oranında azaltabilirsiniz. CyberStep analiz sonuçlarınızda çıkan aktif linkleri temizlemeye buradan başlayabilirsiniz.
        </p>
      </div>
    </motion.div>
  );
};

export default SilmeMethodlari;
