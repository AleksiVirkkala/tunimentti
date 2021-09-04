<template>
  <nav class="row justify-between items-center">
    <div>
      <p class="text-subtitle1 no-margin">Moi {{ user?.displayName || 'anonyymi' }}!</p>
      <p class="text-caption text-weight-thin no-margin">Alla näet tarjoukset livenä</p>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import getUser from '@/composables/getUser'

export default defineComponent({
  name: 'Navbar',
  setup() {
    const { user } = getUser()

    return { user }
  },
})
</script>
