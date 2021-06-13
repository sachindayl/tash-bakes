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
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Cakes, Cupcakes, Baking, Bake, Waterloo, Kitchener, Toronto, Birthdays, Weddings',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Baking amazing cakes and cupcakes in the Waterloo, Toronto, Ontario area.',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-fb-customer-chat.js', mode: 'client' },
    '~/plugins/vue-agile',
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxt/postcss8',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
    ['vue-scrollto/nuxt', { duration: 300, offset: -90 }],
    'nuxt-compress',
    [
      'nuxt-lazy-load',
      {
        directiveOnly: true,
      },
    ],
  ],

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
        collectionEnabled: true, // default
      },
      onFirebaseHosting: true,
      storage: true,
      firestore: true,
      performance: true,
      auth: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': true,
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: ['vue-agile'],
  },

  env: {
    environ: process.env.NODE_ENV || 'development',
    serviceId: 'service_va9yyy8',
    templateId: 'template_3tl879f',
    userId: 'user_49xVOX2trBOy3FkIZpaWa',
  },

  tailwindcss: {
    exposeConfig: true,
    jit: false,
  },
}
