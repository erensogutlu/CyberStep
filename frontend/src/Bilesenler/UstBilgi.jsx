import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UstBilgi = ({ sayfaDegistir, aktifSayfa }) => {
  const [mobilMenuAcik, setMobilMenuAcik] = useState(false);

  const navigasyonLinkleri = [
    { id: 'ana', etiket: 'Ana Sayfa' },
    { id: 'hakkinda', etiket: 'Hakkında' },
    { id: 'silme', etiket: 'İzleri Sil' }
  ];

  const sayfaGit = (id) => {
    sayfaDegistir(id);
    setMobilMenuAcik(false);
  };

  return (
    <header className="ust-bilgi">
      <div className="ust-konteynir">
        <div className="logo" onClick={() => sayfaGit('ana')} style={{ cursor: 'pointer' }}>
          <Shield color="var(--ana-renk)" size={32} />
          <span>CyberStep</span>
        </div>
        
        {/* Masaüstü Navigasyon */}
        <nav className="masaustu-nav">
          <ul>
            {navigasyonLinkleri.map((link) => (
              <li key={link.id}>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); sayfaGit(link.id); }}
                  className={aktifSayfa === link.id ? 'aktif' : ''}
                >
                  {link.etiket}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobil Toggle Butonu */}
        <div className="mobil-toggle" onClick={() => setMobilMenuAcik(!mobilMenuAcik)}>
          {mobilMenuAcik ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobil Menü (Overlay) */}
      <AnimatePresence>
        {mobilMenuAcik && (
          <motion.nav 
            className="mobil-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navigasyonLinkleri.map((link) => (
                <li key={link.id}>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); sayfaGit(link.id); }}
                    className={aktifSayfa === link.id ? 'aktif' : ''}
                  >
                    {link.etiket}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default UstBilgi;
