<template>
  <div class="col">
    <div class="image">
      <img class="tunimentti" src="/img/tunimentti.jpg">
    </div>
    <div class="description">
      {{ productDescription }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import productDescription from '../productDescription'

export default defineComponent({
  name: 'TunimenttiInfo',
  setup() {
    return { productDescription }
  }
})
</script>

<style scoped>
  .col {
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
  }
  .description {
    white-space: pre-line;
    padding-top: 20px;
  }
  .image {
    display: flex;
    justify-content: center;
  }
  .tunimentti {
    object-fit: cover;
    height: 350px;
    width: 100%;
    max-width: 500px;
  }
</style>
