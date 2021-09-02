<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="email" required placeholder="Chatti nimi">
    <input v-model="password" type="password" required placeholder="salasana">
    <div class="error">{{ error }}</div>
    <button>Kirjaudu</button>
    <button class="no-login-button" @click="goToAuction">Jatka anonyyminä</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useLogin from '@/composables/useLogin'
import { useRouter } from 'vue-router'


export default defineComponent({
  name: 'LoginForm',
  setup(props, context) {
    // refs
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(`${email.value}@gmail.com`, password.value)
      if (!error.value) {
        context.emit('login')
      }
    }

    const goToAuction = () => {
      router.push({ name: 'Auction' })
    }

    return { email, password, handleSubmit, error, goToAuction }
  },
})
</script>

<style scoped>
.no-login-button {
  background: none;
  color: #5200a3;
  padding-right: 0;
}
</style>
