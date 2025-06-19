<template>
  <div class="menu-item p-6">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-2xl font-serif font-bold mb-2 text-gray-900">{{ item.name }}</h3>
        <p class="text-gray-600">{{ item.description }}</p>
      </div>
      <span 
        class="text-2xl font-bold"
        :class="{ 'special-price': item.isSpecial, 'text-red-600': true }"
      >
        {{ formattedPrice }}
      </span>
    </div>
  </div>
</template>

<script>
import { defineProps, computed } from 'vue'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const formattedPrice = computed(() => {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0
      }).format(props.item.price).replace('₽', '₽')
    })
    
    return { formattedPrice }
  }
}
</script>

<style scoped>
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

@keyframes pricePulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.special-price {
  animation: pricePulse 2s infinite;
}
</style>