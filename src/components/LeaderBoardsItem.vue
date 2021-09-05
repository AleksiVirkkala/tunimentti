<template>
  <q-card class="col-grow" flat bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar color="primary">
          {{ offer.emoji }}
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ offer.name }}</q-item-label>
        <q-item-label caption>
          {{ offer.createdAt }}
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section horizontal>
      <q-card-section>
        {{ offer.points }} p
      </q-card-section>

      <q-separator vertical />

      <q-card-section>
        <div v-for="message, i in offer.messages" :key="i" class="q-my-sm">
          {{ message }}
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    offer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
