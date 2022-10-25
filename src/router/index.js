import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUpPage from '../components/pages/SignUpPage.vue'
import LoginPage from '../components/pages/LoginPage.vue'
import ChatPage from '../components/pages/ChatPage.vue'
import LandingPage from '../components/pages/LandingPage.vue'
import ProfilePage from '../components/pages/ProfilePage.vue'
import MapPage from '../components/pages/MapPage.vue'


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
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/map',
    name: 'map',
    component: MapPage
  },

]

const router = new VueRouter({
  routes
})

export default router