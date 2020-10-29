require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },

  loading: '~/components/loading.vue',

  head: {
    title: 'My eCommerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vue-plugins.client.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseUrl: process.env.API_URL,
    credentials: true
  },
  auth: {
    strategies: {
      cookie: {
        cookie: {
          name: 'XSRF-TOKEN'
        }
      },
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.API_URL
      }
    }
    // redirect: {
    //   login: '/login',
    //   logout: '/login',
    //   callback: '/login',
    //   home: '/'
    // }
  },
  router: {
    middleware: []
  },

  eslint: {
    fix: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // extend (config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/,
    //       options: {
    //         fix: true
    //       }
    //     })
    //   }
    // }
  },
  tailwindcss: {
    exposeConfig: true
  }
}
