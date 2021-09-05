<template>
  <q-page padding>
    <q-scroll-area class="absolute-full">
      <q-separator />
      <h4 class="q-mt-lg q-ml-lg">Top-3 äänestetyintä tarjousta</h4>
      <template v-if="top10">
        <div class="column items-center no-wrap q-ma-md">
          <div class="row no-wrap text-h1 items-end q-mb-sm">
            <img style="margin-left: -70px; margin-right: -70px; margin-bottom: -10px; width: 220px; height: 180px;" class="tunimentti" src="/img/tunimentti.png">
            <div>🏆</div>
          </div>
          <LeaderBoardsItem :offer="top10[0]" />
        </div>
        <div class="column items-center no-wrap q-ma-md">
          <div class="text-h2 q-mb-sm">🥈</div>
          <LeaderBoardsItem :offer="top10[1]" />
        </div>
        <div class="column items-center no-wrap q-ma-md">
          <div class="text-h3 q-mb-sm">🥉</div>
          <LeaderBoardsItem :offer="top10[2]" />
        </div>
      </template>
      <div class="text-subtitle1 q-my-lg q-ml-lg">Top 4 - 10</div>
      <template v-if="top4to10">
        <div v-for="offer in top4to10" :key="offer.id">
          <div class="row items-center no-wrap q-ma-md">
            <LeaderBoardsItem :offer="offer" />
          </div>
        </div>
      </template>
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import { formatDistanceToNow } from 'date-fns'
import nameEmojis from '../assets/nameEmojis'
import LeaderBoardsItem from '@/components/LeaderBoardsItem.vue'
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'

export default defineComponent({
  name: 'Leaderboards',
  components: { LeaderBoardsItem },

  setup() {
    const { error, documents } = getCollection('messages')
    const { user } = getUser()
    const router = useRouter()

    const getVoteRank = (message: any) => {
      const votes = message?.votes
      if (!votes) return 0
      return Object.entries(votes || {}).reduce?.((prev, [id, type]) => {
        if (type === 'up') return prev + 1
        if (type === 'down') return prev - 1
        return prev
      }, 0)
    }

    const offersByPoints = computed(() => documents.value?.map(offer => ({
      ...offer,
      messages: [ offer.message ],
      createdAt: formatDistanceToNow(offer.createdAt.toDate()),
      emoji: nameEmojis[offer?.name?.[0]?.toUpperCase?.()] || nameEmojis['.'],
      points: getVoteRank(offer)
    })).sort((offer1: any, offer2: any) => {
      if (offer1.points < offer2.points) return 1
      if (offer1.points === offer2.points) return 0
      return -1
    }).reduce((prev, curr, i) => {
      if (i === 0) return [ curr ]
      const prevMessage = prev[prev.length - 1]
      if (prevMessage.name === curr.name) {
        prevMessage.messages = [...prevMessage.messages, curr.message]
        return prev
      }
      return [...prev, curr]
    }, []))

    const top10 = computed(() => offersByPoints.value?.slice(0, 10))
    const top4to10 = computed(() => top10.value?.slice(3))


    watch(user, newVal => {
      if (newVal === null) {
        router.push({ name: 'Auction' })
      }
    })

    return { documents, top10, top4to10 }
  },
})
</script>


<style>

</style>
