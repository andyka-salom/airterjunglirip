# Desa Wisata Kembang Sari — Website

Website resmi (dummy/contoh) untuk desa wisata kebun bunga, dibangun dengan **Nuxt 3**.

## Halaman

- `/` — Beranda (hero video, ringkasan desa, destinasi, UMKM, galeri singkat)
- `/tentang-kami` — Tentang Kami & Sejarah (linimasa, nilai, kutipan warga)
- `/umkm` — Direktori UMKM lokal dengan filter kategori
- `/galeri` — Galeri foto dengan filter kategori & lightbox

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build untuk produksi

```bash
npm run build
node .output/server/index.mjs
```

Atau untuk versi statis (semua halaman di-generate sebagai HTML):

```bash
npm run generate
```

Hasil statis akan ada di folder `.output/public`, siap di-deploy ke Netlify, Vercel,
GitHub Pages, atau hosting statis lainnya.

## Konten dummy — perlu diganti sebelum go-live

Semua foto memakai layanan placeholder **picsum.photos** dan video hero memakai
video contoh publik. Sebelum rilis resmi, ganti:

1. `components/HeroBanner.vue` — ganti `VIDEO_SRC` dan `POSTER_SRC` dengan video/foto
   asli kebun bunga (disarankan format MP4 H.264, durasi 10–20 detik, dikompres < 8MB).
2. Semua URL `picsum.photos` di `composables/useSiteData.ts` dan halaman —
   ganti dengan foto asli (letakkan file di folder `public/images/` lalu ubah path-nya).
3. Nama desa, alamat, kontak, dan cerita sejarah di `composables/useSiteData.ts`
   serta halaman `pages/tentang-kami.vue` — sesuaikan dengan data asli.

## Struktur proyek

```
components/     Komponen UI (header, footer, hero, kartu, divider)
composables/    Data konten (destinasi, UMKM, galeri, sejarah)
pages/          Halaman routing Nuxt (Beranda, Tentang Kami, UMKM, Galeri)
assets/css/     Token desain global (warna, tipografi)
public/         Aset statis (favicon)
```

## Palet Warna

| Nama | Hex | Kegunaan |
|---|---|---|
| Blossom | `#FF6FA0` | Aksen utama, ikon |
| Blossom Deep | `#C6377A` | Tombol CTA, tautan penting |
| Rose Soft | `#FFE1EE` | Latar aksen lembut |
| Cream | `#FFFAF7` | Latar dasar |
| Leaf | `#4E9A6B` | Aksen alami pelengkap |
| Plum | `#3B2436` | Teks & latar gelap |
