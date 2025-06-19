import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    activeCategory: 'all',
    categories: [
      { id: 'all', name: 'Все меню' },
      { id: 'starters', name: 'Закуски' },
      { id: 'mains', name: 'Основные блюда' },
      { id: 'desserts', name: 'Десерты' },
      { id: 'drinks', name: 'Напитки' }
    ],
    menuItems: [
      {
        id: 1,
        name: 'Тартар из говядины',
        description: 'С каперсами, луком шалот и перепелиным яйцом',
        price: 1200,
        category: 'starters'
      },
      {
        id: 2,
        name: 'Брускетта с томатами',
        description: 'На хрустящем хлебе с базиликом и оливковым маслом',
        price: 850,
        category: 'starters'
      },
      {
        id: 3,
        name: 'Тыквенный суп-пюре',
        description: 'С кокосовым молоком и гренками',
        price: 950,
        category: 'starters'
      },
      {
        id: 4,
        name: 'Утиная грудка',
        description: 'С апельсиновым конфитюром и картофельным пюре',
        price: 2400,
        category: 'mains',
        isSpecial: true
      },
      {
        id: 5,
        name: 'Рибей на кости',
        description: 'С овощами гриль и соусом демиглас',
        price: 3200,
        category: 'mains'
      },
      {
        id: 6,
        name: 'Лосось в кунжуте',
        description: 'С пюре из цветной капусты и лимонным соусом',
        price: 2100,
        category: 'mains'
      }
    ]
  }),
  actions: {
    setActiveCategory(category) {
      this.activeCategory = category
    }
  },
  getters: {
    filteredItems: (state) => {
      if (state.activeCategory === 'all') return state.menuItems
      return state.menuItems.filter(item => item.category === state.activeCategory)
    },
    groupedItems: (state) => {
      const groups = {}
      state.menuItems.forEach(item => {
        if (!groups[item.category]) {
          groups[item.category] = []
        }
        groups[item.category].push(item)
      })
      return groups
    }
  }
})