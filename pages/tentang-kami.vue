<script setup>
import storyImg from '~/assets/FOTO/IMG_1741.JPG'

useHead({ title: 'Tentang Kami & Sejarah — Air Terjun Nglirip Tuban' })
const milestones = useHistory()

const values = [
  {
    title: 'Dikelola Swadaya',
    desc: 'Pengelolaan kawasan air terjun dilakukan langsung oleh warga desa, menjaga keaslian dan ketertiban area wisata.'
  },
  {
    title: 'Menjaga Alam',
    desc: 'Warga berkomitmen menjaga kebersihan aliran sungai dan merawat pepohonan di sekitar tebing agar udara tetap sejuk.'
  },
  {
    title: 'Menghidupi UMKM',
    desc: 'Kehadiran wisatawan menjadi berkah bagi puluhan warga yang membuka lapak kuliner dan suvenir di sekitar lokasi.'
  }
]
</script>

<template>
  <div>
    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow eyebrow--light">Tentang Kami</p>
        <h1>Kisah di Balik Aliran Air Terjun Nglirip</h1>
        <p class="page-hero-sub">
          Dari destinasi yang tersembunyi hingga menjadi ikon wisata Tuban — 
          ini cerita warga mengelola pesona alam Nglirip untuk kesejahteraan bersama.
        </p>
      </div>
    </section>

    <!-- STORY -->
    <section class="section story">
      <div class="container story-grid">
        <div class="story-media petal-frame">
          <img
            :src="storyImg"
            alt="Pemandangan asri Air Terjun Nglirip Tuban"
            loading="lazy"
            width="900"
            height="1100"
          />
        </div>
        <div class="story-text">
          <p class="eyebrow">Awal Mula</p>
          <h2>Ditemukan sebagai permata tersembunyi, dijaga bersama warga</h2>
          <p>
            Sebelum ramai seperti sekarang, Air Terjun Nglirip hanyalah aliran sungai deras 
            di balik rimbunnya hutan jati dan tebing kapur. Hanya segelintir warga yang datang 
            ke mari, menyusuri jalan setapak yang licin demi mendapatkan air bersih atau kayu bakar.
          </p>
          <p>
            Pesona air yang jatuh dari ketinggian 25 meter dengan genangan hijau toska di bawahnya, 
            perlahan menarik para petualang. Cerita dari mulut ke mulut pun membawa lebih banyak 
            orang yang ingin melihat langsung eksotisnya mahakarya alam di Tuban ini.
          </p>
          <p>
            Kini, pengelolaan Nglirip menjadi tumpuan ekonomi warga desa. Setiap tiket yang dibeli, 
            dan setiap jajanan yang dinikmati, turut membantu kehidupan masyarakat lokal dan merawat 
            keberlanjutan alam.
          </p>
        </div>
      </div>
    </section>

    <PetalDivider />

    <!-- TIMELINE -->
    <section class="section section--tint timeline-section">
      <div class="container">
        <p class="eyebrow">Perjalanan Sejarah</p>
        <h2>Jejak langkah Nglirip</h2>

        <ol class="timeline">
          <li v-for="m in milestones" :key="m.year" class="timeline-item">
            <div class="timeline-year">{{ m.year }}</div>
            <div class="timeline-body">
              <h3>{{ m.title }}</h3>
              <p>{{ m.desc }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <PetalDivider flip />

    <!-- VALUES -->
    <section class="section values-section">
      <div class="container">
        <p class="eyebrow">Nilai yang Kami Pegang</p>
        <h2>Prinsip di balik setiap kunjungan</h2>

        <div class="values-grid">
          <div v-for="v in values" :key="v.title" class="value-card">
            <span class="value-mark" aria-hidden="true" />
            <h3>{{ v.title }}</h3>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- QUOTE -->
    <section class="quote-section">
      <div class="container quote-box">
        <blockquote>
          “Dulu kami hanya melihat air terjun ini dari kejauhan. Sekarang, deru airnya
          membawa berkah bagi anak-cucu kami di desa.”
        </blockquote>
        <cite>— Perwakilan Warga Pengelola Nglirip</cite>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 168px 0 88px;
  background: linear-gradient(150deg, var(--plum), var(--blossom-deep) 130%);
  color: #fff;
}
.page-hero h1 { font-size: clamp(2.1rem, 4.4vw, 3.2rem); margin-top: 16px; max-width: 18ch; }
.page-hero-sub { margin-top: 20px; max-width: 54ch; color: rgba(255,255,255,0.85); font-size: 1.05rem; }

.story-grid {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 64px;
  align-items: center;
}
.story-media img { width: 100%; object-fit: cover; aspect-ratio: 9/11; }
.story-text h2 { font-size: clamp(1.7rem, 2.8vw, 2.3rem); margin-top: 12px; max-width: 22ch; }
.story-text p { margin-top: 18px; color: #5b4152; max-width: 52ch; }

.timeline-section h2 { font-size: clamp(1.7rem, 2.8vw, 2.3rem); margin-top: 12px; margin-bottom: 48px; }
.timeline { list-style: none; margin: 0; padding: 0; position: relative; }
.timeline::before {
  content: '';
  position: absolute;
  left: 84px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: var(--rose-soft);
}
.timeline-item {
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 32px;
  position: relative;
  padding-bottom: 44px;
}
.timeline-item:last-child { padding-bottom: 0; }
.timeline-year {
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--blossom-deep);
  font-size: 1.1rem;
  position: relative;
}
.timeline-year::after {
  content: '';
  position: absolute;
  right: -37px;
  top: 4px;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--blossom);
  box-shadow: 0 0 0 5px #fff;
}
.timeline-body { padding-left: 24px; }
.timeline-body h3 { font-size: 1.15rem; margin-bottom: 6px; }
.timeline-body p { font-size: 0.94rem; color: #5b4152; max-width: 56ch; }

.values-section h2 { font-size: clamp(1.7rem, 2.8vw, 2.3rem); margin-top: 12px; margin-bottom: 40px; }
.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.value-card {
  padding: 32px 26px;
  border-radius: 24px;
  background: var(--rose-soft);
}
.value-mark {
  display: block;
  width: 40px; height: 40px;
  border-radius: var(--radius-petal);
  background: var(--blossom);
  margin-bottom: 18px;
}
.value-card h3 { font-size: 1.1rem; margin-bottom: 10px; }
.value-card p { font-size: 0.93rem; color: #5b4152; }

.quote-section { background: var(--cream); padding: 20px 0 110px; }
.quote-box {
  max-width: 780px;
  text-align: center;
}
.quote-box blockquote {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-style: italic;
  color: var(--plum);
  margin: 0;
  line-height: 1.4;
}
.quote-box cite {
  display: block;
  margin-top: 24px;
  font-style: normal;
  font-weight: 700;
  color: var(--blossom-deep);
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .story-grid { grid-template-columns: 1fr; }
  .values-grid { grid-template-columns: 1fr; }
  .timeline::before { left: 54px; }
  .timeline-item { grid-template-columns: 54px 1fr; gap: 20px; }
  .timeline-year::after { right: -27px; }
}
</style>
