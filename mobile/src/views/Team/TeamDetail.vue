<template>
  <div class="teamDetail">
    <div class="theme">
      <h1>球队风格</h1>
    </div>
    <div class="style-wrapper">
      <p>{{style}}</p>
    </div>
    <div class="theme">
      <h1>一线队球员</h1>
    </div>
    <div class="tableData">
      <table class="content-table">

        <thead>
        <tr>
          <th>index</th>
          <th>Name</th>
          <th>Position</th>
          <th>importance</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="players.length===0">
          <td colspan="4">暂无数据</td>
        </tr>
        <tr v-else v-for="(item,index) in players" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.player}}</td>
          <td>{{item.position}}</td>
          <td>{{item.importance}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import axios from 'axios'
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {

  }
})
export default class TeamDetail extends Vue {
  @Action('setTitle') setTitle: any
  @Provide() players: Array<object> = []
  @Provide() style: string = ''
  created () {
    this.getData()
    this.setTitle(this.$route.params.team)
  }
  getPlayers () {
    return (this as any).$axios.get(`/api/players/team/${this.$route.params.team}/`)
  }
  getTeamStyle () {
    return (this as any).$axios.get(`/api/teams/styles/${this.$route.params.team}/`)
  }
  getData () {
    axios.all([this.getPlayers(), this.getTeamStyle()])
      .then((res:any) => {
        this.players = res[0].data.players
        this.style = res[1].data.team.style
        // const FW = res[0].data.players.filter(player => player.attr.toString() === 'FW')
        // const MF = res[0].data.players.filter(player => player.attr.toString() === 'MF')
        // const DF = res[0].data.players.filter(player => player.attr.toString() === 'DF')
        // const GK = res[0].data.players.filter(player => player.attr.toString() === 'GK')
        // this.$store.dispatch('setPlayers', {FW: FW, MF: MF, DF: DF, GK: GK})
        // this.$store.dispatch('setStyle',{style: res[1].data.team.style})
      })
      .catch((err:any) => console.log(err))
  }
}
</script>

<style lang="scss" scoped>
  .teamDetail {
    margin: 0 .1066666rem;
  }
  .style-wrapper p{
    font-size: .42666666rem;
  }
  table, td, th{
    border:1px solid #ccc;
  }
  th,td {
    padding: .21333333rem;
  }
  table {
    border-collapse: collapse;
    text-align: center;
    font-size: .4266666rem;
  }
</style>
