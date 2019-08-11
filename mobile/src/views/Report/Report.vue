<template>
  <div class="report">
    <div class="new_article">
      <button class="btn btn-primary">新增报告</button>
    </div>
    <NewsItem year="2019" date="08.11" href="/" title="新赛季的输盘王到底是谁？利物浦还是纽卡斯尔联"></NewsItem>
    <NewsItem year="2019" date="08.11" href="/" title="新赛季的输盘王到底是谁？利物浦还是纽卡斯尔联"></NewsItem>
    <NewsItem year="2019" date="08.11" href="/" title="新赛季的输盘王到底是谁？利物浦还是纽卡斯尔联"></NewsItem>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NewsItem from '../../components/NewsItem.vue'
@Component({
  components: {
    NewsItem
  }
})
export default class Report extends Vue {}
</script>

<style lang="scss" scoped>
  .new_article {
    margin: .32rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
