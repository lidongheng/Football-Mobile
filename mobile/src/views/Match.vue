<template>
  <div class="match">
    <div class="theme">
      <h1>比赛</h1>
    </div>
    <div class="Mancity">
      <h1 style="text-align: center;font-size: .5333333rem;">曼城</h1>
      <div class="team">
        <div class="date">
          <div><span>08-18 00:30 星期日</span></div>
          <div><span>英超 第2轮</span></div>
        </div>
        <div class="vs"><span>曼城vs热刺</span></div>
        <div class="when"><span>144时</span></div>
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
export default class Match extends Vue {}
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
