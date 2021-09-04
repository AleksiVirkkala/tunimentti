<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-avatar>
          <img src="data:image/png;base64,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">
        </q-avatar>
        <q-toolbar-title>
          Tunimentin huutokauppa
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        v-model="tab"
        inline-label
        class="bg-primary text-white shadow-2"
      >
        <q-route-tab to="/auction" label="Auction" icon="mail" exact />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from '@vue/reactivity'

export default defineComponent({
  setup() {
    const tab = ref('mails')
    return { tab }
  },
})
</script>
