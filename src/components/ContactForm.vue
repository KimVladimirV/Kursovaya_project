<template>
  <div class="contact-card bg-white p-8 rounded-2xl">
    <h2 class="text-2xl font-serif font-bold mb-6">Обратная связь</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="contact-name" class="block mb-2 font-medium">Ваше имя</label>
        <input 
          v-model="form.name"
          type="text" 
          id="contact-name" 
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
          required
        >
      </div>
      <div>
        <label for="contact-email" class="block mb-2 font-medium">Email</label>
        <input 
          v-model="form.email"
          type="email" 
          id="contact-email" 
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
          required
        >
      </div>
      <div>
        <label for="contact-message" class="block mb-2 font-medium">Сообщение</label>
        <textarea 
          v-model="form.message"
          id="contact-message" 
          rows="4" 
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
          required
        ></textarea>
      </div>
      <button 
        type="submit" 
        class="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-bold transition-colors"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script setup>
import { useContactStore } from '@/stores/contact'
import { storeToRefs } from 'pinia'

const contactStore = useContactStore()
const { form } = storeToRefs(contactStore)
const { submitForm } = contactStore
</script>