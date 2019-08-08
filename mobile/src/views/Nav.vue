<template>
  <div class="nav">
    <div class="banner">

    </div>
    <ul>
      <li>
        <a href="#">
          <span class="iconfont">&#xe6f1;</span>
          <p>资讯</p>
        </a>
      </li>
      <li>
        <a href="">
          <span class="iconfont">&#xe65b;</span>
          <p>报告</p>
        </a>
      </li>
      <li>
        <router-link to="/article" name="article" tag="a">
          <span class="iconfont">&#x3500;</span>
          <p>文章</p>
        </router-link>
      </li>
      <li>
        <router-link to="/comment" name="comment" tag="a">
          <span class="iconfont">&#xe63e;</span>
          <p>热评</p>
        </router-link>
      </li>
      <li>
        <a href="">
          <span class="iconfont">&#xe6e7;</span>
          <p>时间线</p>
        </a>
      </li>
      <li>
        <a href="">
          <span class="iconfont">&#xe61d;</span>
          <p>英超</p>
        </a>
      </li>
      <li>
        <a href="" @click.prevent="noContent">
          <span class="iconfont">&#xe61a;</span>
          <p>西甲</p>
        </a>
      </li>
      <li>
        <a href="" @click.prevent="noContent">
          <span class="iconfont">&#xe8fb;</span>
          <p>中超</p>
        </a>
      </li>
      <li>
        <a href="" @click.prevent="noContent">
        <span class="iconfont">&#xe638;</span>
        <p>德甲</p>
        </a>
      </li>
      <li>
        <a href="" @click.prevent="noContent">
          <span class="iconfont">&#xe53f;</span>
          <p>意甲</p>
        </a>
      </li>
    </ul>
    <Layout :display="display" text="暂未开放，敬请期待~"></Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import Layout from '../components/Layout.vue'
@Component({
  components: {
    Layout
  }
})
export default class Nav extends Vue {
  @Provide() display: string = 'none'
  noContent () {
    var that = this
    that.display = 'flex'
    setTimeout(function () {
      that.display = 'none'
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
  @import url(../../public/css/font.css);
  .nav {
    height: 100%;
  }
  .banner {
    height: 3.3333333rem;
    background: gray;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: .35rem .1066666rem;
  }
  ul>li {
    display: flex;
    flex-basis: 25%;
    justify-content: center;
    align-items: center;
    margin: .33333rem 0;
  }
  ul>li>a {
    color: #37A2D8;
  }
  ul>li>a>span {
    font-size: 1.2rem;
    padding: .1rem;
    text-align: center;
  }
  ul>li>a>p {
    font-size: .4266666rem;
    text-align: center;
    margin-top: .3333333rem;
  }
</style>
