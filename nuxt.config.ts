// https://nuxt.com/docs/api/configuration/nuxt-config
import en from "./lang/en";
import fa from "./lang/fa";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@formkit/auto-animate',
    '@nuxtjs/i18n',
    'nuxt-swiper',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    "@nuxt/eslint",
    '@nuxtjs/seo',
    'nuxt-viewport',
    '@dargmuesli/nuxt-cookie-control',
    'nuxt-auth-utils',
    'nuxt-aos'
  ],
  site:{
    url: 'https://example.com',
    name: 'Awesome Site',
    description: 'Welcome to my awesome site!',
  },
  css: ['~/assets/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/colors.scss" as *;'
        }
      }
    }
  },
  experimental: {
    viewTransition: true
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  i18n:{
    locales:[
      {code:'fa',dir: 'rtl', file:'./lang/fa.js',iso:'fa-IR'},
      {code:'en',dir: 'ltr', file:'./lang/en.js',iso:'en-US'},
    ],
    defaultLocale: 'en'
  }
})