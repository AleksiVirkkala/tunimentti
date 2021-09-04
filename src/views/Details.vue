<template>
  <q-page padding>
    <q-scroll-area class="absolute-full">
      <TunimenttiInfo />
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import TunimenttiInfo from '@/components/TunimenttiInfo.vue'
import getUser from '@/composables/getUser'

export default defineComponent({
  name: 'Auction',
  components: { TunimenttiInfo },

  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, newVal => {
      if (newVal === null) {
        router.push({ name: 'Auction' })
      }
    })
  },
})
</script>


<style>

</style>
