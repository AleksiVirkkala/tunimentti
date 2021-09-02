<template>
  <nav v-if="user">
    <div>
      <p>Moi {{ user.displayName }}!</p>
      <p class="email">Alla näet tarjoukset livenä</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'

export default defineComponent({
  name: 'Navbar',
  setup() {
    const { error, logout } = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()

      if (!error.value) {
        console.log('User logged out')
      }
    }

    return { handleClick, user }
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
