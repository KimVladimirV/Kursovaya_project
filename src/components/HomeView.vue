<template>
  <div>
    <HeroSection />
    <SpecialSection />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import SpecialSection from '@/components/SpecialSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    SpecialSection
  }
}
</script>