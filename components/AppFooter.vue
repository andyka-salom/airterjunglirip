<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container foot-grid">
      <div class="foot-brand">
        <span class="brand-text">
          <strong>Air Terjun Nglirip</strong>
          <small>Wisata Alam Tuban</small>
        </span>
        <p>
          Pesona air terjun eksotis dengan air berwarna toska, keindahan alam asri,
          serta legenda lokal yang memikat.
        </p>
      </div>

      <div class="foot-col">
        <h4>Jelajahi</h4>
        <NuxtLink to="/">Beranda</NuxtLink>
        <NuxtLink to="/tentang-kami">Tentang Kami</NuxtLink>
        <NuxtLink to="/umkm">UMKM</NuxtLink>
        <NuxtLink to="/galeri">Galeri</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </div>

      <div class="foot-col">
        <h4>Kunjungi</h4>
        <p class="foot-text">Desa Mulyoagung, Singgahan<br />Tuban, Jawa Timur, Indonesia</p>
        <p class="foot-text">Buka setiap hari, 07.00–17.00 WIB</p>
      </div>

      <div class="foot-col">
        <h4>Hubungi Kami</h4>
        <p class="foot-text">halo@airterjunnglirip.com</p>
        <p class="foot-text">0821-4314-8939</p>
        <div class="soc">
          <a href="https://www.instagram.com/airterjunnglirip_?igsh=MXhsa2pvYWplZjZoZQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram Nglirip">IG</a>
          <a href="https://wa.me/6282143148939" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Nglirip">WA</a>
          <a href="#" aria-label="YouTube Nglirip">YT</a>
        </div>
      </div>
    </div>

    <div class="container foot-bottom">
      <p>&copy; {{ year }} Air Terjun Nglirip Tuban. Seluruh konten &amp; foto adalah contoh (dummy).</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--plum);
  color: #fff;
  padding-top: 72px;
}
.foot-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.foot-brand .brand-text { display: flex; flex-direction: column; margin-bottom: 14px; }
.foot-brand strong { font-family: var(--font-display); font-size: 1.3rem; }
.foot-brand small { font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.7; }
.foot-brand p { opacity: 0.75; max-width: 32ch; font-size: 0.92rem; }

.foot-col h4 {
  font-family: var(--font-body);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--blossom);
  margin-bottom: 16px;
}
.foot-col a, .foot-text {
  display: block;
  opacity: 0.78;
  font-size: 0.92rem;
  margin-bottom: 10px;
}
.foot-col a:hover { opacity: 1; color: var(--blossom); }

.soc { display: flex; gap: 10px; margin-top: 6px; }
.soc a {
  width: 34px; height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.3);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; font-weight: 700;
  margin-bottom: 0;
}
.soc a:hover { background: var(--blossom); border-color: var(--blossom); }

.foot-bottom {
  padding: 22px 24px;
  font-size: 0.8rem;
  opacity: 0.55;
  text-align: center;
}

@media (max-width: 860px) {
  .foot-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .foot-grid { grid-template-columns: 1fr; }
}
</style>
