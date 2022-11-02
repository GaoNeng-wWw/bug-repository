// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-purgecss'],
  plugins: [
    {
      src: '~/plugin/ant-design'
    },
    {
      src: '~/plugin/vue-devui'
    }
  ],
  webpack:{
    extractCSS: {
      ignoreOrder: true
    }
  },
})
