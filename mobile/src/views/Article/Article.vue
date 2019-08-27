<template>
  <div class="article">
    <div class="theme">
      <h1>文章</h1>
    </div>
    <div class="noContent" v-show="contentsLength===0">暂无文章</div>
    <div v-for="(item,index) in articles" :key="index">
      <NewsItem :year="item.year" :date="item.date" :href="item.href" :title="item.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import NewsItem from '../../components/NewsItem.vue'
import { year, articleDate } from '@/utils/utils'
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {
    NewsItem
  }
})
export default class Article extends Vue {
  @Action('setTitle') setTitle: any
  @Provide() articles: Array<object> = []
  get contentsLength () {
    return this.articles.length
  }
  created () {
    this.getData()
    this.setTitle('文章')
  }
  getData () {
    (this as any).$axios.get('/api/articles/')
      .then((res:any) => {
        res.data.article.forEach((item:any) => {
          item.year = year(item.date)
          item.date = articleDate(item.date)
          item.href = `/article/${item._id}/`
        })
        this.articles = res.data.article
      })
      .catch((err:any) => console.log(err))
  }
}
</script>

<style lang="scss" scoped>
  .article .theme {
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .article .theme h1 {
    font-size: .64rem;
    font-weight: 600;
  }
  .article .content {
    display: flex;
    align-items: flex-start;
    padding-left: .1333333rem;
    margin: .5333333rem 0;
  }
  .article .content .info {
    width: 1.28rem;
    height: 1.28rem;
    background: #89c7ff;
    border-radius: .16rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .article .content .info .month {
    font-size: .426666rem;
    padding-bottom: 0.1066666rem;
    color: #fff;
  }
  .article .content .info .year {
    font-size: .373333rem;
    color: #fff;
  }
  .article .content .title-wrapper {
    display: flex;
    flex: 1;
    padding: .1333333rem .133333rem 0 .4rem;
  }
  .article .content .title-wrapper .title {
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: .133333rem;
  }
  .article .content .title-wrapper .title a{
    font-size: .48rem;
    color: #333;
    display: inline-block;
  }
  .noContent {
    font-size: .4666666rem;
    text-align: center;
  }
</style>
