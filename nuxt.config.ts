import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Air Terjun Nglirip Tuban — Pesona Alam Eksotis',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Wisata Air Terjun Nglirip Tuban — pesona air terjun eksotis dengan air berwarna toska, mitos legenda lokal, dan pemandangan alam yang asri.'
        },
        { property: 'og:title', content: 'Air Terjun Nglirip Tuban' },
        {
          property: 'og:description',
          content: 'Jelajahi keindahan alam, legenda, dan kesegaran Air Terjun Nglirip Tuban.'
        },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      routes: ['/', '/tentang-kami', '/umkm', '/galeri']
    }
  },

  vite: {
    assetsInclude: ['**/*.JPG', '**/*.MOV']
  }
})
