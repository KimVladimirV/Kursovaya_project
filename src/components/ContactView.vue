<template>
  <main class="pt-24 pb-16">
    <!-- Герой -->
    <section class="py-20 bg-cover bg-center text-white" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('img/contact-hero.jpg');">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-serif font-bold mb-6">Наши <span class="text-red-400">контакты</span></h1>
        <p class="text-xl max-w-3xl mx-auto">Мы всегда рады вашему визиту и обратной связи</p>
      </div>
    </section>

    <!-- Контакты и карта -->
    <section class="py-20 container mx-auto px-6">
      <div class="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Информация -->
        <div class="space-y-8">
          <div class="contact-card bg-white p-8 rounded-2xl">
            <h2 class="text-2xl font-serif font-bold mb-6">Контактная информация</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="contact-icon text-red-500 text-2xl mr-4 mt-1">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3 class="font-bold">Адрес</h3>
                  <p>{{ contactInfo.address }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="contact-icon text-red-500 text-2xl mr-4 mt-1">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3 class="font-bold">Телефон</h3>
                  <p>{{ contactInfo.phone }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="contact-icon text-red-500 text-2xl mr-4 mt-1">
                  <i class="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 class="font-bold">Email</h3>
                  <p>{{ contactInfo.email }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="contact-icon text-red-500 text-2xl mr-4 mt-1">
                  <i class="fas fa-clock"></i>
                </div>
                <div>
                  <h3 class="font-bold">Часы работы</h3>
                  <p>{{ contactInfo.workingHours.weekdays }}<br>{{ contactInfo.workingHours.weekends }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Соцсети -->
          <div class="contact-card bg-white p-8 rounded-2xl">
            <h2 class="text-2xl font-serif font-bold mb-6">Мы в соцсетях</h2>
            <div class="flex space-x-6">
              <a 
                v-for="(social, index) in socialLinks" 
                :key="index"
                :href="social.url" 
                class="social-icon w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl text-gray-700 hover:text-white transition-colors"
                :class="social.color"
              >
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Карта и форма -->
        <div class="space-y-8">
          <div class="contact-map rounded-2xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?..." 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
            ></iframe>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useContactStore } from '@/stores/contact'
import { storeToRefs } from 'pinia'
import ContactForm from '@/components/ContactForm.vue'

const contactStore = useContactStore()
const { contactInfo, socialLinks } = storeToRefs(contactStore)
</script>

<style scoped>
.contact-map {
  height: 400px;
  filter: grayscale(30%) contrast(110%) brightness(90%);
  transition: all 0.5s ease;
}

.contact-map:hover {
  filter: grayscale(0%) contrast(100%) brightness(100%);
}

.contact-card {
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

/* Анимация для иконок */
@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

.contact-icon:hover {
  animation: shake 0.5s ease;
}

/* Медиа-запросы */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-map {
    height: 300px;
  }
}
</style>