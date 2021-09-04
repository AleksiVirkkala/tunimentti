<template>
  <q-form
    class="q-gutter-md"
    @submit="handleSubmit"
  >
    <q-input
      v-model="email"
      filled
      label="Chatti nimi *"
      hint="Name and surname"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Please type something' ]"
    />

    <q-input
      v-model="password"
      filled
      type="password"
      label="salasana *"
      lazy-rules
    />
    <div class="error">{{ error }}</div>

    <div>
      <q-btn label="Kirjaudu" type="submit" color="primary" />
    </div>
  </q-form>
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
/* .no-login-button {
  background: none;
  color: #5200a3;
  padding-right: 0;
} */
</style>
