import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import './assets/main.css'

// import firebase auth service
import { projectAuth } from '@/firebase/config'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

let app: any

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(Quasar, quasarUserOptions)
      .use(router)
      .mount('#app')
  }
})
