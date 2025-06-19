<template>
  <section class="hero-bg h-screen flex items-center justify-center px-4">
    <div class="text-center max-w-4xl">
      <h1 class="hero-title text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
        Искусство <span class="text-red-400">гастрономии</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
        Авторская кухня от шефа с мишленовским опытом в элегантной атмосфере
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-6">
        <router-link to="/booking" class="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-red-600">
          Забронировать стол
        </router-link>

        <router-link to="/menu" class="group relative">
          <div class="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-red-600">
            Посмотреть меню
          </div>
        </router-link>
      </div>

      <a href="#specials" class="mt-16 inline-block floating">
        <img src="@/assets/images/scroll-down.png" alt="Листайте вниз" class="h-10 opacity-80 hover:opacity-100 transition-opacity">
      </a>
    </div>
  </section>
</template>

<script setup>
import heroImage from '@/assets/images/hero-gourmet.jpg'
import scrollIcon from '@/assets/images/scroll-down.png'
</script>

<style scoped>
.hero-bg {
  background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%), 
              url('@/assets/images/hero-gourmet.jpg') center/cover no-repeat;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.floating {
  animation: float 4s ease-in-out infinite;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    line-height: 1.2;
  }
}
</style>