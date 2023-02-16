# vue 공부

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### vue-router 설치 (페이지 이동)
```
1. npm i --save vue-router
2. import { createRouter, createWebHistory } from 'vue-router'
3. const routes = []
4. 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
5. import router from './router'
```


