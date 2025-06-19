<template>
  <!-- Основная секция формы бронирования -->
  <section class="py-20 container mx-auto px-6">
    <!-- Контейнер формы с тенями и скруглениями -->
    <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="p-8 md:p-12">
        <!-- Заголовок формы -->
        <h2 class="text-3xl font-bold mb-8 text-center">Забронировать столик</h2>
        
        <!-- Форма. @submit.prevent предотвращает перезагрузку страницы -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          
        </form>
      </div>
    </div>
  </section>
</template>

<script>
// Импорт Pinia стора для бронирований
import { useBookingStore } from '@/stores/bookingStore'

export default {
  name: 'BookingForm',
  setup() {
    // Инициализируем стор бронирования
    const bookingStore = useBookingStore()
    
    // Метод отправки формы, который вызывает функцию стора
    const handleSubmit = async (formData) => {
      await bookingStore.createBooking(formData)
    }

    // Возвращаем метод, чтобы он был доступен в шаблоне
    return {
      handleSubmit
    }
  }
}
</script>
