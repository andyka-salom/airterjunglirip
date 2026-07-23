<script setup>
import VIDEO_SRC from '~/assets/VIDEO/IMG_7506.MOV'
import POSTER_SRC from '~/assets/FOTO/IMG_1729.JPG'
</script>

<template>
  <section class="hero">
    <div class="hero-media" aria-hidden="true">
      <video
        class="hero-video"
        :poster="POSTER_SRC"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
      >
        <source :src="VIDEO_SRC" type="video/mp4" />
      </video>
      <div class="hero-overlay" />
      <div class="hero-vignette" />
    </div>

    <div class="container hero-content">
      <p class="eyebrow eyebrow--light">Wisata Alam &middot; Tuban, Jawa Timur</p>
      <h1 class="hero-title">
        Pesona Eksotis <em>Air Terjun</em>,<br />
        Mahakarya Alam Tuban
      </h1>
      <p class="hero-sub">
        Menyusuri keindahan tebing bebatuan, mengagumi air berwarna toska yang jernih,
        dan mendengar gemuruh sejuk dari Air Terjun Nglirip.
      </p>
      <div class="hero-actions">
        <NuxtLink to="/tentang-kami" class="btn btn--primary">Kenali Legenda</NuxtLink>
        <NuxtLink to="/umkm" class="btn btn--ghost">Jelajahi UMKM Lokal</NuxtLink>
      </div>

      <div class="hero-stats">
        <div><strong>25 m</strong><span>ketinggian air terjun</span></div>
        <div><strong>Tosca</strong><span>warna air alami</span></div>
        <div><strong>20+</strong><span>lapak UMKM sekitar</span></div>
      </div>
    </div>

    <a href="#sekilas" class="scroll-cue" aria-label="Gulir ke bawah">
      <span />
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: var(--plum);
}

.hero-media { position: absolute; inset: 0; }
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(0deg, rgba(74, 51, 70, 0.88) 0%, rgba(74, 51, 70, 0.35) 48%, rgba(234, 173, 190, 0.4) 100%);
}
.hero-vignette {
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 160px 40px rgba(20, 8, 16, 0.55);
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-bottom: 96px;
  padding-top: 180px;
  color: #fff;
  max-width: 760px;
}

.eyebrow--light { color: #ffd6e8; }
.eyebrow--light::before { background: #ffd6e8; }

.hero-title {
  font-size: clamp(2.4rem, 5.4vw, 4.2rem);
  margin-top: 18px;
  color: #fff;
}
.hero-title em {
  font-style: italic;
  color: var(--blossom);
}

.hero-sub {
  margin-top: 22px;
  font-size: 1.08rem;
  max-width: 52ch;
  color: rgba(255, 255, 255, 0.88);
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 34px;
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-top: 64px;
  flex-wrap: wrap;
}
.hero-stats div { display: flex; flex-direction: column; }
.hero-stats strong { font-family: var(--font-display); font-size: 1.6rem; color: var(--blossom); }
.hero-stats span { font-size: 0.8rem; opacity: 0.75; margin-top: 2px; }

.scroll-cue {
  position: absolute;
  right: 32px;
  bottom: 40px;
  z-index: 2;
  width: 30px;
  height: 46px;
  border: 2px solid rgba(255, 255, 255, 0.65);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}
.scroll-cue span {
  width: 4px;
  height: 8px;
  border-radius: 3px;
  background: #fff;
  animation: cue 1.8s ease-in-out infinite;
}
@keyframes cue {
  0% { transform: translateY(0); opacity: 1; }
  70% { transform: translateY(12px); opacity: 0; }
  100% { opacity: 0; }
}

@media (max-width: 700px) {
  .hero-content { padding-top: 140px; padding-bottom: 64px; }
  .hero-stats { gap: 26px; margin-top: 44px; }
  .scroll-cue { display: none; }
}
</style>
