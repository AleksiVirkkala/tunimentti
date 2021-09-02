import { projectFirestore } from '@/firebase/config'
import { Ref, ref, watchEffect } from 'vue'

const getCollection = (collection: string) => {
  const documents: Ref<any[]|null> = ref(null)
  const error: Ref<string|null> = ref(null)

  const collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

  const unsub = collectionRef.onSnapshot(snap => {
    documents.value = snap.docs
      .map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      .filter((doc: any) => doc.createdAt)
    error.value = null
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch data'
  })

  watchEffect(onInvalidate => {
    // unsub from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsub())
  })

  return { error, documents }
}

export default getCollection
