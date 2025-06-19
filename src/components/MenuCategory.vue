<template>
  <div class="menu-category lg:col-span-2" :id="category.id">
    <div class="flex items-center mb-8">
      <div class="w-16 h-1 bg-red-600 mr-6"></div>
      <h2 class="text-4xl font-serif font-bold text-gray-900">{{ category.name }}</h2>
    </div>
    
    <div class="space-y-6">
      <MenuItem 
        v-for="item in items" 
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { defineProps } from 'vue'
import MenuItem from './MenuItem.vue'

export default {
  components: { MenuItem },
  props: {
    category: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.menu-category {
  scroll-margin-top: 100px;
}
</style>