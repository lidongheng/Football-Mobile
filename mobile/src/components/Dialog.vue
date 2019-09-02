<template>
  <div class="dialog-wrapper">
    <div class="background-dialog">
      <div class="dialog">
        <div class="league-wrapper">
          <div class="line"></div>
          <div class="line"></div>
          <p class="league">{{betOrder.league}}</p>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="match-wrapper">
          <span>{{betOrder.host}}</span>
          <span>vs</span>
          <span>{{betOrder.away}}</span>
        </div>
        <div class="bet-wrapper">
          <p>{{betOrder.betTeam}} {{betOrder.handicap}} @ {{betOrder.profit}}</p>
          <p>让球</p>
        </div>
        <div class="confirm-wrapper">
          <i class="fa fa-check-circle"></i>
          <span>注单已确认</span>
        </div>
        <div class="info-wrapper">
          <div>
            <span>投注金额</span>
            <span>{{betOrder.amount + '元'}}</span>
          </div>
          <div>
            <span>可赢金额</span>
            <span>{{betOrder.totalProfit + '元'}}</span>
          </div>
          <div>
            <span>注单号</span>
            <span>{{betOrder.serialNumber}}</span>
          </div>
        </div>
        <div>
          <button type="button" style="width: 100%;margin-top: 1.2rem;" class="btn btn-block btn-primary btn-confirm" @click="close">注单已确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  components: {

  }
})
export default class Dialog extends Vue {
  @Prop(Object) betOrder!: Object
  close () {
    this.$emit('close', false)
  }
}
</script>

<style lang="scss" scoped>
  .dialog-wrapper {
    font-size: .4266666rem;
  }
  .background-dialog {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog {
    width: 8rem;
    height: 11.3866666rem;
    background: #fdfdfd;
    border-radius: 5%;
    overflow: hidden;
  }
  .league-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5333333rem 0 .2666666rem 0;
  }
  .league-wrapper p {
    padding: 0;
    margin: 0 1.0666666rem;
    color: #333;
  }
  .line {
    width: .0533333rem;
    height: .32rem;
    border-radius: 20%;
    background: lightcoral;
    transform:rotate(15deg);
    margin: .0533333rem;
  }
  .match-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 1.0666666rem;
  }
  .bet-wrapper {
    background: #5FAAEB;
    height: 2.6666666rem;
    margin: .5333333rem .32rem;
    border-radius: .16rem;
  }
  .bet-wrapper p {
    text-align: center;
    color: #fff;
  }
  .bet-wrapper p:nth-child(1) {
    padding: .4rem 0 .266666rem 0;
    margin: 0;
  }
  .confirm-wrapper {
    color: #5FAAEB;
    text-align: center;
    margin: .2666666rem 0 .8rem 0;
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
  }
  .info-wrapper div{
    display: flex;
    justify-content: space-between;
    margin: .21333333rem .32rem;
  }
  .btn-confirm {
    background: #5FBBEB;
    border-color:#5FBBEB;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
