import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import ShowUser from '../views/ShowUser.vue'
// import SignUpPage from '../components/pages/SignUpPage.vue'
// import LoginPage from '../components/pages/LoginPage.vue'
import InboxPage from '../components/pages/InboxPage.vue'
import ChatPage from '../components/pages/ChatPage.vue'
import LandingPage from '../components/pages/LandingPage.vue'
import ProfilePage from '../components/pages/ProfilePage.vue'
import GamesList from '../components/pages/GamesList.vue'
import MapPage from '../components/pages/MapPage.vue'
import UserDetailsPage from '../components/pages/UserDetailsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/games',
    name: 'games',
    component: GamesList
  },
  {
    path: '/',
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
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
