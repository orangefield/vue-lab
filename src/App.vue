<template>
  <PageHeader />
  <router-view />
  <button class="btn btn-primary" data-bs-target="#collapseTarget" data-bs-toggle="collapse">
    WELCOME
  </button>
  <div class="collapse py-2" id="collapseTarget">
    누르면 입장합니다
    <br />
    왜 이리 뻑뻑하냐
  </div>
<PageFooter />
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
