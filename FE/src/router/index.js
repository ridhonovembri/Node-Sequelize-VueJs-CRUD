import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import UserForm from '@/views/UserForm.vue'
import RoleView from '@/views/RoleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    component: UserView
  },
  {
    path: '/user-form/:id?',
    name: 'userForm',
    component: UserForm
  },
  {
    path: '/roles',
    name: 'roles',
    component: RoleView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
