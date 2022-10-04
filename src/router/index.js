import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpPage from '../components/SignUpPage.vue'
import LoginPage from '../components/LoginPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  

]

const router = new VueRouter({
  routes
})

export default router
