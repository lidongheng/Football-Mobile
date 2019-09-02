<template>
  <div class="addBet">
    <div class="theme">
      <h1>投注</h1>
    </div>
    <form @submit.prevent="onSubmit">
      <InputItem type="text" name="number" placeholder="比赛编号" v-model="formData.number"></InputItem>
      <InputItem type="text" name="league" placeholder="联赛" v-model="formData.league"></InputItem>
      <InputItem type="text" name="host" placeholder="主队" v-model="formData.host"></InputItem>
      <InputItem type="text" name="away" placeholder="客队" v-model="formData.away"></InputItem>
      <InputItem type="text" name="betTeam" placeholder="投注球队" v-model="formData.betTeam"></InputItem>
      <InputItem type="text" name="handicap" placeholder="盘口" v-model="formData.handicap"></InputItem>
      <InputItem type="text" name="profit" placeholder="水位" v-model="formData.profit"></InputItem>
      <InputItem type="text" name="amount" placeholder="投注额" v-model="formData.amount"></InputItem>
      <div class="form-control2">
        <button type="submit" class="btn btn-primary">提交</button>
      </div>
    </form>
    <Dialog v-if="isDialogVisible" :betOrder="betOrder" @close="closeDialog"></Dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import InputItem from '../../components/InputItem.vue'
import { State, Getter, Mutation, Action } from 'vuex-class'
import Dialog from '../../components/Dialog.vue'
@Component({
  components: {
    InputItem,
    Dialog
  }
})
export default class AddBet extends Vue {
  @Action('setTitle') setTitle: any
  @Provide() formData: {
    number: string;
    league: string;
    host: string;
    away: string;
    betTeam: string;
    handicap: string;
    profit: string;
    amount: string;
  } = {
    number: '',
    league: '',
    host: '',
    away: '',
    betTeam: '',
    handicap: '',
    profit: '',
    amount: ''
  }
  @Provide() betOrder: object = {}
  @Provide() isDialogVisible: Boolean = false
  created () {
    this.setTitle('新增投注单')
  }
  onSubmit () {
    (this as any).$axios.post('/api/bets/', this.formData)
      .then((res:any) => {
        this.betOrder = res.data.bet
        this.isDialogVisible = true
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
  closeDialog (val:boolean) {
    this.isDialogVisible = val
    this.$router.push({ path: '/bet/detail' })
  }
}
</script>

<style lang="scss" scoped>
  .form-control2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
