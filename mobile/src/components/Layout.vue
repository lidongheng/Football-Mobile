<template>
  <div class="background" :style="{display: display}">
    <div class="layout">
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  components: {

  }
})
export default class Layout extends Vue {
  @Prop(String) display!: string
  @Prop(String) text!: string
}
</script>

<style lang="scss" scoped>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    justify-content: center;
    align-items: center;
  }
  .layout {
    background: rgba(0,0,0,.8);
    border-radius: 10px;
    animation: opa 2.3s ease;
    -webkit-animation: opa 2.3s ease;
  }
  p {
    color: #fff;
    text-align: center;
    padding: .133333rem;
    margin: .266666rem;
    font-size: .4266666rem;
  }
  @keyframes opa {
    0% {opacity: 0;}
    25% {opacity: 0.8;}
    75% {opacity: 0.8;}
    100% {opacity: 0;}
  }
</style>
