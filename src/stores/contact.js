import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
  state: () => ({
    contactInfo: {
      address: 'г. Москва, ул. Гастрономическая, 1',
      phone: '+7 (495) 123-45-67',
      email: 'info@vkusno.ru',
      workingHours: {
        weekdays: 'Пн-Пт: 12:00 - 23:00',
        weekends: 'Сб-Вс: 12:00 - 00:00'
      }
    },
    socialLinks: [
      { icon: 'fab fa-instagram', color: 'hover:bg-red-500', url: '#' },
      { icon: 'fab fa-facebook-f', color: 'hover:bg-blue-600', url: '#' },
      { icon: 'fab fa-telegram-plane', color: 'hover:bg-blue-400', url: '#' }
    ],
    form: {
      name: '',
      email: '',
      message: ''
    }
  }),
  actions: {
    submitForm() {
      
      console.log('Форма отправлена:', this.form)
      
      this.form = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
})