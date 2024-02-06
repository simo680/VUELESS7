import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
const router = createRouter({
       history: createWebHistory(import.meta.env.BASE_URL),
       routes: [
              {
                     path: '/',
                     component: HomeView,
                     alias: '/test'
              },
              {
                     path: '/about/:title?',
                     component: AboutView
              },
              {
                     path: '/:pathMatch(.*)*',
                     component: NotFoundView
              }
       ]
})

export default router