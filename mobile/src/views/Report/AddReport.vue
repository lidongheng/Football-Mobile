<template>
  <div class="addReport">
    <div class="theme">
      <h1>新增报告</h1>
    </div>
    <form @submit.prevent="onSubmit">
      <InputItem type="text" name="league" placeholder="联盟" v-model="formData.league"></InputItem>
      <InputItem type="text" name="rounds" placeholder="轮次" v-model="formData.rounds"></InputItem>
      <InputItem type="text" name="host" placeholder="主队" v-model="formData.host"></InputItem>
      <InputItem type="text" name="away" placeholder="客队" v-model="formData.away"></InputItem>
      <InputItem type="text" name="matchTime" placeholder="时间" v-model="formData.matchTime"></InputItem>
      <div class="checkbox-wrapper">
        <div class="checkbox">
          <span>是否是竞彩单关：</span>
          <input type="checkbox" id="isSingleMatch" class="chooseBtn" v-model="formData.isSingleMatch"/>
          <label for="isSingleMatch" class="choose-label"></label>
        </div>
      </div>
      <InputItem type="text" name="hostInjury" placeholder="主队伤停信息" v-model="formData.hostInjury"></InputItem>
      <InputItem type="text" name="awayInjury" placeholder="客队伤停信息" v-model="formData.awayInjury"></InputItem>
      <TextareaItem name="analysis" cols="30" rows="3" placeholder="战意分析" v-model="formData.analysis"></TextareaItem>
      <TextareaItem name="hostExpectLineup" cols="30" rows="3" placeholder="主队预测首发" v-model="formData.hostExpectLineup"></TextareaItem>
      <TextareaItem name="hostExpectBench" cols="30" rows="3" placeholder="主队预测替补" v-model="formData.hostExpectBench"></TextareaItem>
      <TextareaItem name="awayExpectLineup" cols="30" rows="3" placeholder="客队预测首发" v-model="formData.awayExpectLineup"></TextareaItem>
      <TextareaItem name="awayExpectBench" cols="30" rows="3" placeholder="客队预测替补" v-model="formData.awayExpectBench"></TextareaItem>
      <TextareaItem name="hostNews" cols="30" rows="3" placeholder="主队最新新闻" v-model="formData.hostNews"></TextareaItem>
      <TextareaItem name="awayNews" cols="30" rows="3" placeholder="客队最近新闻" v-model="formData.awayNews"></TextareaItem>
      <div class="form-control2">
        <button type="submit" class="btn btn-primary">提交</button>
      </div>
    </form>
    <Layout :show="isLayoutShow" :text="errorMsg"></Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import InputItem from '../../components/InputItem.vue'
import TextareaItem from '../../components/TextareaItem.vue'
import Layout from '../../components/Layout.vue'
@Component({
  components: {
    InputItem,
    TextareaItem,
    Layout
  }
})
export default class AddReport extends Vue {
  @Provide() isLayoutShow: boolean = false
  @Provide() errorMsg: string = ''
  @Provide() formData: {
    league: String;
    rounds: String;
    host: String;
    away: String;
    matchTime: String;
    isSingleMatch: Boolean;
    hostInjury: String;
    awayInjury: String;
    analysis: String;
    hostExpectLineup: String;
    hostExpectBench: String;
    awayExpectLineup: String;
    awayExpectBench: String;
    hostNews: String;
    awayNews: String;
  } = {
    league: '',
    rounds: '',
    host: '',
    away: '',
    matchTime: '',
    isSingleMatch: false,
    hostInjury: '',
    awayInjury: '',
    analysis: '',
    hostExpectLineup: '',
    hostExpectBench: '',
    awayExpectLineup: '',
    awayExpectBench: '',
    hostNews: '',
    awayNews: ''
  }
  showLayout () {
    this.isLayoutShow = true
    let that = this
    setTimeout(function () {
      that.isLayoutShow = false
      that.errorMsg = ''
    }, 3900)
  }
  onSubmit () {
    (this as any).$axios.post('/api/betForm/', this.formData)
      .then((res:any) => {
        console.log(res)
        this.$router.push({ name: 'report' })
      })
      .catch((err:any) => {
        if (err.response.status === 400) {
          for (const val in err.response.data.errors) {
            this.errorMsg += err.response.data.errors[val] + ','
            break
          }
          this.errorMsg = this.errorMsg.substr(0, this.errorMsg.length - 1)
        } else {
          this.errorMsg = '未知错误！'
        }
        this.showLayout()
      })
  }
}
</script>

<style lang="scss" scoped>
  .form-control2 {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .checkbox-wrapper {
    width: 80%;
    margin: 0 auto;
  }
  .checkbox-wrapper .checkbox {
    margin:0.206666rem;
  }
  .checkbox-wrapper .checkbox span {
    font-size: .4266666rem;
    color: #999;
  }
  .chooseBtn {
    display: none;
  }
  .choose-label {
    box-shadow: #ccc 0 0 0 1px;
    width: 1.0666666rem;
    height: 0.5333333rem;
    border-radius: 0.5333333rem;
    display: inline-block;
    position: relative;
    background-color: #bdbdbd;
    overflow: hidden;
  }
  .choose-label:before{
    content: '';
    position: absolute;
    width: 0.533333rem;
    height: 0.533333rem;
    border-radius: 0.533333rem;
    background-color: #fff;
    left: 0;
    display: inline-block;
    z-index: 20;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }
  .chooseBtn:checked + .choose-label:before {
    left: 0.533333rem;
  }
  .chooseBtn:checked + .choose-label {
    background-color: #51ccee;
  }
</style>
