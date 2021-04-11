import { createRouter, createWebHistory } from 'vue-router'
import PersInfo from '../views/PersInfo.vue'
import ProInfoForm from '../views/ProInfo.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'PersInfo',
    component: PersInfo
  },
  {
    path: '/proInfo',
    name: 'proInfo',
    component: ProInfoForm
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
