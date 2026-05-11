import React from 'react';
import { History, Calendar, Search as SearchIcon } from 'lucide-react';

const Gecmis = ({ gecmis, secileniGetir }) => {
  if (!gecmis || gecmis.length === 0) return null;

  // geçmiş aramalar listesi bileşeni
  return (
    <div className="gecmis-bolumu">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <History size={24} color="var(--ana-renk)" />
        <h2>Son Aramalar</h2>
      </div>
      <div className="gecmis-liste">
        {gecmis.map((oge) => (
          <div 
            key={oge.id} 
            className="gecmis-oge cam-kart"
            onClick={() => secileniGetir(oge.id)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'var(--ana-renk-hafif)', padding: '0.75rem', borderRadius: '12px' }}>
                <SearchIcon size={20} color="var(--ana-renk)" />
              </div>
              <div>
                <div style={{ fontWeight: '600' }}>{oge.arama_terimi}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--metin-renk-ikincil)' }}>{oge.arama_turu === 'kullanici_adi' ? 'Kullanıcı Adı' : 'İsim Soyisim'}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--metin-renk-ikincil)', fontSize: '0.9rem' }}>
              <Calendar size={14} />
              {new Date(oge.tarih).toLocaleDateString('tr-TR')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gecmis;
