<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="email" type="email" required placeholder="email">
    <input v-model="password" type="password" required placeholder="password">
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useLogin from '@/composables/useLogin'

export default defineComponent({
  name: 'LoginForm',
  setup(props, context) {
    // refs
    const email = ref('')
    const password = ref('')

    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        context.emit('login')
      }
    }

    return { email, password, handleSubmit, error }
  },
})
</script>

<style></style>
