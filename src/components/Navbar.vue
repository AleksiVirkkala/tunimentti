<template>
  <nav v-if="user">
    <div>
      <p>Moi {{ user.displayName }}!</p>
      <p class="email">Alla näet tarjoukset livenä</p>
    </div>
    <button @click="logOut">Kirjaudu ulos</button>
  </nav>
  <nav v-else>
    <div>
      <p>Moi anonyymi!</p>
      <p class="email">Alla näet tarjoukset livenä</p>
    </div>
    <button @click="goToLogin">Kirjaudu sisään</button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Navbar',
  setup() {
    const { error, logout } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const logOut = async () => {
      await logout()
      if (!error.value) {
        console.log('User logged out')
      }
    }

    const goToLogin = async () => {
      router.push({ name: 'Auth' })
    }

    return { logOut, goToLogin, user }
  },
})
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>
