const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const { sorgu } = require('./db');
const analizMotoru = require('./motor');

const uygulama = express();
const port = process.env.PORT || 5000;

// 1. genel limit (15 dakikada 100 istek)
const genelLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { hata: 'Çok fazla istek yapıldı, lütfen daha sonra tekrar deneyin.' }
});

// 2. arama limit (15 dakikada 5 arama - spam önlemek için)
const aramaLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { hata: 'Arama limitine ulaştınız. Lütfen 15 dakika bekleyin.' }
});

uygulama.use(cors());
uygulama.use(express.json({ limit: '10kb' })); // payload boyutu kısıtlaması
uygulama.use(genelLimit);
uygulama.get('/', (istek, cevap) => {
  cevap.json({ durum: 'aktif', mesaj: 'CyberStep API Çalışıyor' });
});


uygulama.post('/api/arama', aramaLimit, async (istek, cevap) => {
  const { terim, tur } = istek.body;

  // 3. girdi doğrulama
  if (!terim || typeof terim !== 'string') {
    return cevap.status(400).json({ hata: 'Geçersiz arama terimi' });
  }

  const temizTerim = terim.trim().substring(0, 50); // maksimum 50 karakter

  if (temizTerim.length < 3) {
    return cevap.status(400).json({ hata: 'Arama terimi çok kısa (min 3)' });
  }

  try {
    // 4. veritabanı koruma (sadece son 50 aramayı tut)
    await sorgu('DELETE FROM aramalar WHERE id NOT IN (SELECT id FROM aramalar ORDER BY tarih DESC LIMIT 49)');

    // 1. sadece aramayı kaydet
    const yeniArama = await sorgu(
      'INSERT INTO aramalar (arama_terimi, arama_turu) VALUES ($1, $2) RETURNING *',
      [temizTerim, tur || 'kullanici_adi']
    );

    // 2. analiz motorunu çalıştır
    const sonuclar = await analizMotoru.tara(temizTerim);
    const aiRaporu = analizMotoru.aiAnalizEt(sonuclar);

    // 3. sonuçları dön
    cevap.status(201).json({
      arama: yeniArama.rows[0],
      sonuclar: sonuclar,
      ai: {
        ...aiRaporu,
        riskPuani: aiRaporu.riskSkoru,
        aciklama: aiRaporu.rapor
      }
    });
  } catch (hata) {
    console.error('hata:', hata);
    cevap.status(500).json({ hata: 'analiz hatası' });
  }
});

uygulama.get('/api/gecmis', async (istek, cevap) => {
  try {
    const gecmis = await sorgu('SELECT * FROM aramalar ORDER BY tarih DESC LIMIT 10');
    cevap.json(gecmis.rows);
  } catch (hata) {
    cevap.status(500).json({ hata: 'hata' });
  }
});

uygulama.get('/api/sonuclar/:aramaId', async (istek, cevap) => {
  const { aramaId } = istek.params;

  // ID sayısal mı kontrol et
  if (isNaN(parseInt(aramaId))) {
    return cevap.status(400).json({ hata: 'Geçersiz ID' });
  }

  try {
    const aramaKaydi = await sorgu('SELECT * FROM aramalar WHERE id = $1', [aramaId]);
    if (aramaKaydi.rows.length > 0) {
      const terim = aramaKaydi.rows[0].arama_terimi;
      const sonuclar = await analizMotoru.tara(terim);
      cevap.json(sonuclar);
    } else {
      cevap.status(404).json({ hata: 'kayıt yok' });
    }
  } catch (hata) {
    cevap.status(500).json({ hata: 'hata' });
  }
});

uygulama.listen(port, () => {
  console.log(`sunucu ${port} portunda aktif`);
});
