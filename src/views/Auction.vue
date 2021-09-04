<template>
  <q-page padding class="column q-gutter-md">
    <!-- <q-card>
      <TunimenttiInfo />
    </q-card>
    <q-card>
      <BestOffer />
    </q-card> -->
    <BestOffer />
    <q-separator />
    <Navbar />
    <ChatWindow class="col-grow" />
    <NewChatForm />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
// import TunimenttiInfo from '@/components/TunimenttiInfo.vue'
import BestOffer from '@/components/BestOffer.vue'
import Navbar from '@/components/Navbar.vue'
import NewChatForm from '@/components/NewChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import getUser from '@/composables/getUser'

export default defineComponent({
  name: 'Auction',
  components: { /* TunimenttiInfo, BestOffer, */ BestOffer, Navbar, NewChatForm, ChatWindow },

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
