module.exports = {
  /*
  ** Headers of the page
  */
  plugins: ['~/plugins/vue-moment'],
  head: {
    title: 'iholding',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/fav.png' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/images/fav.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/menu/ddsmoothmenu.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/waitMe.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/reset.css' }
    ],
    script : [
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'},
      { type: 'text/javascript', src: '/js/base/bootstrap.min.js'},
      { type: 'text/javascript', src: '/js/menu/ddsmoothmenu.js'},
      { type: 'text/javascript', src: '/js/waitMe.min.js'},
      { type: 'text/javascript', src: '/js/functions.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    build: { vendor: ['axios'] }
  }
}

