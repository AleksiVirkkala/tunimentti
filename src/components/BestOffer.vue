<template>
  <div class="row">
    <div class="fire">
      🔥
    </div>
    <div class="chat-window">
      <div>
        Johtava tarjous:
      </div>
      <div class="price-title">
        <strong>{{ bestOffer }}</strong>
      </div>
    </div>
    <div class="fire">
      🔥
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import getCollection from '@/composables/getCollection'

export default defineComponent({
  name: 'BestOffer',
  setup() {
    const { error, documents } = getCollection('bestoffers')
    const bestOffer = computed(() => documents.value?.[0]?.value)

    return { bestOffer, error }
  }
})
</script>

<style scoped>
  .row {
    display: flex;
    margin: 20px;
    justify-content: center;
    align-items: center;
  }
  .fire {
    font-size: 40px;
  }
  .chat-window {
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .price-title {
    font-size: 30px;
    text-align: center;
  }
</style>
