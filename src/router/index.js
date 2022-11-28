import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import SignUpPage from '../components/pages/SignUpPage.vue'
// import LoginPage from '../components/pages/LoginPage.vue'
import ChatPage from '../components/pages/ChatPage.vue'
import LandingPage from '../components/pages/LandingPage.vue'
import ProfilePage from '../components/pages/ProfilePage.vue'
import MapPage from '../components/pages/MapPage.vue'
import UserDetailsPage from '../components/pages/UserDetailsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/games',
    name: 'games',
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
  {
    path: '/user/:id',
    name: 'user',
    component: UserDetailsPage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
