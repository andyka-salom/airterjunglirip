import img1 from '~/assets/FOTO/DSC00317.JPG'
import img2 from '~/assets/FOTO/DSC00334.JPG'
import img3 from '~/assets/FOTO/IMG_1566.JPG'
import img4 from '~/assets/FOTO/IMG_1609.JPG'
import img5 from '~/assets/FOTO/IMG_1727.JPG'
import img6 from '~/assets/FOTO/IMG_1728.JPG'
import img7 from '~/assets/FOTO/IMG_1729.JPG'
import img8 from '~/assets/FOTO/IMG_1737.JPG'
import img9 from '~/assets/FOTO/IMG_1738.JPG'
import img10 from '~/assets/FOTO/IMG_1741.JPG'
import img11 from '~/assets/FOTO/IMG_1742.JPG'
import img12 from '~/assets/FOTO/_MG_1560.JPG'
import img13 from '~/assets/FOTO/_MG_1604.JPG'
import img14 from '~/assets/FOTO/_MG_1611.JPG'

export interface Destination {
  slug: string
  title: string
  desc: string
  tag: string
  img: string
}

export interface Umkm {
  slug: string
  name: string
  owner: string
  category: string
  desc: string
  price: string
  img: string
}

export interface GalleryItem {
  id: string
  category: string
  caption: string
  img: string
}

export interface Milestone {
  year: string
  title: string
  desc: string
}

export function useDestinations(): Destination[] {
  return [
    {
      slug: 'air-terjun-utama',
      title: 'Air Terjun Nglirip',
      desc: 'Air terjun eksotis setinggi 25 meter dengan aliran air deras yang mengalir indah dari celah bebatuan tebing kapur.',
      tag: 'Air Terjun',
      img: img1
    },
    {
      slug: 'kolam-alami',
      title: 'Kolam Alami Tosca',
      desc: 'Kolam di bawah air terjun dengan warna air hijau toska alami yang sangat jernih, memanjakan mata dan menyejukkan suasana.',
      tag: 'Kolam Alami',
      img: img2
    },
    {
      slug: 'tebing-bebatuan',
      title: 'Tebing Bebatuan Karst',
      desc: 'Keindahan relief tebing karst di sekitar air terjun yang terbentuk secara alami selama ratusan tahun, spot foto favorit wisatawan.',
      tag: 'Wisata Alam',
      img: img3
    },
    {
      slug: 'jalur-trekking',
      title: 'Jalur Trekking Hutan',
      desc: 'Nikmati suasana asri menembus pepohonan rindang dengan udara sejuk sepanjang perjalanan menuju titik lokasi air terjun.',
      tag: 'Petualangan',
      img: img4
    },
    {
      slug: 'goa-nglirip',
      title: 'Goa Kecil Nglirip',
      desc: 'Goa tersembunyi di balik derasnya aliran air terjun, dipercaya warga sebagai tempat bertapa tokoh sakti di masa lalu.',
      tag: 'Sejarah / Mitos',
      img: img5
    },
    {
      slug: 'area-piknik',
      title: 'Area Piknik Tepi Sungai',
      desc: 'Kawasan bersantai dengan alas tikar yang disewakan warga setempat, cocok untuk menyantap bekal atau makanan UMKM lokal.',
      tag: 'Keluarga',
      img: img6
    }
  ]
}

export function useUmkm(): Umkm[] {
  return [
    {
      slug: 'nasi-jagung-nglirip',
      name: 'Nasi Jagung Bu Narti',
      owner: 'Ibu Narti',
      category: 'Kuliner',
      desc: 'Sajian legendaris khas sekitar Nglirip, nasi jagung dengan lauk ikan wader goreng dan sambal trasi pedas.',
      price: 'Mulai Rp 10.000',
      img: img7
    },
    {
      slug: 'kopi-klotok-tuban',
      name: 'Kopi Klotok & Gorengan',
      owner: 'Pak Wawan',
      category: 'Minuman',
      desc: 'Kopi hitam pahit legendaris teman menikmati dinginnya udara air terjun, ditemani pisang goreng hangat.',
      price: 'Mulai Rp 5.000',
      img: img8
    },
    {
      slug: 'es-legen-siwalan',
      name: 'Es Legen Asli Tuban',
      owner: 'Cak Tarno',
      category: 'Minuman',
      desc: 'Minuman segar dari sari pohon siwalan (legen) asli Tuban, pelepas dahaga paling ampuh di siang hari.',
      price: 'Mulai Rp 7.000',
      img: img9
    },
    {
      slug: 'jajanan-dumbek',
      name: 'Dumbek Khas Tuban',
      owner: 'Ibu Lastri',
      category: 'Camilan',
      desc: 'Kue tradisional manis dari tepung beras dan gula merah yang dibungkus daun lontar berbentuk terompet.',
      price: 'Mulai Rp 2.500',
      img: img10
    },
    {
      slug: 'kerajinan-bambu',
      name: 'Kerajinan Bambu Anyam',
      owner: 'Koperasi Warga Mulyoagung',
      category: 'Kerajinan',
      desc: 'Tas, topi caping, dan aneka suvenir cantik dari anyaman bambu buatan pengrajin lokal desa.',
      price: 'Mulai Rp 25.000',
      img: img11
    },
    {
      slug: 'rujak-buah',
      name: 'Rujak Buah Segar Nglirip',
      owner: 'Mbak Sri',
      category: 'Kuliner',
      desc: 'Rujak buah segar dengan bumbu kacang kental dan petis, disantap sambil mendengar gemericik air.',
      price: 'Mulai Rp 12.000',
      img: img12
    }
  ]
}

export function useGallery(): GalleryItem[] {
  return [
    { id: 'gal-1', category: 'Wisata Alam', caption: 'Keindahan aliran Nglirip di siang hari', img: img1 },
    { id: 'gal-2', category: 'Wisata Alam', caption: 'Warna air toska alami dari kejauhan', img: img2 },
    { id: 'gal-3', category: 'Wisata Alam', caption: 'Relief tebing batu karst', img: img3 },
    { id: 'gal-4', category: 'Wisata Alam', caption: 'Pepohonan rindang di sekitar air terjun', img: img4 },
    { id: 'gal-5', category: 'Wisata Alam', caption: 'Pemandangan dari sudut Goa kecil', img: img5 },
    { id: 'gal-6', category: 'Wisata Alam', caption: 'Area bersantai di tepi aliran sungai', img: img6 },
    { id: 'gal-7', category: 'Kuliner Lokal', caption: 'Sajian Nasi Jagung lezat pinggir sungai', img: img7 },
    { id: 'gal-8', category: 'Kuliner Lokal', caption: 'Kopi dan cemilan peneman sore', img: img8 },
    { id: 'gal-9', category: 'Kuliner Lokal', caption: 'Es Legen segar pelepas dahaga', img: img9 },
    { id: 'gal-10', category: 'Budaya & Sekitar', caption: 'Pengunjung menikmati keindahan alam', img: img10 },
    { id: 'gal-11', category: 'Budaya & Sekitar', caption: 'Aktivitas UMKM lokal', img: img11 },
    { id: 'gal-12', category: 'Wisata Alam', caption: 'Air terjun eksotis di Tuban', img: img12 }
  ]
}

export function useHistory(): Milestone[] {
  return [
    {
      year: 'Zaman Dahulu',
      title: 'Legenda Putri Nglirip',
      desc: 'Cerita rakyat berkembang tentang sosok putri cantik yang konon mendiami kawasan air terjun dan menjadi pelindung alam sekitar.'
    },
    {
      year: 'Tahun 1990-an',
      title: 'Ditemukan sebagai Potensi Wisata',
      desc: 'Warga mulai menyadari keindahan air terjun tersembunyi ini, meski akses jalan masih berupa jalan setapak berlumpur di tengah hutan.'
    },
    {
      year: 'Tahun 2005',
      title: 'Akses Jalan Mulai Terbuka',
      desc: 'Pemerintah dan warga bergotong-royong membuka akses jalan yang lebih baik agar pengunjung mudah menjangkau lokasi air terjun.'
    },
    {
      year: 'Tahun 2012',
      title: 'Pengelolaan Resmi oleh Pokdarwis',
      desc: 'Kelompok Sadar Wisata (Pokdarwis) desa setempat mulai mengelola kebersihan, keamanan, dan menata warung UMKM agar lebih tertib.'
    },
    {
      year: 'Tahun 2018',
      title: 'Viral Sebagai "Green Canyon" Tuban',
      desc: 'Warna air yang toska jernih viral di media sosial, menarik puluhan ribu pengunjung dari luar kota Tuban setiap akhir pekannya.'
    },
    {
      year: 'Sekarang',
      title: 'Ikon Wisata Alam Tuban',
      desc: 'Air Terjun Nglirip kini menjadi destinasi wisata alam andalan Kabupaten Tuban dengan fasilitas UMKM yang terus diberdayakan.'
    }
  ]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  img: string
  content: string[]
}

export function useBlog(): BlogPost[] {
  return [
    {
      slug: 'misteri-warna-tosca-air-terjun-nglirip',
      title: 'Misteri Warna Tosca Air Terjun Nglirip',
      excerpt: 'Pernahkah Anda bertanya-tanya mengapa air di Nglirip selalu berwarna hijau toska yang jernih? Temukan jawabannya secara ilmiah maupun mitos.',
      date: '12 Agustus 2023',
      img: img2,
      content: [
        'Air Terjun Nglirip di Tuban terkenal dengan warna airnya yang unik, yakni hijau toska jernih. Banyak pengunjung yang terkesima saat pertama kali melihatnya secara langsung.',
        'Warna ini konon berasal dari endapan belerang dan mineral pegunungan kapur kars yang larut dalam air sungai. Reaksi mineral tersebut dengan cahaya matahari menghasilkan pantulan warna hijau kebiruan yang indah.',
        'Namun, masyarakat setempat juga memelihara cerita legenda. Konon, kejernihan air ini adalah perlambang kesucian Putri Nglirip yang dipercaya mendiami area ini sejak ratusan tahun lalu.',
        'Terlepas dari mitos maupun sains, keindahan warna toska di Air Terjun Nglirip menjadikannya salah satu ikon wisata alam terbaik di Jawa Timur.'
      ]
    },
    {
      slug: '5-kuliner-wajib-coba-di-sekitar-nglirip',
      title: '5 Kuliner Wajib Coba Saat Berkunjung ke Nglirip',
      excerpt: 'Liburan kurang lengkap tanpa wisata kuliner. Ini daftar jajanan dan makanan khas Tuban yang wajib Anda cicipi setelah puas bermain air.',
      date: '05 September 2023',
      img: img7,
      content: [
        'Setelah lelah bermain air dan menikmati pemandangan alam, perut pasti terasa lapar. Jangan khawatir, di sekitar kawasan Air Terjun Nglirip terdapat banyak lapak UMKM yang siap memanjakan lidah Anda.',
        'Pertama, Nasi Jagung Nglirip. Kuliner ini adalah primadona. Disajikan dengan ikan wader goreng dari sungai setempat dan sambal terasi yang pedasnya menggigit.',
        'Kedua, Es Legen Siwalan. Minuman khas pesisir utara ini sangat menyegarkan jika dinikmati siang hari. Ketiga adalah Dumbek, kue manis dari tepung beras berbalut daun lontar.',
        'Keempat, Rujak Buah bumbu petis khas Tuban yang segar. Dan kelima, Kopi Klotok hangat untuk Anda yang lebih suka bersantai menikmati sore hari.',
        'Semua kuliner ini dijual oleh warga desa lokal. Dengan membeli, Anda turut mendukung perekonomian desa.'
      ]
    },
    {
      slug: 'tips-aman-berwisata-ke-air-terjun',
      title: 'Tips Aman & Nyaman Berwisata ke Air Terjun Nglirip',
      excerpt: 'Mengingat debit air yang bisa tiba-tiba besar saat musim hujan, ketahui hal-hal apa saja yang perlu dipersiapkan untuk wisata aman di Nglirip.',
      date: '21 Oktober 2023',
      img: img4,
      content: [
        'Air Terjun Nglirip adalah destinasi alam terbuka. Oleh karena itu, persiapan fisik dan kehati-hatian sangat diperlukan agar liburan Anda tetap aman dan menyenangkan.',
        'Pertama, gunakan alas kaki yang tidak licin. Jalur menuju air terjun berupa tangga batu yang terkadang berlumut atau basah terkena cipratan air.',
        'Kedua, perhatikan cuaca. Hindari berenang atau terlalu dekat dengan titik jatuh air saat cuaca mendung atau baru selesai hujan deras di hulu, karena debit air bisa meningkat drastis.',
        'Ketiga, patuhi batas aman yang sudah dipasang oleh pengelola (Pokdarwis). Jangan memaksakan diri melewati batas tali demi foto yang bagus.',
        'Keempat, bawa kantong sampah sendiri. Mari kita jaga bersama keasrian Nglirip dengan tidak membuang sampah sembarangan ke aliran sungai atau area hutan.'
      ]
    }
  ]
}
