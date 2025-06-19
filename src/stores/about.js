import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAboutStore = defineStore('about', {
  state: () => ({
    features: [
      '100% органические продукты',
      'Авторские рецепты шеф-повара',
      'Эксклюзивные винные пары'
    ],
    team: [
      {
        id: 1,
        name: 'Антон Петров',
        position: 'Шеф-повар',
        image: 'chef.jpg',
        social: {
          instagram: '#',
          email: 'mailto:chef@vkusno.ru'
        }
      },
      {
        id: 2,
        name: 'Георгий Иванов',
        position: 'Су-шеф',
        image: 'chef2.jpg',
        social: {
          instagram: '#',
          email: 'mailto:chef@vkusno.ru'
        }
      },
      
    ]
  }),
  getters: {
    
  },
  actions: {
    
  }
})



