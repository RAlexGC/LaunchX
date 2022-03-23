import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BakerView from '../views/BakerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/baker',
    name: 'baker',
    component: BakerView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
