import './assets/sass/config.sass'

import Vue from 'vue'
import Home from './pages/home/Home.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active'
})

// Pointing routes to the components they should use
// router.map({
// })

new Vue({
  router
}).$mount('#app')
