import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)   // 👈 injects the router
  .mount('#app') // 👈 mounts the app to index.html