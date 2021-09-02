<template>
  <div class="container">
    <TunimenttiInfo />
  </div>
  <div class="container">
    <BestOffer />
  </div>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import TunimenttiInfo from '@/components/TunimenttiInfo.vue'
import BestOffer from '@/components/BestOffer.vue'
import Navbar from '@/components/Navbar.vue'
import NewChatForm from '@/components/NewChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import getUser from '@/composables/getUser'

export default defineComponent({
  name: 'Auction',
  components: { TunimenttiInfo, BestOffer, Navbar, NewChatForm, ChatWindow },

  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, newVal => {
      if (newVal === null) {
        router.push({ name: 'Welcome' })
      }
    })
  },
})
</script>


<style>

</style>
