import { projectFirestore } from '@/firebase/config'
import { Ref, ref } from 'vue'

const useCollection = (collection: string) => {
  const error: Ref<string|null> = ref(null)

  interface Chat {
    name: string,
    message: string,
    createdAt: any,
    votes?: Record<string, 'up'|'down'>
  }

  const addDoc = async (doc: Chat) => {
    error.value = null

    try {
      await projectFirestore.collection(collection).add(doc)
    }
    catch (err) {
      console.log(err.message)
      error.value = 'could not send the message'
    }
  }

  const getDocUpdateRef = async (docID: string) => {
    error.value = null

    try {
      return await projectFirestore.collection(collection).doc(docID)
    }
    catch (err) {
      console.log(err.message)
      error.value = 'could not send the message'
    }
  }

  return { error, addDoc, getDocUpdateRef }
}

export default useCollection
