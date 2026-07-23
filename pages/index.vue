<script setup>
import introImg from '~/assets/FOTO/IMG_1728.JPG'

const destinations = useDestinations().slice(0, 3)
const umkmList = useUmkm().slice(0, 3)
const gallery = useGallery().slice(0, 6)
</script>

<template>
  <div>
    <HeroBanner />

    <!-- SEKILAS / ABOUT PREVIEW -->
    <section id="sekilas" class="section intro">
      <div class="container intro-grid">
        <div class="intro-media petal-frame">
          <img
            :src="introImg"
            alt="Pemandangan Air Terjun Nglirip yang menawan"
            loading="lazy"
            width="900"
            height="1000"
          />
        </div>
        <div class="intro-text">
          <p class="eyebrow">Sekilas Air Terjun Nglirip</p>
          <h2>Pesona alam eksotis dengan balutan legenda masa lalu</h2>
          <p class="lead">
            Tersembunyi di balik tebing batuan kapur, Air Terjun Nglirip mempesona setiap mata dengan aliran airnya yang deras dan berwarna toska. Destinasi alam ini tak sekadar menyejukkan, tapi juga menghidupi UMKM warga sekitar.
          </p>
          <ul class="intro-points">
            <li>Ketinggian air terjun mencapai 25 meter dari permukaan sungai</li>
            <li>Warna air toska alami dari mata air pegunungan kars Tuban</li>
            <li>Dikelola swadaya oleh warga sekitar untuk kesejahteraan desa</li>
          </ul>
          <NuxtLink to="/tentang-kami" class="btn btn--dark">Baca Kisah & Legenda</NuxtLink>
        </div>
      </div>
    </section>

    <PetalDivider />

    <!-- DESTINASI -->
    <section class="section section--tint destinations">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Titik Kunjungan</p>
            <h2>Pesona Nglirip yang sayang dilewatkan</h2>
          </div>
          <NuxtLink to="/galeri" class="link-more">Lihat semua di galeri &rarr;</NuxtLink>
        </div>

        <div class="dest-grid">
          <article v-for="d in destinations" :key="d.slug" class="dest-card">
            <div class="dest-media petal-frame">
              <img :src="d.img" :alt="d.title" loading="lazy" width="900" height="700" />
              <span class="tag-pill dest-tag">{{ d.tag }}</span>
            </div>
            <h3>{{ d.title }}</h3>
            <p>{{ d.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <PetalDivider flip />

    <!-- UMKM HIGHLIGHT -->
    <section class="section umkm-highlight">
      <div class="container">
        <div class="umkm-header">
          <p class="eyebrow">Ekonomi Warga</p>
          <h2>Nikmati wisata, dukung ekonomi warga lokal</h2>
          <p class="lead">
            Di sekitar area air terjun, lapak-lapak sederhana dikelola warga desa menyajikan makanan khas Tuban dan kerajinan, memberdayakan ekonomi masyarakat sekitar.
          </p>
        </div>

        <div class="umkm-cards">
          <article v-for="u in umkmList" :key="u.slug" class="umkm-card">
            <img :src="u.img" :alt="u.name" loading="lazy" width="800" height="600" />
            <div class="umkm-card-body">
              <div>
                <span class="tag-pill">{{ u.category }}</span>
              </div>
              <h3>{{ u.name }}</h3>
              <p>{{ u.desc }}</p>
              <div class="umkm-card-footer">
                <span class="owner-name">{{ u.owner }}</span>
                <strong>{{ u.price }}</strong>
              </div>
            </div>
          </article>
        </div>
        
        <div class="btn-view-all">
          <NuxtLink to="/umkm" class="btn btn--primary">Lihat Semua UMKM</NuxtLink>
        </div>
      </div>
    </section>

    <PetalDivider />

    <!-- GALLERY PREVIEW -->
    <section class="section section--tint gallery-preview">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Galeri</p>
            <h2>Air Terjun Nglirip dalam bingkai</h2>
          </div>
          <NuxtLink to="/galeri" class="link-more">Buka galeri penuh &rarr;</NuxtLink>
        </div>

        <div class="gal-grid">
          <figure v-for="(g, i) in gallery" :key="g.id" class="gal-item" :class="`span-${(i % 3) + 1}`">
            <img :src="g.img" :alt="g.caption" loading="lazy" width="800" height="800" />
            <figcaption>{{ g.caption }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- CTA / KUNJUNGI -->
    <section class="section visit-cta">
      <div class="container visit-grid">
        <div>
          <p class="eyebrow eyebrow--light">Rencanakan Kunjungan</p>
          <h2>Gemuruh air memanggil, pesona alam menanti</h2>
          <p class="lead lead--light">
            Buka setiap hari pukul 07.00–17.00 WIB. Nikmati segarnya alam bebas dan 
            bercengkerama sambil mencicipi kuliner lokal Nglirip.
          </p>
        </div>
        <div class="visit-actions">
          <NuxtLink to="/tentang-kami" class="btn btn--primary">Tentang Kami</NuxtLink>
          <NuxtLink to="/umkm" class="btn btn--ghost">Jelajahi Kuliner</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* INTRO */
.intro-grid {
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: 64px;
  align-items: center;
}
.intro-media img { width: 100%; height: 100%; object-fit: cover; aspect-ratio: 9 / 10; }
.intro-text h2 { font-size: clamp(1.8rem, 3vw, 2.5rem); margin-top: 14px; }
.intro-text .lead { margin-top: 20px; font-size: 1.05rem; color: #5b4152; max-width: 46ch; }
.intro-points {
  margin: 26px 0 32px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.intro-points li {
  padding-left: 26px;
  position: relative;
  font-weight: 600;
  font-size: 0.95rem;
}
.intro-points li::before {
  content: '';
  position: absolute;
  left: 0; top: 6px;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--blossom);
}

/* SECTION HEAD */
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}
.section-head h2 { font-size: clamp(1.7rem, 2.8vw, 2.3rem); margin-top: 12px; max-width: 30ch; }
.link-more { font-weight: 700; color: var(--blossom-deep); white-space: nowrap; }
.link-more:hover { text-decoration: underline; }

/* DESTINATIONS */
.dest-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.dest-media { position: relative; aspect-ratio: 4/3.1; margin-bottom: 20px; }
.dest-media img { width: 100%; height: 100%; object-fit: cover; }
.dest-tag { position: absolute; left: 16px; bottom: 16px; background: rgba(255,255,255,0.92); }
.dest-card h3 { font-size: 1.2rem; margin-bottom: 8px; }
.dest-card p { font-size: 0.93rem; color: #5b4152; }

/* UMKM REDESIGN */
.umkm-highlight {
  background: var(--rose-soft);
  padding: 100px 0;
}
.umkm-header {
  text-align: center;
  margin-bottom: 60px;
}
.umkm-header .eyebrow { justify-content: center; }
.umkm-header h2 { font-size: clamp(2rem, 4vw, 2.8rem); margin-top: 16px; }
.umkm-header .lead { max-width: 600px; margin: 20px auto 0; color: #5b4152; }

.umkm-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}
.umkm-card {
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px -20px rgba(201, 138, 156, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}
.umkm-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 50px -20px rgba(201, 138, 156, 0.4);
}
.umkm-card img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
}
.umkm-card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.umkm-card-body h3 { font-size: 1.25rem; margin: 12px 0 6px; }
.umkm-card-body p { font-size: 0.95rem; color: #6a4f61; margin-bottom: 20px; line-height: 1.5; flex-grow: 1; }
.umkm-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(0,0,0,0.05);
}
.umkm-card-footer strong { color: var(--blossom-deep); font-size: 1.1rem; }
.owner-name { font-size: 0.85rem; color: #8a7382; font-weight: 500; }
.btn-view-all { margin-top: 60px; text-align: center; }

/* GALLERY PREVIEW */
.gal-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}
.gal-item {
  margin: 0;
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  grid-column: span 2;
  aspect-ratio: 1/1;
}
.gal-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.gal-item:hover img { transform: scale(1.08); }
.gal-item figcaption {
  position: absolute; left: 0; right: 0; bottom: 0;
  padding: 14px 14px 12px;
  font-size: 0.78rem;
  color: #fff;
  background: linear-gradient(0deg, rgba(59,20,40,0.85), transparent);
}

/* VISIT CTA */
.visit-cta {
  background: linear-gradient(120deg, var(--blossom-deep), var(--plum) 78%);
  color: #fff;
}
.visit-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}
.visit-grid h2 { color: #fff; font-size: clamp(1.7rem, 3vw, 2.4rem); margin-top: 12px; max-width: 20ch; }
.lead--light { color: rgba(255,255,255,0.85); max-width: 44ch; margin-top: 18px; }
.visit-actions { display: flex; gap: 16px; flex-wrap: wrap; }

@media (max-width: 960px) {
  .intro-grid, .umkm-grid { grid-template-columns: 1fr; }
  .intro-media { order: -1; }
  .dest-grid { grid-template-columns: 1fr; }
  .umkm-cards { grid-template-columns: repeat(3, 1fr); }
  .gal-grid { grid-template-columns: repeat(3, 1fr); }
  .gal-item { grid-column: span 1; }
}
@media (max-width: 620px) {
  .umkm-cards { grid-template-columns: 1fr 1fr; }
  .gal-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
