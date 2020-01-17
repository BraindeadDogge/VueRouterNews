import Vue from 'vue'
import VueRouter from 'vue-router'
import Ru from '../views/Ru.vue'
import Ua from '../views/Ua.vue'
import Us from '../views/Us.vue'
import No from '../views/No.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ru',
    component: Ru
  },
  {
    path: '/us',
    name: 'us',
    component: Us
  },
  {
    path: '/ua',
    name: 'ua',
    component: Ua
  },
  {
    path: '/no',
    name: 'no',
    component: No
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
