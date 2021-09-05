<template>
  <div class="column items-center">
    <div class="text-h6 text-white">
      Aikaa Jäljellä
    </div>
    <FlipDown class="my-timer q-my-md" :end-date="endTime" />
  </div>
</template>

<script>
import { defineComponent, watchEffect, onMounted } from 'vue'
import FlipDown from 'vue-flip-down'

export default defineComponent({
  components: { FlipDown },
  setup() {
    const endTime = new Date('2021', '8', '7', '15')
    console.log(endTime)
    return { endTime }
  }
})
</script>

<style scoped>
.my-timer {
  transform: scale(1.5);
}
</style>
