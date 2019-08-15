<template>
  <div class="report">
    <div class="new_article">
      <button class="btn btn-primary" @click="add">新增报告</button>
    </div>
    <div v-for="(item,index) in report" :key="index">
      <NewsItem :year="item.year" :date="item.date" :href="item.href" :title="item.title"></NewsItem>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import NewsItem from '../../components/NewsItem.vue'
import { year, articleDate } from '@/utils/utils'
@Component({
  components: {
    NewsItem
  }
})
export default class Report extends Vue {
  @Provide() report: Array<object> = []
  add () {
    this.$router.push({ name: 'addReport' })
  }
  created () {
    this.getData()
  }
  getData () {
    (this as any).$axios.get('/api/betForm/match/1/')
      .then((res:any) => {
        res.data.match.forEach((item:any) => {
          item.year = year(item.date)
          item.date = articleDate(item.date)
          item.href = `/report/${item._id}/`
          item.title = `${item.host} vs ${item.away}`
        })
        this.report = res.data.match
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  .new_article {
    margin: .32rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
