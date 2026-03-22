import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Meetings from './views/Meetings.vue'
import MeetingDetails from './views/MeetingDetails.vue'
import AdminDashboard from './views/AdminDashboard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/index.html', component: Home },
  { path: '/meetings.html', component: Meetings },
  { path: '/meeting-details.html', component: MeetingDetails },
  { path: '/admin', component: AdminDashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

createApp(App)
  .use(router)
  .mount('#app')
