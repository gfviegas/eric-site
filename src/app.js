import './assets/sass/config.sass'

import Vue from 'vue'

// COMPONENTS
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

// HOME PAGE
import Home from './pages/home/Home.vue'

// INSTITUTIONAL
import { routes as InstitutionalRoutes } from './pages/institutional'
import { routes as ScoutRoutes } from './pages/scout'
import { routes as NewsRoutes } from './pages/news'
import { routes as FormsRoutes } from './pages/forms'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import SocialSharing from 'vue-social-sharing'
import VueHead from 'vue-head'
import VeeValidate, { Validator } from 'vee-validate'
import Messages from 'vee-validate/dist/locale/pt_BR'

const moment = require('moment')
require('moment/locale/pt-br')

Vue.use(require('vue-moment'), {
  moment
})

Validator.addLocale(Messages)
Vue.use(VeeValidate, {
  locale: 'pt_BR'
})
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(SocialSharing)
Vue.use(VueHead, {
  separator: ' | ',
  complement: 'Escoteiros de Minas'
})

Vue.filter('stripped', value => {
  return value.replace(/(<([^>]+)>)/ig, '')
})
Vue.filter('imgSrc', value => {
  return `${process.env.IMG_URL}${value}`
})

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      breadcrumb: 'Home'
    },
    component: Home
  },
  {...InstitutionalRoutes},
  {...NewsRoutes},
  {...ScoutRoutes},
  {...FormsRoutes},

  // Redirect to Home
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active',
  mode: 'history'
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})

const app = new Vue({
  router,
  components: {
    'main-header': Header,
    'main-footer': Footer
  }
})

export { app, router }
