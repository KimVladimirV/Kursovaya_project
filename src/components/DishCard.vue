<template>
  <div 
    @click="handleClick"
    class="dish-card bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
  >
    <div class="overflow-hidden h-64">
      <img 
        :src="getImageUrl(dish.image)" 
        :alt="dish.title" 
        class="dish-img w-full h-full object-cover transition-transform duration-500"
      >
    </div>
    <div class="p-6">
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-2xl font-serif font-bold">{{ dish.title }}</h3>
        <span 
          :class="`bg-${dish.tagColor}-100 text-${dish.tagColor}-800`"
          class="px-3 py-1 rounded-full text-sm font-medium"
        >
          {{ dish.tag }}
        </span>
      </div>
      <p class="text-gray-600 mb-4">{{ dish.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-gray-900">{{ dish.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DishCard',
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('open-modal', this.dish)
    },
    getImageUrl(imageName) {
      // Вариант для Vite
      return new URL(`../assets/images/${imageName}`, import.meta.url).href
      
      // Альтернативный вариант (если выше не работает):
      // return `/src/assets/images/${imageName}`
    }
  }
}
</script>

<style scoped>
.dish-card:hover .dish-img {
  transform: scale(1.05);
}
</style>