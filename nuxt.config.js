// https://github.com/vuex-orm/vuex-orm/issues/255#issuecomment-457619889
// This prevents displaying useless "Cannot stringify arbitrary non-POJOs"
// warning
process.env.NUXT_ENV_DEVALUE_LOG_LIMIT = -1;

module.exports = {
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxtjs/browserconfig',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en.json',
          },
        ],
        defaultLocale: 'en',
        langDir: 'locales/',
        lazy: true,
        strategy: 'no_prefix',
        vueI18n: {
          fallbackLocale: 'en',
        },
        detectBrowserLanguage: {
          useCookie: true,
          fallbackLocale: 'en',
        },
      },
    ],
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'base-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js base project',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon-32x32.png',
      },
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png',
      },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: 'white' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Additional vue js methods
  */
  plugins: [
    { src: '~/plugins/directives/index.js', ssr: false },
    { src: '~/plugins/filters/index.js', ssr: false },
  ],
  /*
  ** Global styles
  */
  css: [
    '~/assets/styles/index.scss',
  ],
  /*
  ** Global scss utils (mixins, vars, virtual-classes)
  */
  styleResources: {
    scss: [
      '~/assets/styles/resources/index.scss',
    ],
  },
  /*
  ** Browserconfig settings
  */
  browserconfig: {
    tile: {
      TileColor: '#da532c',
      square70x70logo: { '@': { src: 'static/mstile-70x70.png' } },
      square144x144logo: { '@': { src: 'static/mstile-144x144.png' } },
      square150x150logo: { '@': { src: 'static/mstile-150x150.png' } },
      wide310x150logo: { '@': { src: 'static/mstile-310x150.png' } },
      square310x310logo: { '@': { src: 'static/mstile-310x310.png' } },
      applicationName: 'Example',
    },
  },
  /*
  ** PWA settings
  */
  pwa: {
    manifest: {
      name: 'Example',
      short_name: 'BN',
      lang: 'en',
      background_color: '#0b0c1a',
      theme_color: '#0b0c1a',
      categories: ['some', 'keywords'],
      dir: 'ltr',
      display: 'standalone',
      icons: [
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
