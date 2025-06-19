<template>
  <div>
    <!-- Секция с заголовком и описанием истории ресторана -->
    <section class="bg-gradient-to-r from-red-50 to-orange-50 py-20">
      <div class="container mx-auto px-6 text-center fade-in">
        <h1 class="text-4xl md:text-5xl font-serif font-bold mb-6">
          Наша <span class="text-red-600">история</span>
        </h1>
        <p class="text-xl max-w-3xl mx-auto">
          С 2010 года мы создаем незабываемые гастрономические впечатления
        </p>
      </div>
    </section>

    <!-- Секция "О ресторане" с текстом и изображением -->
    <section class="py-20 container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Левая часть: текст и список преимуществ -->
        <div class="fade-in">
          <h2 class="text-3xl font-serif font-bold mb-6">
            Философия <span class="text-red-600">вкуса</span>
          </h2>
          <p class="text-lg mb-6">
            Мы сочетаем традиционные рецепты с современными техниками приготовления, 
            используя только лучшие сезонные продукты от местных фермеров.
          </p>
          <ul class="space-y-4">
            <!-- Выводим список преимуществ из массива features -->
            <li v-for="feature in features" :key="feature" class="flex items-start">
              <i class="fas fa-check text-red-500 mt-1 mr-3"></i>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Правая часть: изображение интерьера ресторана -->
        <div class="relative rounded-2xl overflow-hidden shadow-xl h-96">
          <img 
            src="@/assets/images/restaurant-interior.jpg" 
            alt="Интерьер" 
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          >
        </div>
      </div>
    </section>

    <!-- Секция с командой ресторана -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-serif font-bold">
            Наша <span class="text-red-600">команда</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Компонент TeamMember повторяется для каждого члена команды -->
          <TeamMember 
            v-for="member in team" 
            :key="member.id"
            :member="member"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Импорт стора и компонента карточки члена команды
import { useAboutStore } from '@/stores/about'
import TeamMember from '@/components/TeamMember.vue'

// Получаем данные из Pinia store
const aboutStore = useAboutStore()
const { features, team } = aboutStore
</script>

<style scoped>
/* Анимация появления элементов */
.fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
