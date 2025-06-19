<template>
  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity" @click="close">
        <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
              <h3 class="text-2xl leading-6 font-serif font-bold text-gray-900 mb-4">
                {{ dish.title }}
              </h3>
              <div class="mt-2">
                <p class="text-gray-600 mb-4">{{ dish.description }}</p>
                <div class="border-t border-gray-200 pt-4">
                  <h4 class="font-bold text-lg mb-2">Состав:</h4>
                  <ul class="list-disc pl-5 text-gray-700">
                    <li v-for="(ingredient, index) in dish.ingredients" :key="index">
                      {{ ingredient }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button 
            type="button" 
            @click="close"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DishModal',
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close-modal')
    }
  }
}
</script>