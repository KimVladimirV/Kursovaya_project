import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookingStore = defineStore('booking', () => {// Создаем хранилище
  const bookings = ref([]) // bookings - массив для хранения всех бронирований
  const loading = ref(false)// loading - флаг загрузки
  const error = ref(null)// error - для хранения ошибок

  const createBooking = async (bookingData) => {
    loading.value = true
    error.value = null
    
    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const newBooking = {
        id: Date.now(),// уникальный ID на основе текущего времени
        ...bookingData,
        createdAt: new Date().toISOString(),// дата создания в стрчном  формате
        status: 'pending'// начальный статус бронирования
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
    //ref(реактивные переменные) автоматически обновляют интерфейс при изменении их значений
    error,
    createBooking
  }
})
