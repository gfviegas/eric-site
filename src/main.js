import './assets/sass/config.sass'

import Vue from 'vue'

// COMPONENTS
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

// HOME PAGE
import Home from './pages/home/Home.vue'

// INSTITUTIONAL
import { routes as InstitutionalRoutes } from './pages/institutional'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {...InstitutionalRoutes},

  // Redirect to Home
  {
    path: '*',
    redirect: '/'
  }
]

// Object.assign(InstitutionalRoutes, ...routes)
console.log(routes)

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active'
})

new Vue({
  router,
  components: {
    'main-header': Header,
    'main-footer': Footer
  }
}).$mount('#app')
