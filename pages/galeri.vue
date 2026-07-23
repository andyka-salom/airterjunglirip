<script setup>
useHead({ title: 'Galeri Foto — Air Terjun Nglirip Tuban' })

const allPhotos = useGallery()
const categories = ['Semua', ...new Set(allPhotos.map((g) => g.category))]
const active = ref('Semua')
const lightboxIndex = ref(null)

const filtered = computed(() =>
  active.value === 'Semua' ? allPhotos : allPhotos.filter((g) => g.category === active.value)
)

function openLightbox(i) { lightboxIndex.value = i }
function closeLightbox() { lightboxIndex.value = null }
function next() { lightboxIndex.value = (lightboxIndex.value + 1) % filtered.value.length }
function prev() { lightboxIndex.value = (lightboxIndex.value - 1 + filtered.value.length) % filtered.value.length }

function onKey(e) {
  if (lightboxIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow eyebrow--light">Galeri</p>
        <h1>Keindahan Nglirip dari Setiap Sudut</h1>
        <p class="page-hero-sub">
          Kumpulan potret eksotis Air Terjun Nglirip, kejernihan air toska, serta aktivitas kuliner dan budaya masyarakat sekitar.
        </p>
      </div>
    </section>

    <section class="section gallery-section">
      <div class="container">
        <div class="filter-bar" role="tablist" aria-label="Filter kategori galeri">
          <button
            v-for="c in categories"
            :key="c"
            class="filter-chip"
            :class="{ active: active === c }"
            @click="active = c"
          >
            {{ c }}
          </button>
        </div>

        <div class="masonry">
          <button
            v-for="(g, i) in filtered"
            :key="g.id"
            class="mas-item"
            :aria-label="`Perbesar foto: ${g.caption}`"
            @click="openLightbox(i)"
          >
            <img :src="g.img" :alt="g.caption" loading="lazy" width="700" height="700" />
            <span class="mas-overlay">
              <span class="tag-pill">{{ g.category }}</span>
              <span class="mas-caption">{{ g.caption }}</span>
            </span>
          </button>
        </div>
      </div>
    </section>

    <transition name="fade">
      <div v-if="lightboxIndex !== null" class="lightbox" role="dialog" aria-modal="true" @click.self="closeLightbox">
        <button class="lb-close" aria-label="Tutup galeri" @click="closeLightbox">&times;</button>
        <button class="lb-nav lb-prev" aria-label="Foto sebelumnya" @click="prev">&#8249;</button>
        <figure class="lb-figure">
          <img :src="filtered[lightboxIndex].img" :alt="filtered[lightboxIndex].caption" />
          <figcaption>{{ filtered[lightboxIndex].caption }}</figcaption>
        </figure>
        <button class="lb-nav lb-next" aria-label="Foto berikutnya" @click="next">&#8250;</button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 168px 0 80px;
  background: linear-gradient(150deg, var(--plum), var(--blossom-deep) 130%);
  color: #fff;
}
.page-hero h1 { font-size: clamp(2.1rem, 4.4vw, 3.1rem); margin-top: 16px; max-width: 20ch; }
.page-hero-sub { margin-top: 20px; max-width: 56ch; color: rgba(255,255,255,0.85); font-size: 1.05rem; }

.filter-bar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 40px;
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

.masonry {
  columns: 3 260px;
  column-gap: 20px;
}
.mas-item {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 0 20px;
  border: none;
  padding: 0;
  border-radius: 18px;
  overflow: hidden;
  break-inside: avoid;
  cursor: zoom-in;
  background: none;
}
.mas-item:nth-child(3n+1) img { aspect-ratio: 1/1.2; }
.mas-item:nth-child(3n+2) img { aspect-ratio: 1/0.85; }
.mas-item:nth-child(3n) img { aspect-ratio: 1/1; }
.mas-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.mas-item:hover img { transform: scale(1.06); }
.mas-item:focus-visible { outline: 3px solid var(--blossom-deep); outline-offset: 2px; }

.mas-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  padding: 16px;
  background: linear-gradient(0deg, rgba(59,20,40,0.82), transparent 55%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.mas-item:hover .mas-overlay, .mas-item:focus-visible .mas-overlay { opacity: 1; }
.mas-caption { color: #fff; font-size: 0.82rem; text-align: left; }

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(20, 8, 16, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.lb-figure { max-width: 900px; text-align: center; }
.lb-figure img { max-width: 100%; max-height: 76vh; border-radius: 12px; margin: 0 auto; }
.lb-figure figcaption { color: #fff; margin-top: 16px; font-size: 0.95rem; opacity: 0.85; }
.lb-close {
  position: absolute; top: 24px; right: 28px;
  background: none; border: none; color: #fff;
  font-size: 2.2rem; line-height: 1; cursor: pointer;
}
.lb-nav {
  background: rgba(255,255,255,0.12);
  border: none;
  color: #fff;
  width: 52px; height: 52px;
  border-radius: 50%;
  font-size: 1.8rem;
  cursor: pointer;
  flex-shrink: 0;
}
.lb-nav:hover { background: var(--blossom-deep); }
.lb-prev { margin-right: 20px; }
.lb-next { margin-left: 20px; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 700px) {
  .masonry { columns: 2 160px; }
  .lightbox { padding: 16px; }
  .lb-nav { width: 40px; height: 40px; font-size: 1.4rem; }
}
</style>
