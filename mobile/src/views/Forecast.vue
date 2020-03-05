<template>
  <div class="forecast">
    <div class="forecast-wrapper" v-for="item in forecast" :key="item._id">
      <div class="month-box">
        <p class="month" style="text-align: center;">{{item.team}}</p>
      </div>
      <div class="box">
        <div class="box1">
          <p>问题：</p>
          <div class="desc">
            <p>{{item.program}}</p>
          </div>
        </div>
        <div class="record-wrapper">
          <div class="left">
            <div class="position">准确概率：</div>
          </div>
          <div class="right">
            <div class="status-box">
              <div class="status">{{item.percent}}</div>
            </div>
          </div>
        </div>
        <div class="record-wrapper">
          <div class="left">
            <div class="position">时间：</div>
          </div>
          <div class="right">
            <div class="status-box">
              <div class="correct-position">{{item.time}}</div>
            </div>
          </div>
        </div>
        <div class="record-wrapper">
          <div class="left">
            <div class="position">文章链接：</div>
          </div>
          <div class="right">
            <div class="status-box">
              <div class="status2">
                <a href="javascript:void(0);">跳转</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import TextAreaItem from '../components/TextareaItem.vue'
import { commentDate } from '@/utils/utils'
import Layout from '../components/Layout.vue'
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {
    TextAreaItem,
    Layout
  }
})
export default class Forecast extends Vue {
  @Action('setTitle') setTitle: any
  @Provide() forecast: Array<any> = []
  created () {
    this.getData()
    this.setTitle('预言')
  }
  getData () {
    (this as any).$axios.get('/api/forecast')
      .then((res:any) => {
        if (res.status === 200) {
          this.forecast = res.data.forecast
          console.log(this.forecast)
        }
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  .forecast {
    font-size: 16px;
  }
  .month {
    padding: 15px;
  }
  .box {
    width: 86%;
    margin:0 auto;
    box-shadow: 0 0 0.27rem #dddddd;
  }
  .box1 {
    background: #ffffff;
    padding-top: 0.1px;
    padding-left: .53333333rem;
    padding-right: .53333333rem;
  }
  .box1>p {
    padding-top: .30533333rem;
  }
  .desc {
    padding: .4rem 0;
    border-bottom: 1px solid #eee;
  }
  .desc p {
    line-height: .53333333rem;
  }
  .record-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 16px;
    margin: .533333rem .533333rem 0 .533333rem;
    border-bottom: 1px solid #eee;
    background: #ffffff;
    padding-top: 0.1px;
  }
  .position {
    padding-bottom: .2666666rem;
  }
  .date {
    color: gray;
    font-size: 14px;
  }
  .left, .right {
    padding-bottom: .266666rem;
  }
  .status-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    padding-bottom: .266666rem;
  }
  .status {
    color: #ffffff;
    background: #dc3545;
    display: inline-block;
    padding: .133333rem;
    border-radius: .08rem;
  }
  .status2 {
    color: #ffffff;
    background: #2878FF;
    display: inline-block;
    padding: .133333rem;
    border-radius: .08rem;
  }
  .status2>a {
    color: #ffffff;
  }
  .correct-position {
    font-size: 14px;
  }
</style>
