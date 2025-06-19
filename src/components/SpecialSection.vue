<template>
  <section id="specials" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-red-500 font-medium uppercase tracking-wider">Сезонные предложения</span>
        <h2 class="text-4xl font-serif font-bold mt-2">Наши <span class="text-red-600">кулинарные</span> шедевры</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <DishCard 
          v-for="dish in featuredDishes" 
          :key="dish.id"
          :dish="dish"
          @open-modal="openDishModal"
        />
      </div>

      <DishModal 
        v-if="modalStatus" 
        :dish="currentDish" 
        @close-modal="closeModal" 
      />
    </div>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'pinia'
import { useRestaurantStore } from '@/stores/restaurantStore'
import DishCard from './DishCard.vue'
import DishModal from './DishModal.vue'

export default {
  name: 'SpecialsSection',
  components: {
    DishCard,
    DishModal
  },
  computed: {
    ...mapState(useRestaurantStore, ['selectedDish']),
    ...mapGetters(useRestaurantStore, ['featuredDishes', 'currentDish', 'modalStatus'])
  },
  methods: {
    ...mapActions(useRestaurantStore, ['openModal', 'closeModal']),
    openDishModal(dish) {
      this.openModal(dish)
    }
  }
}
</script>