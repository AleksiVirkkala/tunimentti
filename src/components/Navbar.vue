<template>
  <nav v-if="user" class="row justify-between items-center">
    <div>
      <p class="text-subtitle1 no-margin">Moi {{ user.displayName }}!</p>
      <p class="text-caption text-weight-thin no-margin">Alla näet tarjoukset livenä</p>
    </div>
    <q-btn @click="logOut">Kirjaudu ulos</q-btn>
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
