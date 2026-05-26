# Biodata Diri

Website biodata dan portofolio pribadi berbasis web statis. Menampilkan profil, keahlian, dan informasi kontak dalam satu halaman yang responsif.

**Live demo:** [https://masrepan.github.io/Biodata-Diri/](https://masrepan.github.io/Biodata-Diri/) *(aktifkan GitHub Pages jika belum)*

---

## Tentang

Proyek ini dibuat sebagai halaman biodata diri **Revan Andryan Harry** — siswa **SMK Telkom Jakarta** yang berminat di bidang *software engineering*, khususnya pengembangan aplikasi desktop.

## Fitur

- **Home** — perkenalan singkat dan tombol navigasi
- **About Me** — deskripsi profil dan minat
- **Skills** — kartu keahlian (C#, SQL, Adobe Lightroom)
- **Contact** — tautan Instagram, WhatsApp, dan Email
- Desain gelap dengan aksen kuning
- Navbar tetap dengan efek saat scroll
- Responsif untuk berbagai ukuran layar

## Teknologi

| Kategori | Stack |
|----------|--------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, Flexbox, Grid) |
| Script | JavaScript (vanilla) |
| Ikon | [Font Awesome 6](https://fontawesome.com/) |
| Font | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts) |

## Struktur Proyek

```
Biodata-Diri/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── foto-profile.jpeg
│       ├── logo-c-sharp.png
│       ├── logo-sql.png
│       └── logo-lightroom.png
└── README.md
```

## Cara Menjalankan

1. Clone repositori ini:

   ```bash
   git clone https://github.com/MasRepan/Biodata-Diri.git
   cd Biodata-Diri
   ```

2. Buka `index.html` langsung di browser, **atau** jalankan server lokal (opsional):

   ```bash
   # Contoh dengan Python
   python -m http.server 8000
   ```

3. Buka `http://localhost:8000` di browser.

## Deploy ke GitHub Pages

1. Push semua file ke branch `master` (atau `main`).
2. Di GitHub: **Settings** → **Pages**.
3. **Source:** Deploy from a branch → pilih branch dan folder `/ (root)`.
4. Simpan — situs akan tersedia di `https://<username>.github.io/Biodata-Diri/`.

## Kontak

| Platform | Link |
|----------|------|
| Instagram | [@repan.andryan](https://instagram.com/repan.andryan) |
| WhatsApp | [0813-6713-2772](https://wa.me/6281367132772) |
| Email | [revanandryan@gmail.com](mailto:revanandryan@gmail.com) |

## Lisensi

© 2026 Revan Andryan Harry. All rights reserved.
