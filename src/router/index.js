import Vue from 'vue'
import VueRouter from 'vue-router'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
