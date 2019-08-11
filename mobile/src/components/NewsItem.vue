<template>
  <div class="content">
    <div class="info">
      <span class="month">{{date}}</span>
      <span class="year">{{year}}</span>
    </div>
    <div class="title-wrapper">
      <div class="title">
        <a :href="href">{{title}}</a>
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
export default class NewsItem extends Vue {
  @Prop(String) year!: String
  @Prop(String) date!: String
  @Prop(String) href!: String
  @Prop(String) title!: String
}
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    align-items: flex-start;
    padding-left: .1333333rem;
    margin: .5333333rem 0;
  }
  .content .info {
    width: 1.28rem;
    height: 1.28rem;
    background: #89c7ff;
    border-radius: .16rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content .info .month {
    font-size: .426666rem;
    padding-bottom: 0.1066666rem;
    color: #fff;
  }
  .content .info .year {
    font-size: .373333rem;
    color: #fff;
  }
  .content .title-wrapper {
    display: flex;
    flex: 1;
    padding: .1333333rem .133333rem 0 .4rem;
  }
  .content .title-wrapper .title {
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: .133333rem;
  }
  .content .title-wrapper .title a{
    font-size: .48rem;
    color: #333;
    display: inline-block;
  }
</style>
