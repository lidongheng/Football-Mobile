<template>
  <div class="addReport">
    <div class="theme">
      <h1>新增报告</h1>
    </div>
    <form action="">
      <InputItem type="text" name="league" placeholder="联盟"></InputItem>
      <InputItem type="text" name="rounds" placeholder="轮次"></InputItem>
      <InputItem type="text" name="host" placeholder="主队"></InputItem>
      <InputItem type="text" name="away" placeholder="客队"></InputItem>
      <InputItem type="text" name="matchTime" placeholder="时间"></InputItem>
      <InputItem type="text" name="hostInjury" placeholder="主队伤停信息"></InputItem>
      <InputItem type="text" name="awayInjury" placeholder="客队伤停信息"></InputItem>
      <TextareaItem name="analysis" cols="30" rows="3" placeholder="战意分析"></TextareaItem>
      <TextareaItem name="hostExpectLineup" cols="30" rows="3" placeholder="主队预测首发"></TextareaItem>
      <TextareaItem name="hostExpectBench" cols="30" rows="3" placeholder="主队预测替补"></TextareaItem>
      <TextareaItem name="awayExpectLineup" cols="30" rows="3" placeholder="客队预测首发"></TextareaItem>
      <TextareaItem name="awayExpectBench" cols="30" rows="3" placeholder="客队预测替补"></TextareaItem>
      <TextareaItem name="hostNews" cols="30" rows="3" placeholder="主队最新新闻"></TextareaItem>
      <TextareaItem name="awayNews" cols="30" rows="3" placeholder="客队最近新闻"></TextareaItem>
      <div class="form-control2">
        <button type="button" class="btn btn-primary">提交</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import InputItem from '../../components/InputItem.vue'
import TextareaItem from '../../components/TextareaItem.vue'
@Component({
  components: {
    InputItem,
    TextareaItem
  }
})
export default class AddReport extends Vue {}
</script>

<style lang="scss" scoped>
  .form-control2 {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
