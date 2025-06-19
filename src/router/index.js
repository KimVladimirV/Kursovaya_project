import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HomeView.vue'
import BookingView from '@/components/BookingView.vue'
import MenuView from '@/components/MenuView.vue'
import AboutView from '@/components/AboutView.vue'
import ContactView from '@/components/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Главная | Ресторан "Étincelle"' }
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuView,
    meta: { title: 'Меню | Ресторан "Étincelle"' }
  },
  {
    path: '/booking',
    name: 'Booking',
    component: BookingView,
    meta: { title: 'Бронирование | Ресторан "Étincelle"' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'О нас | Ресторан "Étincelle"' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Контакты | Ресторан "Étincelle"' }
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})


router.beforeEach((to) => {
  document.title = to.meta?.title || 'Ресторан "Étincelle"'
})

export default router