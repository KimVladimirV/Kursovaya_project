<template>
  <div class="booking-page">
    <!-- Заголовок страницы -->
    <h1 class="text-3xl font-bold text-center my-8">Бронирование столика</h1>

    <!-- Форма бронирования -->
    <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Поле имени -->
        <div>
          <label for="name" class="block text-gray-700 mb-2">Ваше имя</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
        </div>

        <!-- Поле телефона -->
        <div>
          <label for="phone" class="block text-gray-700 mb-2">Телефон</label>
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
        </div>

        <!-- Поле даты -->
        <div>
          <label for="date" class="block text-gray-700 mb-2">Дата</label>
          <input
            v-model="form.date"
            type="date"
            id="date"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
        </div>

        <!-- Поле времени -->
        <div>
          <label for="time" class="block text-gray-700 mb-2">Время</label>
          <select
            v-model="form.time"
            id="time"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="" disabled>Выберите время</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
          </select>
        </div>

        <!-- Поле количества гостей -->
        <div>
          <label for="guests" class="block text-gray-700 mb-2">Количество гостей</label>
          <select
            v-model="form.guests"
            id="guests"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="" disabled>Выберите количество</option>
            <option value="1">1 человек</option>
            <option value="2">2 человека</option>
            <option value="3-4">3-4 человека</option>
            <option value="5+">5+ человек</option>
          </select>
        </div>

        <!-- Кнопка отправки -->
       <button
  type="submit"
  @click="handleSubmit"
  :disabled="isLoading"
  class="btn-booking hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed"
>
  <i class="fas fa-paper-plane mr-2"></i>
  {{ isLoading ? 'Отправка...' : 'Отправить заявку' }}
</button>

        <!-- Сообщение об успешной отправке -->
        <div v-if="isSuccess" class="p-4 bg-green-100 text-green-700 rounded-md">
          Ваше бронирование успешно отправлено! Мы свяжемся с вами для подтверждения.
        </div>

        <!-- Сообщение об ошибке -->
        <div v-if="errorMessage" class="p-4 bg-red-100 text-red-700 rounded-md">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingView',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: ''
      },
      isSubmitting: false,
      isSuccess: false,
      errorMessage: ''
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      this.isSuccess = false
      this.errorMessage = ''

      try {
        
        console.log('Отправка данных:', this.form)
        
        // Имитация запроса к серверу
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Успешная отправка
        this.isSuccess = true
        this.form = { name: '', phone: '', date: '', time: '', guests: '' } // Сброс формы
        
      } catch (error) {
        console.error('Ошибка при бронировании:', error)
        this.errorMessage = 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.'
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.booking-page {
  min-height: calc(100vh - 80px);
  padding: 2rem;
  background-color:rgb(206, 212, 218);
}
</style>