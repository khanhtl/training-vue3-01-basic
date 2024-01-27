import SetupView from '@/views/SetupView.vue';
import { lessons } from './../shared';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'


const routes=lessons.map(lesson => {
  return {
    path: lesson.path,
    component: getView(lesson.view)
  } as RouteRecordRaw
})

function getView(path: string) {
  return () => import(`../views/${path}View.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
