<template>
  <div class="article">
    <div class="theme">
      <h1>文章</h1>
    </div>
    <div class="content">
      <div class="info">
        <span class="month">05.13</span>
        <span class="year">2019</span>
      </div>
      <div class="title-wrapper">
        <div class="title">
          <a href="">新赛季的输盘王到底是谁？利物浦还是纽卡斯尔联</a>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="info">
        <span class="month">05.13</span>
        <span class="year">2019</span>
      </div>
      <div class="title-wrapper">
        <div class="title">
          <a href="">新赛季的输盘王到底是谁？利物浦还是纽卡斯尔联</a>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="info">
        <span class="month">05.13</span>
        <span class="year">2019</span>
      </div>
      <div class="title-wrapper">
        <div class="title">
          <a href="">新赛季的输盘王到底是谁？利物浦还是纽卡斯尔联</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {

  }
})
export default class Article extends Vue {}
</script>

<style lang="scss" scoped>
  .article .theme {
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .article .theme h1 {
    font-size: .64rem;
    font-weight: 600;
  }
  .article .content {
    display: flex;
    align-items: flex-start;
    padding-left: .1333333rem;
    margin: .5333333rem 0;
  }
  .article .content .info {
    width: 1.28rem;
    height: 1.28rem;
    background: #89c7ff;
    border-radius: .16rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .article .content .info .month {
    font-size: .426666rem;
    padding-bottom: 0.1066666rem;
    color: #fff;
  }
  .article .content .info .year {
    font-size: .373333rem;
    color: #fff;
  }
  .article .content .title-wrapper {
    display: flex;
    flex: 1;
    padding: .1333333rem .133333rem 0 .4rem;
  }
  .article .content .title-wrapper .title {
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: .133333rem;
  }
  .article .content .title-wrapper .title a{
    font-size: .48rem;
    color: #333;
    display: inline-block;
  }
</style>
