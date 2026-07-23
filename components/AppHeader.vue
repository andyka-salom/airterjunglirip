<script setup>
const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/tentang-kami', label: 'Tentang Kami' },
  { to: '/umkm', label: 'UMKM' },
  { to: '/galeri', label: 'Galeri' },
  { to: '/blog', label: 'Blog' }
]
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled, 'is-open': open }">
    <div class="container bar">
      <NuxtLink to="/" class="brand">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="30" height="30">
            <path fill="currentColor" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" opacity="0.9"/>
          </svg>
        </span>
        <span class="brand-text">
          <strong>Air Terjun Nglirip</strong>
          <small>Wisata Alam Tuban</small>
        </span>
      </NuxtLink>

      <nav class="nav-links" aria-label="Navigasi utama">
        <NuxtLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</NuxtLink>
      </nav>

      <div class="bar-actions">
        <NuxtLink to="/umkm" class="btn btn--primary btn--sm">Dukung UMKM</NuxtLink>
        <button
          class="burger"
          :aria-expanded="open"
          aria-label="Buka menu"
          @click="open = !open"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>

    <transition name="fade-drop">
      <nav v-if="open" class="mobile-nav" aria-label="Navigasi mobile">
        <NuxtLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</NuxtLink>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease;
  padding: 20px 0;
}
.site-header.is-scrolled,
.site-header.is-open {
  background: rgba(255, 250, 247, 0.92);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px -18px rgba(59, 36, 54, 0.25);
  padding: 12px 0;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  transition: color 0.3s ease;
}
.is-scrolled .brand, .is-open .brand { color: var(--plum); }
.brand-mark { color: var(--blossom); display: inline-flex; }
.brand-text { display: flex; flex-direction: column; line-height: 1.1; }
.brand-text strong { font-family: var(--font-display); font-size: 1.15rem; }
.brand-text small { font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.75; }

.nav-links {
  display: flex;
  gap: 32px;
  font-weight: 600;
  font-size: 0.95rem;
}
.nav-links a {
  color: #fff;
  opacity: 0.9;
  position: relative;
  padding: 4px 0;
  transition: opacity 0.3s ease, color 0.3s ease;
}
.is-scrolled .nav-links a, .is-open .nav-links a { color: var(--plum); }
.nav-links a:hover { opacity: 1; }
.nav-links a.router-link-exact-active::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -4px;
  height: 3px;
  border-radius: 3px;
  background: var(--blossom);
}

.bar-actions { display: flex; align-items: center; gap: 14px; }
.btn--sm { padding: 10px 20px; font-size: 0.85rem; }

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.burger span {
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: background 0.3s ease;
}
.is-scrolled .burger span, .is-open .burger span { background: var(--plum); }

.mobile-nav {
  display: none;
}

@media (max-width: 860px) {
  .nav-links { display: none; }
  .btn--sm { display: none; }
  .burger { display: flex; }
  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: var(--cream);
    padding: 16px 24px 24px;
    font-weight: 700;
  }
  .mobile-nav a { padding: 12px 4px; border-bottom: 1px solid var(--rose-soft); color: var(--plum); }
}

.fade-drop-enter-active, .fade-drop-leave-active { transition: all 0.25s ease; }
.fade-drop-enter-from, .fade-drop-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
