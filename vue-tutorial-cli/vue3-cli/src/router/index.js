import { createRouter, createWebHashHistory } from 'vue-router'
import DcHeros from '../components/DcHeros'
import Calendar from '../components/Calendar'

const routes = [
  {
    path: '/DcHeros',
    name: 'DcHeros',
    component: DcHeros
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
