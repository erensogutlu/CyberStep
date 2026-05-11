/* CyberStep – Dijital Ayak İzi Analiz Sistemi */

CyberStep, modern dijital dünyada bireylerin internet üzerinde bıraktığı dijital izleri (OSINT) analiz etmek, risk skorlarını belirlemek ve güvenliklerini artırmak için profesyonel çözümler sunan gelişmiş bir analiz platformudur.

* Özellikler : 

 -> Küresel Tarama Algoritması: 20'den fazla sosyal, teknik ve profesyonel platformda (Instagram, GitHub, Discord vb.) anlık kullanıcı adı taraması.
 -> AI Derin Analiz Raporu: Bulunan verilerin CyberStep AI tarafından risk puanlaması ve detaylı dijital varlık raporu haline getirilmesi.
 -> İz Silme Metotları: Dijital ayak izini azaltmak ve gizliliği artırmak için profesyonel silme rehberi ve stratejileri.
 -> Gizlilik Odaklı Mimari: Analiz sonuçlarının veritabanında saklanmadığı, sadece anlık oturuma özel üretildiği "Privacy-by-Design" yapısı.
 -> Güvenlik ve Limitasyonlar: Express Rate Limit, girdi doğrulama ve payload kısıtlamaları ile halka açık yayına hazır güvenli altyapı.
 -> Modern UI/UX: Glassmorphism efektleri, akıcı Framer Motion animasyonları ve premium karanlık tema odaklı arayüz.

* Kullanılan Teknolojiler :

    Frontend : 

   -> React.js (Vite)
   -> Vanilla CSS (Modern & Glassmorphism)
   -> Lucide React (İkon Seti)
   -> Framer Motion (Animasyonlar)
   -> Axios (API İletişimi)

    Backend :

   -> Node.js (Express)
   -> PostgreSQL (Neon Database)
   -> Axios (Platform Tarama Motoru)
   -> Express Rate Limit (Güvenlik)

* Geliştirici : Eren Söğütlü

-----------------------------------------------------------------------------------------------------------------

/* CyberStep – Digital Footprint Analysis System */

CyberStep is an advanced analysis platform that provides professional solutions for analyzing digital footprints (OSINT), determining risk scores, and enhancing online security in the modern digital world.

* Features : 

 -> Global Scanning Algorithm: Instant username scanning across 20+ social, technical, and professional platforms (Instagram, GitHub, Discord, etc.).
 -> AI Deep Analysis Report: Risk scoring and detailed digital presence reporting by CyberStep AI.
 -> Deletion Methods: Professional deletion guide and strategies to reduce digital footprint and increase privacy.
 -> Privacy-Oriented Architecture: "Privacy-by-Design" structure where analysis results are not stored in the database but generated for the instant session only.
 -> Security and Limitations: Secure infrastructure ready for public deployment with Express Rate Limit, input validation, and payload restrictions.
 -> Modern UI/UX: Premium dark-themed interface with Glassmorphism effects and fluid Framer Motion animations.

* Technologies Used : 

    Frontend : 

   -> React.js (Vite)
   -> Vanilla CSS (Modern & Glassmorphism)
   -> Lucide React
   -> Framer Motion
   -> Axios

    Backend : 

   -> Node.js (Express)
   -> PostgreSQL (Neon Database)
   -> Axios (Scanning Engine)
   -> Express Rate Limit (Security)

* Developer : Eren Söğütlü

-----------------------------------------------------------------------------------------------------------------

## Kurulum ve Çalıştırma / Installation and Operation

### 1. Gerekli Paketlerin Yüklenmesi / Installing Packages

Frontend için / For frontend:
```bash
cd frontend
npm install
```

Backend için / For backend:
```bash
cd backend
npm install
```

---

### 2. Çevre Değişkenleri / Environment Variables (.env)

`backend` dizininde bir `.env` dosyası oluşturun / Create an `.env` file in the `backend` directory:
```env
DATABASE_URL=your_neon_postgresql_url
PORT=5000
```

---

### 3. Projeyi Çalıştırma / Running the Project

#### Backend (Sunucu / Server)
```bash
cd backend
node index.js
```
> Sunucu / Server: https://cyberstep.onrender.com (Live) / http://localhost:5000 (Local)

---

#### Frontend (İstemci / Client)
```bash
cd frontend
npm run dev
```
> Uygulama / App: http://localhost:5173