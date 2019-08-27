<template>
  <div class="match">
    <div class="theme">
      <h1>比赛</h1>
    </div>
    <div class="Mancity">
      <h1 style="text-align: center;font-size: .5333333rem;">曼城</h1>
      <div class="team" v-for="item in Mancity" :key="item._id">
        <div class="date">
          <div><span>{{item.time}} {{item.weekday}}</span></div>
          <div><span>{{item.league}}</span></div>
        </div>
        <div class="vs"><span>{{item.match}}</span></div>
        <div class="when"><span>{{item.period+'时'}}</span></div>
      </div>
    </div>
    <div class="Liverpool">
      <h1 style="text-align: center;font-size: .5333333rem;">利物浦</h1>
      <div class="team" v-for="item in Liverpool" :key="item._id">
        <div class="date">
          <div><span>{{item.time}} {{item.weekday}}</span></div>
          <div><span>{{item.league}}</span></div>
        </div>
        <div class="vs"><span>{{item.match}}</span></div>
        <div class="when"><span>{{item.period+'时'}}</span></div>
      </div>
    </div>
    <div class="TottenhamHotSpur">
      <h1 style="text-align: center;font-size: .5333333rem;">热刺</h1>
      <div class="team" v-for="item in TottenhamHotSpur" :key="item._id">
        <div class="date">
          <div><span>{{item.time}} {{item.weekday}}</span></div>
          <div><span>{{item.league}}</span></div>
        </div>
        <div class="vs"><span>{{item.match}}</span></div>
        <div class="when"><span>{{item.period+'时'}}</span></div>
      </div>
    </div>
    <div class="Arsenal">
      <h1 style="text-align: center;font-size: .5333333rem;">阿森纳</h1>
      <div class="team" v-for="item in Arsenal" :key="item._id">
        <div class="date">
          <div><span>{{item.time}} {{item.weekday}}</span></div>
          <div><span>{{item.league}}</span></div>
        </div>
        <div class="vs"><span>{{item.match}}</span></div>
        <div class="when"><span>{{item.period+'时'}}</span></div>
      </div>
    </div>
    <div class="ManUtd">
      <h1 style="text-align: center;font-size: .5333333rem;">曼联</h1>
      <div class="team" v-for="item in ManUtd" :key="item._id">
        <div class="date">
          <div><span>{{item.time}} {{item.weekday}}</span></div>
          <div><span>{{item.league}}</span></div>
        </div>
        <div class="vs"><span>{{item.match}}</span></div>
        <div class="when"><span>{{item.period+'时'}}</span></div>
      </div>
    </div>
    <div class="Chelsea">
      <h1 style="text-align: center;font-size: .5333333rem;">切尔西</h1>
      <div class="team" v-for="item in Chelsea" :key="item._id">
        <div class="date">
          <div><span>{{item.time}} {{item.weekday}}</span></div>
          <div><span>{{item.league}}</span></div>
        </div>
        <div class="vs"><span>{{item.match}}</span></div>
        <div class="when"><span>{{item.period+'时'}}</span></div>
      </div>
    </div>
    <div class="Wolfhampton">
      <h1 style="text-align: center;font-size: .5333333rem;">狼队</h1>
      <div class="team" v-for="item in Wolfhampton" :key="item._id">
        <div class="date">
          <div><span>{{item.time}} {{item.weekday}}</span></div>
          <div><span>{{item.league}}</span></div>
        </div>
        <div class="vs"><span>{{item.match}}</span></div>
        <div class="when"><span>{{item.period+'时'}}</span></div>
      </div>
    </div>
    <div class="Espanyol">
      <h1 style="text-align: center;font-size: .5333333rem;">西班牙人</h1>
      <div class="team" v-for="item in Espanyol" :key="item._id">
        <div class="date">
          <div><span>{{item.time}} {{item.weekday}}</span></div>
          <div><span>{{item.league}}</span></div>
        </div>
        <div class="vs"><span>{{item.match}}</span></div>
        <div class="when"><span>{{item.period+'时'}}</span></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import { commentDate } from '../utils/utils'
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {

  }
})
export default class Match extends Vue {
  @Action('setTitle') setTitle: any
  @Provide() Mancity: any = []
  @Provide() Liverpool: any = []
  @Provide() TottenhamHotSpur: any = []
  @Provide() Arsenal: any = []
  @Provide() ManUtd: any = []
  @Provide() Chelsea: any = []
  @Provide() Wolfhampton: any = []
  @Provide() Espanyol: any = []
  created () {
    this.getData()
    this.setTitle('比赛')
  }
  getData () {
    (this as any).$axios.get('/api/teams/focusMatch/')
      .then((res:any) => {
        res.data.teams.map((team:any) => {
          if (team.club === 'Mancity') {
            this.Mancity = team.recentMatch
            this.Mancity.forEach((item:any) => {
              item.time = commentDate(item.time)
            })
          }
          if (team.club === 'Liverpool') {
            this.Liverpool = team.recentMatch
            this.Liverpool.forEach((item:any) => {
              item.time = commentDate(item.time)
            })
          }
          if (team.club === 'TottenhamHotSpur') {
            this.TottenhamHotSpur = team.recentMatch
            this.TottenhamHotSpur.forEach((item:any) => {
              item.time = commentDate(item.time)
            })
          }
          if (team.club === 'Arsenal') {
            this.Arsenal = team.recentMatch
            this.Arsenal.forEach((item:any) => {
              item.time = commentDate(item.time)
            })
          }
          if (team.club === 'ManUtd') {
            this.ManUtd = team.recentMatch
            this.ManUtd.forEach((item:any) => {
              item.time = commentDate(item.time)
            })
          }
          if (team.club === 'Chelsea') {
            this.Chelsea = team.recentMatch
            this.Chelsea.forEach((item:any) => {
              item.time = commentDate(item.time)
            })
          }
          if (team.club === 'Wolfhampton') {
            this.Wolfhampton = team.recentMatch
            this.Wolfhampton.forEach((item:any) => {
              item.time = commentDate(item.time)
            })
          }
          if (team.club === 'Espanyol') {
            this.Espanyol = team.recentMatch
            this.Espanyol.forEach((item:any) => {
              item.time = commentDate(item.time)
            })
          }
        })
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  .team {
    font-size: .426666rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.333333rem;
    margin: .2666666rem;
    border-bottom: 1px solid #ededed;
  }
</style>
