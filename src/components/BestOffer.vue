<template>
  <div class="row no-wrap items-center q-mx-md justify-center content-center relative-position">
    <div class="overflow-hidden absolute-full row items-center justify-center">
      <div class="fire">
        🔥
      </div>
    </div>
    <div class="chat-window">
      <div>
        Johtava tarjous:
      </div>
      <div class="price-title">
        <strong>{{ bestOffer }}</strong>
      </div>
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

  .fire {
    font-size: 100px;
    opacity: 0.3;
    left: 50%;
    top: 50%;
  }
  @media (max-width: 600px) {
    .fire {
      font-size: 200px;
    }
  }
  .chat-window {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .price-title {
    font-size: 20px;
    text-align: center;
  }
</style>
