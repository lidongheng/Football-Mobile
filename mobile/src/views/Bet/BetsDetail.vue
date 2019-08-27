<template>
  <div class="bets-detail">
    <div class="search">
      <span class="iconfont">&#xe604;</span>
      <input class="search-bar" type="text" name="search" value="" placeholder="搜索球队名">
    </div>
    <div class="bets-order-box">
      <div class="bets-order-header">
        <div class="order">
          <span class="username">单号：20190813102103</span>
          <span class="league">英超</span>
        </div>
        <div>
          <span>曼联vs切尔西</span>
        </div>
        <div>
          <span>曼联 -0.25 @ 0.89</span>
        </div>
      </div>
      <div class="bets-order-description">
        <p class="content">我不会妥协，也不会逃避，弱肉强食的时代迈步前进，猛犸我不会妥协，也不会逃避，弱肉强食的时代迈步前进，猛犸</p>
        <p class="time">08-08 16:36</p>
      </div>
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
export default class BetsDetail extends Vue {
  @Action('setTitle') setTitle: any
  created () {
    this.setTitle('投注单详情')
  }
}
</script>

<style lang="scss" scoped>
  .bets-detail {
    background: rgba(0,0,0,.04);
    padding: .266666rem 0;
    font-size: .4666666rem;
    box-sizing: content-box;
  }
  .search {
    position: relative;
    padding: .2rem .3rem;
  }
  .search .iconfont {
    position: absolute;
    top: .4666666rem;
    left: .5133333rem;
  }
  .search .search-bar {
    width: 6.6666666rem;
    height: .8266666rem;
    border: 1px solid #cdcdcd;
    border-radius: .66666666rem;
    padding-left: .7466666rem;
    outline: none;
  }
  .bets-order-box {
    display: flex;
    flex-direction: column;
    margin-bottom: .266666rem;
    background: #fff;
  }
  .bets-order-header {
    height: 1.7rem;
    padding: 0 .4rem;
  }
  .bets-order-header .order {
    display: flex;
    justify-content: space-between;
  }
  .bets-order-header div{
    padding: .053333rem 0;
  }
  .bets-order-header span{
    padding: .1333333rem;
  }
  .bets-order-description {
    padding: 0 .4rem;
  }
  .bets-order-description p:nth-child(1) {
    padding: .1333333rem;
  }
  .content,.time {
    font-size: .4666666rem;
    color: #333;
    margin-top: .4rem;
  }
  .content {
    padding-bottom: .4rem;
  }
  .time {
    text-align: right;
  }
</style>
