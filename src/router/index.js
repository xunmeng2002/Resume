import { createRouter, createWebHistory } from 'vue-router'
import HomeZh from '../views/HomeZh.vue'
import HomeEn from '../views/HomeEn.vue'

const routes = [
  { path: '/zh', name: 'HomeZh', component: HomeZh },
  { path: '/en', name: 'HomeEn', component: HomeEn },
  { path: '/', redirect: '/zh' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router