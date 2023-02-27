import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/PageHome.vue'
import BoardList from '@/views/board/BoardList.vue'
import BoardDetail from '@/views/board/BoardDetail.vue'
import BoardWriteForm from '@/views/board/BoardWriteForm.vue'
import Emp_vueList from '@/views/emp_vue/Emp_vueList.vue'

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
  // board 관련 시작 ======================
  {
    path: '/board/list',
    name: 'BoardList',
    component: BoardList
  },
  {
    path: '/board/detail',
    name: 'BoardDetail',
    component: BoardDetail
  },
  {
    path: '/board/write',
    name: 'BoardWriteForm',
    component: BoardWriteForm
  },
  // board 관련 끝 ======================
  // emp_vue 관련 시작 ======================
  {
    path: '/emp-vue/list',
    name: 'Emp_vueList',
    component: Emp_vueList
  },
  // emp_vue 관련 끝 ======================
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router