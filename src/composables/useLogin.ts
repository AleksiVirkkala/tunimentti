import { projectAuth } from '@/firebase/config'
import { Ref, ref } from 'vue'

const error: Ref<string|null> = ref(null)

const login = async (email: string, password: string) => {
  error.value = null

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    return res
  }
  catch (err) {
    console.log(err.message)
    error.value = 'Incorrect login credentials'
  }
}

const useLogin = () => ({ error, login })

export default useLogin
