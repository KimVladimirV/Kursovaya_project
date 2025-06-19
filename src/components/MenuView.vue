<template>
  <div>
    
    <section class="bg-cover bg-center py-32" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/img/menu-hero.jpg');">
      <div class="container mx-auto px-6 text-center text-white">
        <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6">Наше <span class="text-red-400">меню</span></h1>
        <p class="text-xl md:text-2xl max-w-3xl mx-auto">Сезонные блюда от шеф-повара</p>
        <router-link to="/booking" class="mt-8 inline-block">
          <img src="/img/reserve-icon.png" alt="Забронировать" class="h-14 hover:scale-110 transition-transform">
        </router-link>
      </div>
    </section>

    <!-- Меню -->
    <section class="py-20 container mx-auto px-6">
      <MenuTabs />
      
      <!-- Отображаем либо все категории, либо только выбранную -->
      <div v-if="activeCategory === 'all'" class="menu-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MenuCategory 
          v-for="(items, category) in groupedItems" 
          :key="category"
          :category="categories.find(c => c.id === category)"
          :items="items"
        />
      </div>
      
      <div v-else class="menu-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MenuCategory 
          :category="categories.find(c => c.id === activeCategory)"
          :items="filteredItems"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useMenuStore } from '@/stores/menu'
import MenuTabs from '@/components/MenuTabs.vue'
import MenuCategory from '@/components/MenuCategory.vue'

export default {
  name: 'MenuView',
  components: { MenuTabs, MenuCategory },
  setup() {
    const menuStore = useMenuStore()
    
    return {
      activeCategory: computed(() => menuStore.activeCategory),
      groupedItems: computed(() => menuStore.groupedItems),
      filteredItems: computed(() => menuStore.filteredItems),
      categories: computed(() => menuStore.categories)
    }
  }
}
</script>

<style scoped>
.menu-grid {
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  .menu-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>