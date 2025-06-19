import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookingStore = defineStore('booking', () => {
  const bookings = ref([])
  const loading = ref(false)
  const error = ref(null)

  const createBooking = async (bookingData) => {
    loading.value = true
    error.value = null
    
    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const newBooking = {
        id: Date.now(),
        ...bookingData,
        createdAt: new Date().toISOString(),
        status: 'pending'
      }
      
      bookings.value.push(newBooking)
      return newBooking
    } catch (err) {
      error.value = err.message || 'Ошибка при бронировании'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    bookings,
    loading,
    error,
    createBooking
  }
})