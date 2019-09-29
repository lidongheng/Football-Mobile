<template>
  <div id="app">
    <app-header id="header"></app-header>
    <router-view id="content"></router-view>
    <app-footer id="footer"></app-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'
@Component({
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
  #app {
    width: 100vw;
    display: block;
  }
  #header {
    height: 8vh;
  }
  #content {
    height: 100%;
  }
  .theme {
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .theme h1 {
    font-size: .64rem;
    font-weight: 600;
  }
  .form-control {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
