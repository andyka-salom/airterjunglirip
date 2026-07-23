<script setup>
useHead({ title: 'Blog & Artikel — Air Terjun Nglirip Tuban' })

const posts = useBlog()
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow eyebrow--light">Blog & Artikel</p>
        <h1>Kabar Terbaru & Cerita Nglirip</h1>
        <p class="page-hero-sub">
          Jelajahi berbagai artikel menarik seputar wisata, kuliner, panduan, hingga kisah legenda dari kawasan Air Terjun Nglirip Tuban.
        </p>
      </div>
    </section>

    <section class="section blog-section">
      <div class="container">
        <div class="blog-grid">
          <article v-for="post in posts" :key="post.slug" class="blog-card">
            <div class="blog-media petal-frame">
              <NuxtLink :to="`/blog/${post.slug}`">
                <img :src="post.img" :alt="post.title" loading="lazy" width="800" height="600" />
              </NuxtLink>
            </div>
            <div class="blog-body">
              <p class="blog-date">{{ post.date }}</p>
              <h3>
                <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
              </h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <NuxtLink :to="`/blog/${post.slug}`" class="read-more">Baca Selengkapnya &rarr;</NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 168px 0 80px;
  background: linear-gradient(150deg, var(--plum), var(--blossom-deep) 130%);
  color: #fff;
}
.page-hero h1 { font-size: clamp(2.1rem, 4.4vw, 3.1rem); margin-top: 16px; max-width: 22ch; }
.page-hero-sub { margin-top: 20px; max-width: 56ch; color: rgba(255,255,255,0.85); font-size: 1.05rem; }

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 40px;
}

.blog-card {
  display: flex;
  flex-direction: column;
}

.blog-media {
  margin-bottom: 20px;
  aspect-ratio: 4/3;
  overflow: hidden;
}
.blog-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.blog-media:hover img {
  transform: scale(1.05);
}

.blog-body h3 {
  font-size: 1.4rem;
  margin: 8px 0 12px;
  line-height: 1.3;
}
.blog-body h3 a:hover {
  color: var(--blossom-deep);
}

.blog-date {
  font-size: 0.85rem;
  color: var(--blossom-deep);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.blog-excerpt {
  color: #5b4152;
  font-size: 0.95rem;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--plum);
  display: inline-block;
}
.read-more:hover {
  color: var(--blossom-deep);
}
</style>
