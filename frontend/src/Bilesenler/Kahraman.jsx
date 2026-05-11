import React, { useState } from 'react';
import { AtSign } from 'lucide-react';
import { motion } from 'framer-motion';

const Kahraman = ({ aramaYap, yukleniyor }) => {
  const [aramaTerimi, setAramaTerimi] = useState('');
  const aramaTuru = 'kullanici_adi';

  const gonder = (e) => {
    e.preventDefault();
    if (aramaTerimi.trim()) {
      aramaYap(aramaTerimi, aramaTuru);
    }
  };

  return (
    <section className="kahraman">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dijital Ayak İzinizi <span style={{ color: 'var(--ana-renk)' }}>Keşfedin</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        İnternetteki verilerinizi analiz edin, risklerinizi belirleyin ve dijital güvenliğinizi artırın.
      </motion.p>

      <motion.form
        onSubmit={gonder}
        className="arama-kutusu cam-kart"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '1.25rem', color: 'var(--ana-renk)', filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.4))' }}>
          <AtSign size={22} strokeWidth={2.5} />
        </div>

        <input
          type="text"
          placeholder="Kullanıcı Adını Girin..."
          value={aramaTerimi}
          onChange={(e) => setAramaTerimi(e.target.value)}
          disabled={yukleniyor}
          style={{ border: 'none', background: 'transparent', width: '100%' }}
        />

        <button type="submit" disabled={yukleniyor}>
          {yukleniyor ? 'Analiz Ediliyor...' : 'Analiz Et'}
        </button>
      </motion.form>

      {yukleniyor && (
        <div className="yukleme-cubugu" style={{ maxWidth: '600px', margin: '1rem auto' }}></div>
      )}
    </section>
  );
};

export default Kahraman;
