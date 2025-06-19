<template>
  <footer class="bg-gray-900 text-gray-300 py-16">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-8 md:mb-0">
          <router-link to="/" class="text-2xl font-serif font-bold text-white hover:text-red-400 transition-colors">
            <i class="fas fa-utensils text-red-400 mr-2"></i>Étincelle
          </router-link>
          <p class="mt-4 max-w-md">Премиальный гастрономический опыт в сердце города</p>
        </div>
        
        <div class="text-center md:text-right">
          <p class="mb-2">г. Томск, ул. Гастрономическая, 1</p>
          <p class="mb-4">+7 (495) 123-45-67</p>
          <div class="flex justify-center md:justify-end space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl">
              <i class="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
        <p>&copy; 2025 Ресторан "Étincelle". Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Импорты Font Awesome, если используются
</script>