// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
  },
  modules: [
    'nuxt3-meta-pixel',
  ],
  facebook: {
    track: 'PageView',
    pixelId: '499049873948453',
    autoPageView: true,
    disabled: false
  },
})
