<template>
  <div class="report">
    <div class="new_article">
      <button class="btn btn-primary" @click="add">新增报告</button>
    </div>
    <div class="newsItem" v-for="(item,index) in report" :key="index" @click.prevent="noContent">
      <NewsItem :year="item.year" :date="item.date" href="#" :title="item.title"></NewsItem>
    </div>
    <Layout :show="isLayoutShow" :text="errorMsg"></Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import NewsItem from '../../components/NewsItem.vue'
import { year, articleDate } from '@/utils/utils'
import Layout from '../../components/Layout.vue'
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {
    NewsItem,
    Layout
  }
})
export default class Report extends Vue {
  @Action('setTitle') setTitle: any
  @Provide() isLayoutShow: boolean = false
  @Provide() errorMsg: string = '暂未开放，敬请期待~'
  @Provide() report: Array<object> = []
  created () {
    this.getData()
    this.setTitle('报告')
  }
  add () {
    this.$router.push({ name: 'addReport' })
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
  noContent () {
    this.isLayoutShow = true
    let that = this
    setTimeout(function () {
      that.isLayoutShow = false
    }, 3900)
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
  .newsItem {
    width: 80%;
    margin: 0 auto;
  }
</style>
