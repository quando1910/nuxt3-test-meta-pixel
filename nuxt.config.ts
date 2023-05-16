// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'facebook-domain-verification',
          content: 'a78f89ut8ltchpdcfnl7kl8n048zbl'
        }
      ]
    },
  },
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
