import './assets/css/common.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


const app = createApp(App)
app.config.globalProperties.$axios = axios; // axios를 전역변수로 설정
app.config.globalProperties.$serverUrl = '//localhost:8081'  // 백엔드서버는 8081포트
app.use(router).mount('#app') // vue-router 사용