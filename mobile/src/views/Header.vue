<template>
  <div class="header">
    <div class="back-wrapper" @click="back">
      <span class="iconfont">&#xe66a;</span>
    </div>
    <div class="title-wrapper">{{getTitle}}</div>
    <div class="share-wrapper" @click="noContent">
      <span class="iconfont">&#xe64e;</span>
    </div>
    <Layout :show="isLayoutShow" text="暂未开放，敬请期待~"></Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Mixins } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
import Layout from '../components/Layout.vue'
import Toggle from '../mixins/toggle'
@Component({
  components: {
    Layout
  }
})
export default class Header extends Mixins(Toggle) {
  @Getter('title') getTitle: any;
  back () {
    this.$router.go(-1)
  }
}
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
