<template>
  <div class="relative-position">
    <div v-if="error">{{ error }}</div>
    <div v-if="formattedDocuments">
      <q-scroll-area ref="scrollArea" class="absolute-full">
        <q-chat-message
          v-for="doc in formattedDocuments"
          :key="doc.id"
          :name="doc.name"
          :text="doc.messages"
          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
          :stamp="doc.createdAt"
          :sent="false"
          text-color="white"
          bg-color="primary"
        >
          <template #avatar>
            <span class="q-mr-sm text-h5">
              {{ doc.emoji }}
            </span>
          </template>
        </q-chat-message>
      </q-scroll-area>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, watch } from 'vue'
import { ref, computed, defineComponent, onUpdated } from 'vue'
import getCollection from '@/composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import nameEmojis from '../assets/nameEmojis'

export default defineComponent({
  name: 'ChatWindow',
  setup() {
    const { error, documents } = getCollection('messages')

    const formattedDocuments = computed(() => documents.value
      ? documents.value.map(doc => ({
        ...doc,
        messages: [ doc.message ],
        createdAt: formatDistanceToNow(doc.createdAt.toDate()),
        emoji: nameEmojis[doc?.name?.[0]?.toUpperCase?.()] || nameEmojis['.']
      })).reduce((prev, curr, i) => {
        if (i === 0) return [ curr ]
        const prevMessage = prev[prev.length - 1]
        if (prevMessage.name === curr.name) {
          prevMessage.messages = [...prevMessage.messages, curr.message]
          return prev
        }
        return [...prev, curr]
      }, [])
      : null)

    // Auto-scroll to bottom of messages
    const scrollArea: Ref<any> = ref(null)

    const scrollToBottom = () => {
      if (scrollArea.value) {
        scrollArea.value.setScrollPercentage('vertical', 1, 300)
      }
    }

    watch(() => formattedDocuments.value?.length, () => {
      scrollToBottom()
    })
    onUpdated(() => {
      scrollToBottom()
    })

    setTimeout(scrollToBottom, 200)

    return { error, documents, formattedDocuments, scrollArea, scrollToBottom }
  },
})
</script>

<style scoped>
  /* .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .scrollArea {
    max-height: 400px;
    overflow: auto;
  } */
</style>
