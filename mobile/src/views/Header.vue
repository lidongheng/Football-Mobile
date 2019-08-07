<template>
  <div class="header">
    <div class="back-wrapper">
      <span class="iconfont">&#xe66a;</span>
    </div>
    <div class="title-wrapper">标题栏</div>
    <div class="share-wrapper">
      <span class="iconfont">&#xe64e;</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {

  }
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
  @import url(../../public/css/font.css);
  .header {
    height: 1.36rem;
    background: #37A2D8;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .back-wrapper,.share-wrapper {
    height: 100%;
    width: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .share-wrapper .iconfont {
    font-size: .8rem;
    padding-right: .21333333rem;
  }
  .iconfont {
    font-size: .6666666rem;
  }
  .title-wrapper {
    font-size: .5866666rem;
  }
</style>
