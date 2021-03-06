// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    name: 'author',
    content: 'Cosimo Leone'
  })

  head.meta.push({
    name: 'description',
    content: 'Cosimo Leone\'s online portfolio and digital curriculum vitae.'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Overpass:wght@800&display=swap',
  })
}
