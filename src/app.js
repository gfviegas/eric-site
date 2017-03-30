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
import { routes as NewsletterRoutes } from './pages/newsletter'
import { routes as DocumentsRoutes } from './pages/documents'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import SocialSharing from 'vue-social-sharing'
import VueHead from 'vue-head'
import VeeValidate, { Validator } from 'vee-validate'
import Messages from 'vee-validate/dist/locale/pt_BR'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'

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
  mode: 'history'
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})

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
  }
})

export { app, router }
