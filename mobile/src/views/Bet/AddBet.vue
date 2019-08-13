<template>
  <div class="addBet">
    <div class="theme">
      <h1>投注</h1>
    </div>
    <form>
      <InputItem type="text" name="number" placeholder="比赛编号"></InputItem>
      <InputItem type="text" name="league" placeholder="联赛"></InputItem>
      <InputItem type="text" name="host" placeholder="主队"></InputItem>
      <InputItem type="text" name="away" placeholder="客队"></InputItem>
      <InputItem type="text" name="betTeam" placeholder="投注球队"></InputItem>
      <InputItem type="text" name="handicap" placeholder="盘口"></InputItem>
      <InputItem type="text" name="profit" placeholder="水位"></InputItem>
      <InputItem type="text" name="amount" placeholder="投注额"></InputItem>
      <div class="form-control2">
        <button type="button" class="btn btn-primary">提交</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import InputItem from '../../components/InputItem.vue'
@Component({
  components: {
    InputItem
  }
})
export default class AddBet extends Vue {}
</script>

<style lang="scss" scoped>
  .form-control2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
