<template>
  <div class="font-sans bg-gray-50 text-gray-800 min-h-screen">
    <Header />
    <main class="pt-24 pb-16"> 
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
/* Глобальные стили */
body {
  background-color: #f8f5f2; /* Теплый кремовый фон как в оригинале */
  margin: 0;
  padding: 0;
}

/* Анимации переходов */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Стили для меню */
.menu-item {
  transition: all 0.3s ease;
  border-bottom: 1px dashed rgba(0,0,0,0.1);
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.menu-item:hover {
  background-color: #fff9f9;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

.menu-tab {
  border: 2px solid #e53e3e;
  color: #e53e3e;
  font-weight: 600;
}

.menu-tab.active {
  background: linear-gradient(135deg, #e53e3e, #dd6b20);
  color: white;
  border-color: transparent;
}

@keyframes pricePulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.special-price {
  animation: pricePulse 2s infinite;
  color: #e53e3e;
}

/* Медиа-запросы */
@media (max-width: 1024px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .menu-tabs {
    flex-direction: column;
    gap: 8px;
  }
  
  .menu-tab {
    width: 100%;
  }
}
</style>