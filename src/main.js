import './assets/css/common.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// vue-router 사용
const app = createApp(App)
app.use(router).mount('#app')