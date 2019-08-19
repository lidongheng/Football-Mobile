<template>
  <div class="articleDetail">
    <div class="theme">
      <h1>文章详情</h1>
    </div>
    <div class="main-wrapper">
      <div class="title">
        <h1>{{article.title}}</h1>
      </div>
      <div class="user">
        <span>作者：{{article.user}}</span>
        <span>时间：{{article.date}}</span>
      </div>
      <div class="content" v-for="(item,index) in article.paragraph" :key="index">
        <p>{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import { articleDate } from '@/utils/utils'
@Component({
  components: {

  }
})
export default class ArticleDetail extends Vue {
  @Provide() article: {
    label: String;
    about: Array<any>;
    _id: String;
    user: String;
    title: String;
    paragraph: String;
    date: String;
  } = {
    label: '',
    about: [],
    _id: '',
    user: '',
    title: '',
    paragraph: '',
    date: ''
  }
  created () {
    this.getData()
  }
  getData () {
    const id = this.$route.params.id;
    (this as any).$axios.get(`/api/articles/${id}/`)
      .then((res:any) => {
        this.article.label = res.data.article.label
        this.article.about = res.data.article.about
        this.article._id = res.data.article._id
        this.article.user = res.data.article.user.username
        this.article.title = res.data.article.title
        this.article.paragraph = res.data.article.content.replace(/(\r\n)|(\n)/g, '<br>').split('<br>')
        this.article.date = articleDate(res.data.article.date)
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  .main-wrapper {
    margin: .10666666rem .7rem;
  }
  .title h1 {
    font-size: .64rem;
    letter-spacing: .066666666rem;
    margin-bottom: .5rem;
    text-align: justify;
    line-height: .9rem;
    font-family: '微软雅黑';
  }
  .user {
    color: rgba(0,0,0,.56);
    display: flex;
    justify-content: space-around;
    font-size: .4266666rem;
    margin: .4rem 0;
  }
  .content p{
    font-size: .4266666rem;
    text-indent: .90666666rem;
    font-variant: normal;
    letter-spacing: 2px;
    text-align: left;
    line-height: 1.8;
    color: rgba(0,0,0,.56);
    margin: .2666666rem 0;
  }
</style>
