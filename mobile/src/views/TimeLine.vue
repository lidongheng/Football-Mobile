<template>
  <div class="timeLine">
    <div v-for="(item,index) in timeline" :key="index">
      <ul>
        <li>
          <div class="left"></div>
          <div class="center">
            {{item.date}}
          </div>
          <div class="right">
            {{item.event}} <span style="color:red;">{{item.desc}}</span>
          </div>
        </li>
      </ul>
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
export default class TimeLine extends Vue {
  @Action('setTitle') setTitle: any
  @Provide() timeline: Array<object> = []
  created () {
    this.getData()
    this.setTitle('时间线')
  }
  getData () {
    (this as any).$axios.get('/api/timeline/')
      .then((res:any) => {
        this.timeline = res.data.timeline
        console.log(res.data.timeline)
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  .timeLine {
    font-size: .426666rem;
  }
  ul {
    white-space: nowrap;
  }
  li {
    border-left: 1px solid #89c7ff;
    margin-left: .2666666rem;
    line-height: 2;
  }
  .left {
    position: relative;
    left: -.2rem;
    width: 5%;
    min-width: .4rem;
    max-width: .4rem;
    height: .4rem;
    background-color: #fff;
    border-radius: 50%;
    border: .1066666rem solid #89c7ff;
  }
  .center {
    width: 20%;
    min-width: 1.466666rem;
  }
  .right {
    width: 75%;
    white-space: normal;
  }
  li div {
    display: inline-block;
    vertical-align: top;
  }
</style>
