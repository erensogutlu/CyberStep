import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Search, Cpu, Lock } from 'lucide-react';

const Hakkinda = () => {
  return (
    <motion.div 
      className="hakkinda-konteynir"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}
    >
      <section className="cam-kart" style={{ padding: '3rem', marginBottom: '2rem' }}>
        <h1 style={{ color: 'var(--ana-renk)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Shield size={32} /> CyberStep Hakkında
        </h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--metin-renk-ikincil)' }}>
          CyberStep, modern dijital dünyada bireylerin geride bıraktığı dijital izleri analiz etmek ve potansiyel güvenlik risklerini ortaya çıkarmak için tasarlanmış profesyonel bir OSINT (Açık Kaynak İstihbaratı) platformudur.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="cam-kart" style={{ padding: '2rem' }}>
          <Search style={{ color: 'var(--ana-renk)', marginBottom: '1rem' }} />
          <h3>Derin Tarama Algoritması</h3>
          <p style={{ color: 'var(--metin-renk-ikincil)', fontSize: '0.9rem', marginTop: '1rem' }}>
            CyberStep v4 Pro motoru, 20'den fazla küresel platformu anlık olarak tarar. Sadece sosyal medya hesaplarını değil, teknik platformları ve veri sızıntısı (leak) veritabanlarını da kontrol eder.
          </p>
        </div>
        <div className="cam-kart" style={{ padding: '2rem' }}>
          <Cpu style={{ color: 'var(--ana-renk)', marginBottom: '1rem' }} />
          <h3>Yapay Zeka Analizi</h3>
          <p style={{ color: 'var(--metin-renk-ikincil)', fontSize: '0.9rem', marginTop: '1rem' }}>
            Bulunan veriler, CyberStep AI tarafından platform hassasiyeti ve veri ağırlığına göre puanlanır. Çapraz korelasyon analizi ile kimlik doğruluk oranınız hesaplanır.
          </p>
        </div>
      </div>

      <section className="cam-kart" style={{ padding: '2.5rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Algoritma Nasıl Çalışır?</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ borderLeft: '3px solid var(--ana-renk)', paddingLeft: '1.5rem' }}>
            <h4 style={{ color: 'white' }}>1. Veri Toplama Katmanı</h4>
            <p style={{ color: 'var(--metin-renk-ikincil)', fontSize: '0.95rem' }}>
              Girdiğiniz kullanıcı adı, CyberStep'in gelişmiş "Pattern Matching" motoru tarafından işlenir. Algoritma, her platform için özel URL desenleri ve API simülasyonları kullanarak dijital varlığınızı sorgular.
            </p>
          </div>
          <div style={{ borderLeft: '3px solid var(--ana-renk)', paddingLeft: '1.5rem' }}>
            <h4 style={{ color: 'white' }}>2. Aktiflik ve Metadata Kontrolü</h4>
            <p style={{ color: 'var(--metin-renk-ikincil)', fontSize: '0.95rem' }}>
              Bulunan her profil, HTTP status kontrolleri ve metadata extraction süreçlerinden geçer. Profilin aktiflik durumu, hesap tipi ve paylaşılan metadata etiketleri (örn: "Geliştirici İzi") bu aşamada belirlenir.
            </p>
          </div>
          <div style={{ borderLeft: '3px solid var(--ana-renk)', paddingLeft: '1.5rem' }}>
            <h4 style={{ color: 'white' }}>3. Ağırlıklı Risk Puanlaması</h4>
            <p style={{ color: 'var(--metin-renk-ikincil)', fontSize: '0.95rem' }}>
              Her platformun bir "Risk Katsayısı" vardır. Bir Pastebin sızıntısı 2.5x ağırlığa sahipken, bir Pinterest profili 0.6x ağırlıktadır. AI motoru tüm bu verileri normalize ederek size %0-100 arası bir risk skoru sunar.
            </p>
          </div>
          <div style={{ borderLeft: '3px solid var(--ana-renk)', paddingLeft: '1.5rem' }}>
            <h4 style={{ color: 'white' }}>4. Gizlilik ve Güvenlik</h4>
            <p style={{ color: 'var(--metin-renk-ikincil)', fontSize: '0.95rem' }}>
              CyberStep "Privacy-by-Design" ilkesini benimser. Analiz sonuçlarınız asla veritabanında saklanmaz. Sadece tarama yaptığınızı gösteren bir kayıt (Son Aramalar) tutulur, detaylı bulgular ise sadece o anki oturumunuza özeldir.
            </p>
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--metin-renk-ikincil)', fontSize: '0.8rem' }}>
        <Lock size={14} style={{ marginRight: '5px' }} /> Verileriniz CyberStep güvencesi altındadır.
      </div>
    </motion.div>
  );
};

export default Hakkinda;
