<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import NewChatForm from '@/components/NewChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import getUser from '@/composables/getUser'

export default defineComponent({
  name: 'Chatroom',
  components: { Navbar, NewChatForm, ChatWindow },

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
