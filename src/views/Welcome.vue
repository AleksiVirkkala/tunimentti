<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Kirjaudu sisään</h2>
      <LoginForm @login="enterChat" />
      <p>Ei käyttäjää? <span @click="showLogin = false">Rekisteröidy</span></p>
    </div>
    <div v-else>
      <h2>Rekisteröidy käyttäjäksi</h2>
      <SignupForm @signup="enterChat" />
      <p>Jo rekisteröitynyt? <span @click="showLogin = true">Kirjaudu sisään</span></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Auth',
  components: { SignupForm, LoginForm },

  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'Auction' })
    }

    return { showLogin, enterChat }
  }
})
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
    overflow: auto;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>
