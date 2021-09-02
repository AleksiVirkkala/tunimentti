<template>
  <form>
    <textarea
      v-model="message"
      :disabled="!isLoggedIn"
      :placeholder="isLoggedIn ? 'Kirjoita tarjouksesi ja paina enteriä...' : 'Kirjaudu sisään osallistuaksesi tarjouksiin'"
      @keypress.enter.prevent="handleSubmit"
    />
    <div class="error">{{ error }}</div>
  </form>
</template>

<script lang="ts">
import getUser from '@/composables/getUser'
import useCollection from '@/composables/useCollection'
import { timestamp } from '@/firebase/config'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NewChatForm',
  setup() {
    const message = ref('')
    const { user } = getUser()
    const isLoggedIn = !!user.value
    const { addDoc, error } = useCollection('messages')

    const handleSubmit = async () => {
      const chat = {
        name: user.value?.displayName || '',
        message: message.value,
        createdAt: timestamp()
      }
      await addDoc(chat)
      if (!error.value) {
        message.value = ''
      }
    }


    return { message, handleSubmit, error, user, isLoggedIn }
  },
})
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>
