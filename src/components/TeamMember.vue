<template>
  <div class="team-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <div class="overflow-hidden h-64">
      <img 
        :src="getImageUrl(member.image)" 
        :alt="member.name"
        class="team-img w-full h-full object-cover filter grayscale-50 transition-all duration-500"
      >
    </div>
    <div class="p-6 text-center">
      <h3 class="text-2xl font-serif font-bold">{{ member.name }}</h3>
      <p class="text-red-600 mb-4">{{ member.position }}</p>
      <div class="flex justify-center space-x-4">
        <a 
          v-if="member.social.instagram"
          :href="member.social.instagram" 
          class="text-gray-500 hover:text-red-500 transition-colors"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a 
          v-if="member.social.email"
          :href="member.social.email" 
          class="text-gray-500 hover:text-red-500 transition-colors"
        >
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  member: {
    type: Object,
    required: true
  }
})

const getImageUrl = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href
}
</script>

<style scoped>
.team-card:hover .team-img {
  transform: scale(1.05);
  filter: grayscale(0);
}
</style>