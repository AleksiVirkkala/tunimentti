<template>
  <q-page padding>
    <q-scroll-area class="absolute-full">
      <BestOffer />
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import BestOffer from '@/components/BestOffer.vue'
import getUser from '@/composables/getUser'

export default defineComponent({
  name: 'Leaderboards',
  components: { BestOffer },

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
