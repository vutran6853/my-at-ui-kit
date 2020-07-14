import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import ChatRoom from '../components/ChatRoom.vue'
import FinalScreen from '../components/FinalScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: ChatRoom
  },
  {
    path: '/finalScreen',
    name: 'FinalScreen',
    component: FinalScreen
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
