<template>
  <div class="menu-tabs flex flex-wrap justify-center gap-4 mb-16">
    <button 
      v-for="category in categories" 
      :key="category.id"
      @click="setActiveCategory(category.id)"
      class="px-6 py-3 rounded-full font-medium transition-colors"
      :class="{
        'menu-tab-active': activeCategory === category.id,
        'menu-tab': activeCategory !== category.id
      }"
    >
      {{ category.name }}
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useMenuStore } from '@/stores/menu'

export default {
  setup() {
    const menuStore = useMenuStore()
    
    const setActiveCategory = (category) => {
      menuStore.setActiveCategory(category)
    }
    
    return {
      categories: computed(() => menuStore.categories),
      activeCategory: computed(() => menuStore.activeCategory),
      setActiveCategory
    }
  }
}
</script>

<style scoped>
.menu-tab {
  border: 2px solid #e53e3e;
  color: #e53e3e;
  font-weight: 600;
}

.menu-tab-active {
  background: linear-gradient(135deg, #e53e3e, #dd6b20);
  color: white;
  border-color: transparent;
  font-weight: 600;
}

@media (max-width: 768px) {
  .menu-tabs {
    flex-direction: column;
    gap: 8px;
  }
  
  .menu-tab, .menu-tab-active {
    width: 100%;
  }
}
</style>