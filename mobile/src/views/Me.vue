<template>
  <div class="me">
    <div class="header-wrapper">
      <img :src="require('@/assets/avatar.gif')" alt=""/>
      <span>{{username}}</span>
    </div>
    <div class="content-wrapper">
      <div class="content-top">
        <span>我的投注单</span>
        <router-link tag="a" to="/bet/detail">更多</router-link>
      </div>
      <table class="content-table">
        <thead>
          <tr>
            <th>订单号</th>
            <th>订单总额</th>
            <th>比赛</th>
            <th>投注球队</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in this.betOrders" :key="index">
            <td>{{item.serialNumber}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.host}}vs{{item.away}}</td>
            <td>{{item.betTeam}}{{item.handicap}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="footer-wrapper">
      <button type="button" class="btn" @click="logOut">退出登录</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {

  }
})
export default class Me extends Vue {
  @Action('clearUser') clearUser: any
  @Action('setTitle') setTitle: any
  @Provide() username: string = localStorage.username
  @Provide() betOrders: object = {}
  created () {
    this.getBetOrdersData()
    this.setTitle('我')
  }
  getBetOrdersData () {
    (this as any).$axios.get(`/api/bets/?q=&pageNow=1&pageSize=5`)
      .then((res: any) => {
        this.betOrders = res.data.bets
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
  logOut () {
    localStorage.removeItem('Token')
    localStorage.removeItem('username')
    this.clearUser()
    this.$router.push({ name: 'login' })
  }
}
</script>

<style lang="scss" scoped>
  .me {
    background: rgba(0,0,0,.04);
  }
  .header-wrapper {
    height: 4.8rem;
    width: 100%;
    background: #EBEBEB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header-wrapper img {
    width: 3.7rem;
    height: 3.7rem;
    border-radius: 50%;
  }
  .header-wrapper span{
    font-size: .4266666rem;
    margin-top: .133333rem;
  }
  .content-wrapper {
    height: 8rem;
    width: 100%;
    background: #fff;
    margin-top: .266666rem;
    padding: .4rem;
    font-size: .42666666rem;
  }
  .content-wrapper .content-top {
    display: flex;
    justify-content: space-between;
  }
  .content-wrapper .content-top span,
  .content-wrapper .content-top a{
    color: #89c7ff;
  }
  th,td{
    padding: .213333rem .106666rem;
    text-align: center;
    border-bottom: 1px solid #ededed;
  }
  .content-table {
    color: #333;
    width: 100%;
    font-size: .373333rem;
    margin-top: .4rem;
  }
  .footer-wrapper {
    height: 1rem;
    width: 100%;
    margin-top: .266666rem;
  }
  .footer-wrapper button {
    width: 100%;
    color: #dc3545;
    letter-spacing: 1px;
    background: #fff;
    height: 1rem;
    border-bottom: 5px solid #ededed;
    border-top: 2px solid #ededed;
  }
</style>
