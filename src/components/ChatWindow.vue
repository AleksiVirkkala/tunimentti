<template>
  <div class="relative-position">
    <div v-if="error">{{ error }}</div>
    <div v-if="formattedDocuments">
      <q-scroll-area ref="scrollArea" class="absolute-full">
        <div
          v-for="doc in formattedDocuments"
          :key="doc.id"
          class="row no-wrap items-center"
        >
          <div :class="(doc.name === userName) ? 'col-grow' : ''">
            <q-chat-message
              :name="doc.name"
              :text="doc.messages"
              avatar="https://cdn.quasar.dev/img/avatar3.jpg"
              :stamp="doc.createdAt"
              :sent="doc.name === userName"
              text-color="white"
              :bg-color="doc.name === userName ? 'blue' : doc.name === 'Korkeakoulutettujenyhteisö' ? 'orange' : 'primary'"
            >
              <template #avatar>
                <span class="q-mx-sm text-h5">
                  {{ doc.emoji }}
                </span>
              </template>
            </q-chat-message>
          </div>
          <div class="column items-center justify-center q-ml-sm">
            <q-btn
              flat
              dense
              round
              :color="disableVoteButtons(doc) ? 'grey-4' : 'grey-10'"
              :disable="disableVoteButtons(doc)"
              icon="expand_less"
              @click="onVoteClick(doc, 'up')"
            />
            <span>{{ getVoteRank(doc) }}</span>
            <q-btn
              flat
              dense
              round
              :color="disableVoteButtons(doc) ? 'grey-4' : 'grey-10'"
              :disable="disableVoteButtons(doc)"
              icon="expand_more"
              @click="onVoteClick(doc, 'down')"
            />
          </div>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, watch } from 'vue'
import { ref, computed, defineComponent, onUpdated } from 'vue'
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'
import useCollection from '@/composables/useCollection'
import { formatDistanceToNow } from 'date-fns'
import nameEmojis from '../assets/nameEmojis'

export default defineComponent({
  name: 'ChatWindow',
  setup() {
    const { error, documents } = getCollection('messages')
    const { getDocUpdateRef } = useCollection('messages')
    const { user } = getUser()
    const userName = computed(() => user.value?.displayName)

    const formattedDocuments = computed(() => documents.value
      ? documents.value.map(doc => ({
        ...doc,
        messages: [ doc.message ],
        createdAt: formatDistanceToNow(doc.createdAt.toDate()),
        emoji: nameEmojis[doc?.name?.[0]?.toUpperCase?.()] || nameEmojis['.'],
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
      setTimeout(() => {
        if (scrollArea.value) {
          scrollArea.value.setScrollPercentage('vertical', 1, 300)
        }
      }, 700)
    }

    watch(() => formattedDocuments.value?.length, () => {
      scrollToBottom()
    })
    onUpdated(() => {
      scrollToBottom()
    })

    setTimeout(scrollToBottom, 200)

    const onVoteClick = async (message: any, type: 'up'|'down') => {
      const docRef = await getDocUpdateRef(message.id)

      if (docRef) {
        docRef.update({
          votes: { ...message?.votes, [user.value?.uid as any]: type }
        })
      }
    }

    const disableVoteButtons = (message: any) => {
      if (!user.value) {
        return true
      }
      const userHasVotedThisMessage = Object.keys(message?.votes || {}).includes(user.value.uid)
      if (userHasVotedThisMessage) {
        return true
      }
      // ...
      return false
    }

    const getVoteRank = (message: any) => {
      const votes = message?.votes
      if (!votes) return 0
      return Object.entries(votes || {}).reduce?.((prev, [id, type]) => {
        if (type === 'up') return prev + 1
        if (type === 'down') return prev - 1
        return prev
      }, 0)
    }

    return {
      error,
      documents,
      formattedDocuments,
      scrollArea,
      scrollToBottom,
      userName,
      onVoteClick,
      disableVoteButtons,
      getVoteRank
    }
  },
})
</script>
