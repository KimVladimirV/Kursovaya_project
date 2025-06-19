import { defineStore } from 'pinia'

export const useRestaurantStore = defineStore('restaurant', {
  state: () => ({
    dishes: [
      {
        id: 1,
        title: "Утиная грудка",
        description: "С апельсиновым конфитюром и картофельным пюре",
        price: "2 400 ₽",
        image: "dish1.jpg",
        tag: "Хит",
        tagColor: "red",
        ingredients: [
          "Утиная грудка фермерская - 250г",
          "Апельсиновый конфитюр",
          "Картофельное пюре с трюфельным маслом",
          "Молодые овощи",
          "Соус из красного вина",
          "Специи и зелень"
        ]
      },
      {
        id: 2,
        title: "Тартар из говядины",
        description: "С трюфельным маслом, каперсами и яичным желтком",
        price: "1 800 ₽",
        image: "dish2.jpg",
        tag: "Новинка",
        tagColor: "green",
        ingredients: [
          "Говяжья вырезка премиум - 180г",
          "Перепелиный желток",
          "Каперсы",
          "Красный лук",
          "Петрушка и кинза",
          "Трюфельное масло",
          "Вустерширский соус"
        ]
      },
      {
        id: 3,
        title: "Равиоли с лобстером",
        description: "С соусом из шампанского и икрой",
        price: "3 200 ₽",
        image: "dish3.jpg",
        tag: "Шеф",
        tagColor: "blue",
        ingredients: [
          "Тесто для равиоли домашнего приготовления",
          "Мясо лобстера - 120г",
          "Сливочно-шампанский соус",
          "Черная икра - 10г",
          "Укроп и лимонная цедра",
          "Трюфельная стружка"
        ]
      },
      {
        id: 4,
        title: "Шоколадный вулкан",
        description: "С жидкой начинкой и ванильным мороженым",
        price: "1 500 ₽",
        image: "dish4.jpg",
        tag: "Десерт",
        tagColor: "purple",
        ingredients: [
          "Черный шоколад 70% - 100г",
          "Сливочное масло",
          "Яйца куриные",
          "Сахарная пудра",
          "Мука пшеничная",
          "Ванильное мороженое",
          "Ягодный соус",
          "Листики мяты"
        ]
      },
      {
        id: 5,
        title: "Стейк Рибай",
        description: "350г, с овощами гриль и соусом демиглас",
        price: "4 500 ₽",
        image: "dish5.jpg",
        tag: "Хит",
        tagColor: "red",
        ingredients: [
          "Мраморная говядина Рибай - 350г",
          "Морская соль и свежемолотый перец",
          "Овощи гриль (цукини, баклажан, перец)",
          "Соус демиглас",
          "Травяное масло",
          "Картофель гратен"
        ]
      }
    ],
    selectedDish: null,
    isModalOpen: false
  }),
  actions: {
    openModal(dish) {
      this.selectedDish = dish
      this.isModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.selectedDish = null
      this.isModalOpen = false
      document.body.style.overflow = 'auto'
    }
  },
  getters: {
    featuredDishes: (state) => state.dishes,
    currentDish: (state) => state.selectedDish,
    modalStatus: (state) => state.isModalOpen
  }
})