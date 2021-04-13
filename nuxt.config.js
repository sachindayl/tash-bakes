export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Bakes by Tash',
    title: 'Bakes by Tash',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playball&display=swap',
      },
      {
        rel: 'preconnect',
        href: 'https://firebase.googleapis.com'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vue-fb-customer-chat.js", ssr: false }],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/firebase', ['vue-scrollto/nuxt', { duration: 300, offset: -90 }], 'nuxt-compress',  'nuxt-lazy-load'],

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
      analytics: {
        collectionEnabled: true // default
      },
      onFirebaseHosting: true,
      storage: true,
      firestore: true,
      performance: true
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
