<template>
  <div class="bets-detail">
    <div class="search">
      <span class="iconfont">&#xe604;</span>
      <input class="search-bar" type="text" name="search" value="" placeholder="搜索球队名" @blur="searchTeam" v-model="team">
    </div>
    <div class="bets-order-box" v-for="(item,index) in betOrders" :key="index">
      <div class="bets-order-header">
        <div class="order">
          <span class="username">单号：{{item.serialNumber}}</span>
          <span class="league">{{item.league}}</span>
        </div>
        <div>
          <span>{{item.host}}vs{{item.away}}</span>
        </div>
        <div>
          <span>{{item.betTeam}} {{item.handicap}} @ {{item.profit}}</span>
        </div>
      </div>
      <div class="bets-order-description">
        <p class="content">{{item.summary}}</p>
        <p class="time">{{item.date}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
import { commentDate } from '@/utils/utils'
@Component({
  components: {

  }
})
export default class BetsDetail extends Vue {
  @Action('setTitle') setTitle: any
  @Provide() betOrders: Array<object> = []
  @Provide() team: string = ''
  created () {
    this.setTitle('投注单详情');
    (this as any).$axios.get('/api/bets/1/')
      .then((res:any) => {
        this.betOrders = res.data.bets
        this.betOrders.forEach((item:any) => {
          item.date = commentDate(item.date)
        })
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
  searchTeam () {
    (this as any).$axios.get(`/api/bets/?q=${this.team}&pageNow=1`)
      .then((res:any) => {
        this.betOrders = res.data.bets
        this.$router.push({ path: `/bet/detail?q=${this.team}&pageNow=1` })
      })
      .catch((err:any) => {
        console.log(err)
      })
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
