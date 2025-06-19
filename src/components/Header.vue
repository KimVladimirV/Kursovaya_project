<template>
  <header class="fixed w-full z-50 bg-white shadow-sm">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-serif font-bold text-gray-900 hover:text-red-600 transition-colors">
        <i class="fas fa-utensils text-red-500 mr-2"></i>Étincelle
      </router-link>

      <nav class="hidden md:flex space-x-8">
        <router-link 
          v-for="link in links" 
          :key="link.path" 
          :to="link.path"
          class="text-gray-700 hover:text-gray-900 font-bold"
          active-class="text-red-600"
          :exact="link.path === '/'"
        >
          {{ link.title }}
        </router-link>
      </nav>

      <div class="md:hidden">
        <button class="text-gray-500 hover:text-red-500" @click="toggleMobileMenu">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>

    <!-- Мобильное меню -->
    <transition name="slide-down">
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden bg-white shadow-lg"
      >
        <div class="container mx-auto px-6 py-4">
          <router-link 
            v-for="link in links" 
            :key="link.path" 
            :to="link.path"
            class="block py-3 text-gray-700 hover:text-red-600 font-bold"
            active-class="text-red-600"
            :exact="link.path === '/'"
            @click="mobileMenuOpen = false"
          >
            {{ link.title }}
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const links = [
  { title: 'Главная', path: '/' },
  { title: 'О нас', path: '/about' },
  { title: 'Меню', path: '/menu' },
  { title: 'Бронирование', path: '/booking' },
  { title: 'Контакты', path: '/contact' }
]

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  max-height: 300px;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>