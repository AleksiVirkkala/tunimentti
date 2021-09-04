<template>
  <form>
    <q-input
      v-model="message"
      type="textarea"
      input-style="height: 70px;"
      filled
      :disable="!isLoggedIn"
      :placeholder="isLoggedIn ? 'Kirjoita tarjouksesi ja paina enteriä... ja pysytääs asiallisina jookos:)' : 'Kirjaudu sisään jättääksesi tarjouksia'"
      @keypress.enter.prevent="handleSubmit"
    >
      <template #after>
        <q-btn :disable="!isLoggedIn" round dense flat icon="send" @click="handleSubmit" />
      </template>
    </q-input>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script lang="ts">
import getUser from '@/composables/getUser'
import useCollection from '@/composables/useCollection'
import { timestamp } from '@/firebase/config'
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NewChatForm',
  setup() {
    const message = ref('')
    const { user } = getUser()
    const isLoggedIn = computed(() => !!user.value)
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
