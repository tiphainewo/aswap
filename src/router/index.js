import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUpPage from '../components/pages/SignUpPage.vue'
import LoginPage from '../components/pages/LoginPage.vue'
import ChatPage from '../components/pages/ChatPage.vue'
import LandingPage from '../components/pages/LandingPage.vue'


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
    component: LandingPage
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatPage
  },
  

]

const router = new VueRouter({
  routes
})

export default router
