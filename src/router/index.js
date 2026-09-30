import { createRouter, createWebHashHistory } from 'vue-router'
import ChapterView from '../views/ChapterView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/chapter/1/introduction' },
    { path: '/chapter/:id/:slug', component: ChapterView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router