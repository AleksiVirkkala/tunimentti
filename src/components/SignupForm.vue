<template>
  <q-form
    class="q-gutter-md"
    @submit="handleSubmit"
  >
    <q-input
      v-model="displayName"
      filled
      label="Chatti nimi *"
      hint="Name and surname"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Please type something' ]"
    />

    <q-input
      v-model="password"
      filled
      label="salasana *"
      type="password"
      lazy-rules
    />
    <div class="error">{{ error }}</div>

    <div>
      <q-btn label="Rekisteröidy" type="submit" color="primary" />
    </div>
  </q-form>
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
/* .no-login-button {
  background: none;
  color: #5200a3;
  padding-right: 0;
} */
</style>
