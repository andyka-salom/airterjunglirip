<script setup>
useHead({ title: 'UMKM Lokal — Air Terjun Nglirip Tuban' })

const allUmkm = useUmkm()
const categories = ['Semua', ...new Set(allUmkm.map((u) => u.category))]
const active = ref('Semua')

const filtered = computed(() =>
  active.value === 'Semua' ? allUmkm : allUmkm.filter((u) => u.category === active.value)
)
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow eyebrow--light">UMKM Nglirip Tuban</p>
        <h1>Dukung Ekonomi Lokal Nglirip</h1>
        <p class="page-hero-sub">
          Menikmati segarnya Air Terjun Nglirip semakin lengkap dengan sajian kuliner dan jajanan khas Tuban. Setiap pembelian Anda turut memajukan kesejahteraan warga sekitar.
        </p>
      </div>
    </section>

    <section class="section umkm-section">
      <div class="container">
        <div class="filter-bar" role="tablist" aria-label="Filter kategori UMKM">
          <button
            v-for="c in categories"
            :key="c"
            class="filter-chip"
            :class="{ active: active === c }"
            role="tab"
            :aria-selected="active === c"
            @click="active = c"
          >
            {{ c }}
          </button>
        </div>

        <div class="umkm-grid">
          <article v-for="u in filtered" :key="u.slug" class="umkm-card">
            <div class="umkm-media">
              <img :src="u.img" :alt="u.name" loading="lazy" width="800" height="900" />
              <span class="tag-pill">{{ u.category }}</span>
            </div>
            <div class="umkm-body">
              <h3>{{ u.name }}</h3>
              <p class="owner">Oleh {{ u.owner }}</p>
              <p class="desc">{{ u.desc }}</p>
              <div class="umkm-foot">
                <strong>{{ u.price }}</strong>
                <a href="#" class="mini-link">Pesan Sekarang &rarr;</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--tint umkm-cta">
      <div class="container umkm-cta-inner">
        <div>
          <p class="eyebrow">Warga Desa Sekitar?</p>
          <h2>Ingin Berjualan di Area Nglirip?</h2>
          <p class="lead">
            Pengelola kawasan wisata membuka kesempatan bagi warga lokal untuk memasarkan produk kuliner maupun kerajinan di area sekitar air terjun.
          </p>
        </div>
        <a href="#" class="btn btn--primary">Hubungi Pengelola Nglirip</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 168px 0 80px;
  background: linear-gradient(150deg, var(--blossom-deep), var(--plum) 130%);
  color: #fff;
}
.page-hero h1 { font-size: clamp(2.1rem, 4.4vw, 3.1rem); margin-top: 16px; max-width: 20ch; }
.page-hero-sub { margin-top: 20px; max-width: 56ch; color: rgba(255,255,255,0.85); font-size: 1.05rem; }

.filter-bar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 44px;
}
.filter-chip {
  padding: 10px 20px;
  border-radius: 999px;
  border: 1.5px solid var(--rose-soft);
  background: #fff;
  font-weight: 700;
  font-size: 0.86rem;
  cursor: pointer;
  color: var(--plum);
  transition: all 0.25s ease;
}
.filter-chip:hover { border-color: var(--blossom); }
.filter-chip.active { background: var(--blossom-deep); border-color: var(--blossom-deep); color: #fff; }

.umkm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 28px;
}
.umkm-card {
  background: #fff;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 18px 40px -26px rgba(59, 36, 54, 0.4);
  display: flex;
  flex-direction: column;
}
.umkm-media { position: relative; }
.umkm-media img { width: 100%; aspect-ratio: 4/3.4; object-fit: cover; }
.umkm-media .tag-pill { position: absolute; left: 14px; top: 14px; background: rgba(255,255,255,0.94); }
.umkm-body { padding: 22px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
.umkm-body h3 { font-size: 1.08rem; }
.owner { font-size: 0.82rem; color: var(--blossom-deep); font-weight: 700; }
.desc { font-size: 0.92rem; color: #5b4152; flex: 1; }
.umkm-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-top: 14px;
  border-top: 1px dashed var(--rose-soft);
}
.umkm-foot strong { color: var(--blossom-deep); }
.mini-link { font-size: 0.82rem; font-weight: 700; }
.mini-link:hover { text-decoration: underline; }

.umkm-cta-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}
.umkm-cta-inner h2 { font-size: clamp(1.5rem, 2.6vw, 2rem); margin-top: 10px; max-width: 26ch; }
.umkm-cta-inner .lead { margin-top: 14px; color: #5b4152; max-width: 44ch; }

@media (max-width: 960px) {
  .umkm-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 620px) {
  .umkm-grid { grid-template-columns: 1fr; }
}
</style>
