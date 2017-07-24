import './assets/sass/config.sass'

import Vue from 'vue'

// COMPONENTS
import OfflineHelper from './components/offline-helper/OfflineHelper.vue'
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

// GENERAL PAGES
import Home from './pages/home/Home.vue'

// INSTITUTIONAL
import { routes as InstitutionalRoutes } from './pages/institutional'
import { routes as ScoutRoutes } from './pages/scout'
import { routes as NewsRoutes } from './pages/news'
import { routes as EventsRoutes } from './pages/events'
import { routes as FormsRoutes } from './pages/forms'
import { routes as ContactRoutes } from './pages/contact'
import { routes as NewsletterRoutes } from './pages/newsletter'
import { routes as DocumentsRoutes } from './pages/documents'

import sw from './services/worker'
import OneSignal from './services/onesignal'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import SocialSharing from 'vue-social-sharing'
import VueHead from 'vue-head'
import VeeValidate, { Validator } from 'vee-validate'
import Messages from 'vee-validate/dist/locale/pt_BR'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'
import VueAnalytics from 'vue-analytics'

const moment = require('moment')
require('moment/locale/pt-br')

sw.register()

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
  return value.trim().replace(/(<([^>]+)>)/ig, '').replace(/&(.*);/gi, '')
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
  {...EventsRoutes},
  {...ScoutRoutes},
  {...FormsRoutes},
  {...ContactRoutes},
  {...NewsletterRoutes},
  {...DocumentsRoutes},

  // Redirect to Home
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active',
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.afterEach((to, from) => {
  window.setTimeout(() => {
    window.FB.XFBML.parse()
  }, 1500)
})

const id = 'UA-96528348-1'
Vue.use(VueAnalytics, { id, router })

const toast = function ({title, message, type, timeout, cb, show}) {
  if (show) {
    return miniToastr[type](message, title, timeout, cb)
  }
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

// Activate plugin
Vue.use(VueNotifications, options)

const app = new Vue({
  router,
  components: {
    'offline-helper': OfflineHelper,
    'main-header': Header,
    'main-footer': Footer
  },
  mounted () {
    const types = {
      success: 'success',
      error: 'error',
      info: 'info',
      warn: 'warn'
    }
    miniToastr.init({types: types, timeout: 5000})
    miniToastr.setIcon('error', 'i', {'class': 'fa fa-warning'})
    miniToastr.setIcon('info', 'i', {'class': 'fa fa-info-circle'})
    miniToastr.setIcon('success', 'i', {'class': 'fa fa-check-circle-o'})
    OneSignal.init()
  }
})

export { app, router }
