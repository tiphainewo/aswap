import Vue from 'vue'
import VueRouter from 'vue-router'

import SignUpPage from '../components/pages/SignUpPage.vue'
import LoginPage from '../components/pages/LoginPage.vue'
import ChatPage from '../components/pages/ChatPage.vue'
import HomeView from '../views/HomeView.vue'
import NavBar from '../components/pages/NavBar.vue'
import FooterView from '../components/pages/FooterView.vue'
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
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatPage
  },
  {
    path: '/Navbar',
    name: 'NavBar',
    component: NavBar
  },
  
  {
    path: '/footer',
    name: 'FooterView',
    component: FooterView
  },
  

]

const router = new VueRouter({
  routes
})

export default router
