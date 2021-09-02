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
    align-items: center;
    flex-direction: column;
  }
  .description {
    white-space: pre-line;
    padding-right: 50px;
  }
  .tunimentti {
    height: 350px;
  }
</style>
