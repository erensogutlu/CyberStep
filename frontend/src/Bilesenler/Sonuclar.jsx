import React from 'react';
import { ExternalLink, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const Sonuclar = ({ sonuclar, ai }) => {
  if (!sonuclar || sonuclar.length === 0) return null;

  // sonuç listesi bileşeni
  return (
    <div className="sonuc-konteynir">
      {ai && (
        <motion.div
          className="cam-kart"
          style={{ padding: '2rem', marginBottom: '2rem', borderLeft: `4px solid ${ai.seviye === 'Kritik' ? 'var(--vurgu-kirmizi)' : 'var(--ana-renk)'}` }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '2.5rem' }}>🤖</div>
            <div>
              <h3 style={{ color: 'var(--ana-renk)' }}>Küresel AI Derin Analiz Raporu</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: '700', color: ai.seviye === 'Kritik' ? 'var(--vurgu-kirmizi)' : 'white' }}>
                Tehdit Seviyesi: {ai.seviye} (%{Math.round(ai.riskSkoru || ai.riskPuani || 0)})
              </p>
            </div>
          </div>
          <p style={{ color: 'var(--metin-renk)', marginBottom: '1.5rem', fontSize: '1.1rem', fontStyle: 'italic' }}>"{ai.rapor || ai.aciklama}"</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', borderTop: '1px solid var(--kenarlik)', paddingTop: '1.5rem' }}>
            <div>
              <div style={{ color: 'var(--metin-renk-ikincil)', fontSize: '0.8rem' }}>Toplam Tarama</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{ai.istatistikler?.toplamTarama || 0}</div>
            </div>
            <div>
              <div style={{ color: 'var(--metin-renk-ikincil)', fontSize: '0.8rem' }}>Bulunan İz</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--ana-renk)' }}>{ai.istatistikler?.bulunanSayisi || 0}</div>
            </div>
            <div>
              <div style={{ color: 'var(--metin-renk-ikincil)', fontSize: '0.8rem' }}>Kritik Bulgular</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--vurgu-kirmizi)' }}>{ai.istatistikler?.kritikSayisi || 0}</div>
            </div>
          </div>
        </motion.div>
      )}

      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>İnternet Tarama Sonuçları</h2>
      <div className="sonuc-izgara">
        {sonuclar.map((sonuc, sira) => (
          <motion.div
            key={sira}
            className="sonuc-kart cam-kart"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: sira * 0.05 }}
            style={{ minHeight: '220px', display: 'flex', flexDirection: 'column' }}
          >
            <div className="kart-baslik">
              <span className="platform-ad">{sonuc.platform_adi}</span>
              <span className={`durum-etiket durum-${sonuc.durum.toLowerCase().split(' ')[0]}`}>
                {sonuc.durum === 'Aktif' ? <CheckCircle size={14} style={{ marginRight: '4px' }} /> : <Info size={14} style={{ marginRight: '4px' }} />}
                {sonuc.durum}
              </span>
            </div>

            <div className="risk-seviyesi" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ marginTop: '0.5rem' }}>
                Kategori: <span style={{ color: 'var(--ana-renk)', fontWeight: '600' }}>{sonuc.kategori || 'Genel'}</span>
              </div>

              {sonuc.metadata && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {sonuc.metadata.map((m, i) => (
                    <span key={i} style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              {sonuc.durum === 'Aktif' && sonuc.link ? (
                <a
                  href={sonuc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cam-kart"
                  style={{
                    padding: '0.75rem',
                    textAlign: 'center',
                    background: 'var(--ana-renk-hafif)',
                    color: 'var(--ana-renk)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    borderRadius: '10px',
                    border: '1px solid var(--ana-renk)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Profile Git <ExternalLink size={16} />
                </a>
              ) : (
                <div
                  style={{
                    padding: '0.75rem',
                    textAlign: 'center',
                    background: 'rgba(255,255,255,0.02)',
                    color: 'rgba(255,255,255,0.1)',
                    fontSize: '0.9rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    cursor: 'not-allowed'
                  }}
                >
                  Erişim Yok
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sonuclar;
