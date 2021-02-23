export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Tash Bakes',
    title: 'tash-bakes',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playball&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/firebase', ['vue-scrollto/nuxt', { duration: 500, offset: -100 }]],

  firebase: {
    config: {
      apiKey: 'AIzaSyCYuCcjXBbcI_eJEe-ybD3RJvxgnqEb98E',
      authDomain: 'tasha-bakes.firebaseapp.com',
      projectId: 'tasha-bakes',
      storageBucket: 'tasha-bakes.appspot.com',
      messagingSenderId: '1092487134347',
      appId: '1:1092487134347:web:3a1a63bd9a69db2be3e88e',
      databaseURL: '',
      measurementId: 'G-E6V5M65S11',
    },
    services: {
      analytics: true,
      onFirebaseHosting: true,
      storage: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    environ: process.env.NODE_ENV || 'development',
    serviceId: 'service_va9yyy8',
    templateId: 'template_3tl879f',
    userId: 'user_49xVOX2trBOy3FkIZpaWa',
  },
}
