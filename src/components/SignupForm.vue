<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="displayName" type="text" required placeholder="chatti nimi">
    <input v-model="password" type="password" required placeholder="salasana">
    <div class="error">{{ error }}</div>
    <button>Rekisteröidy</button>
    <button class="no-login-button" @click="goToAuction">Jatka anonyyminä</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useSignup from '@/composables/useSignup'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SignupForm',
  setup(props, context) {
    const { error, signup } = useSignup()
    const router = useRouter()

    // refs
    const displayName = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await signup(`${displayName.value}@gmail.com`, password.value, displayName.value)
      if (!error.value) {
        context.emit('signup')
      }
    }

    const goToAuction = () => {
      router.push({ name: 'Auction' })
    }

    return { displayName, password, handleSubmit, error, goToAuction }
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
