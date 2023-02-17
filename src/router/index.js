import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/PageHome.vue'
import BoardList from '@/views/board/BoardList.vue'

const routes = [
  {
    path: '/',
    name: 'PageHome',  // 별 상관X
    component: PageHome
  },
  {
    path: '/mypage',
    name: 'Mypage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageMy.vue')
  },
  {
    path: '/board/list',
    name: 'BoardList',
    component: BoardList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router