<script setup>
const route = useRoute()
const posts = useBlog()

const post = computed(() => posts.find((p) => p.slug === route.params.slug))

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artikel tidak ditemukan' })
}

useHead({
  title: `${post.value.title} — Blog Nglirip Tuban`
})
</script>

<template>
  <div>
    <section class="blog-hero">
      <div class="container blog-hero-inner">
        <NuxtLink to="/blog" class="back-link">&larr; Kembali ke Blog</NuxtLink>
        <p class="eyebrow eyebrow--light">{{ post.date }}</p>
        <h1>{{ post.title }}</h1>
      </div>
    </section>

    <section class="section blog-content-section">
      <div class="container blog-container">
        <img :src="post.img" :alt="post.title" class="blog-featured-img petal-frame" />
        
        <div class="blog-article">
          <p v-for="(paragraph, index) in post.content" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-hero {
  padding: 180px 0 60px;
  background: var(--plum);
  color: #fff;
  text-align: center;
}

.blog-hero-inner {
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  margin-bottom: 30px;
  color: var(--blossom);
  font-weight: 600;
  font-size: 0.9rem;
}
.back-link:hover {
  text-decoration: underline;
}

.blog-hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-top: 16px;
}

.blog-container {
  max-width: 800px;
  margin: 0 auto;
}

.blog-featured-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  margin-top: -120px;
  margin-bottom: 60px;
  box-shadow: var(--shadow-soft);
  position: relative;
  z-index: 10;
  background: #fff;
}

.blog-article p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 24px;
  color: #44323e;
}
.blog-article p:first-of-type {
  font-size: 1.25rem;
  color: var(--plum);
}
</style>
