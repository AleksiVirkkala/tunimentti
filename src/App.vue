<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
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
