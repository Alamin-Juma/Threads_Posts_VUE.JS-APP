import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'

// 5. Create and mount the root instance.
const forumApp = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
forumApp.use(router)

forumApp.mount('#app')
