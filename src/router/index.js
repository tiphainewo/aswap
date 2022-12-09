import Vue from 'vue'
import VueRouter from 'vue-router'
import InboxPage from '../components/pages/InboxPage.vue'
import ChatPage from '../components/pages/ChatPage.vue'
import LandingPage from '../components/pages/LandingPage.vue'
import ProfilePage from '../components/pages/ProfilePage.vue'
import GamesList from '../components/pages/GamesList.vue'
import MapPage from '../components/pages/MapPage.vue'
import UserDetailsPage from '../components/pages/UserDetailsPage.vue'
import SignUpPageVue from '@/components/SignUpPage.vue'
import LoginPageVue from '@/components/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/games',
    name: 'games',
    component: GamesList
  },
  {
    path: '/home',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/chat/:id',
    name: 'chat',
    component: ChatPage
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: InboxPage
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
  {
    path: '/user/:id',
    name: 'user',
    component: UserDetailsPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpPageVue
  },
  {
    path: '/',
    name: 'login',
    component: LoginPageVue
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
