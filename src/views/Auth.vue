<template>
  <q-card bordered>
    <q-card-section>
      <div class="text-h6">{{ showLogin ? 'Kirjaudu sisään' : 'Rekisteröidy' }}</div>
    </q-card-section>


    <q-card-section>
      <div v-if="showLogin">
        <LoginForm @login="enterChat" />
        <p class="q-mt-md">Ei käyttäjää? <span class="linkki" @click="showLogin = false">Rekisteröidy</span></p>
      </div>
      <div v-else>
        <SignupForm @signup="enterChat" />
        <p class="q-mt-md">Jo rekisteröitynyt? <span class="linkki" @click="showLogin = true">Kirjaudu sisään</span></p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Auth',
  components: { SignupForm, LoginForm },

  setup(props, context) {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      context.emit('auth-completed')
      router.push({ name: 'Auction' })
    }

    return { showLogin, enterChat }
  }
})
</script>

<style>
  /* .welcome {
    text-align: center;
    padding: 20px 0;
    overflow: auto;
  } */
  /* form styles */
  /* .welcome form {
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
  } */
  .linkki {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
