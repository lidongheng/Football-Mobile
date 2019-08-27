<template>
  <div class="premierLeague">
    <div class="table-wrapper">
      <table v-for="(item,index) in forwards" :key="index">
        <tr>
          <td>{{item.time}}</td>
          <td>{{item.match}}</td>
        </tr>
        <tr>
          <td colspan="2">{{item.odds}}</td>
        </tr>
        <tr>
          <td colspan="2">前瞻：{{item.forward}}</td>
        </tr>
      </table>
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
export default class PremierLeague extends Vue {
  @Action('setTitle') setTitle: any
  @Provide() forwards: Array<any> = []
  created () {
    this.getData()
    this.setTitle('英超')
  }
  getData () {
    (this as any).$axios.get('/api/forwards/')
      .then((res:any) => {
        this.forwards = res.data.forwards
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  .table-wrapper {
    font-size: .4266666rem;
    margin: 5% 5%;
  }
  td {
    padding: .21333333rem;
  }
</style>
