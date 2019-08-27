<template>
  <div class="nav">
    <div class="banner">
      <img :src="require('@/assets/banner.jpg')" alt=""/>
    </div>
    <ul>
      <li>
        <a href="" @click.prevent="noContent">
          <span class="iconfont">&#xe6f1;</span>
          <p>资讯</p>
        </a>
      </li>
      <li>
        <router-link to="/report" name="report" tag="a">
          <span class="iconfont">&#xe65b;</span>
          <p>报告</p>
        </router-link>
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
        <router-link to="/timeLine" name="timeLine" tag="a">
          <span class="iconfont">&#xe6e7;</span>
          <p>时间线</p>
        </router-link>
      </li>
      <li>
        <router-link to="/premierLeague" tag="a">
          <span class="iconfont">&#xe61d;</span>
          <p>英超</p>
        </router-link>
      </li>
      <li>
        <a href="" @click.prevent="noContent">
          <span class="iconfont">&#xe61a;</span>
          <p>西甲</p>
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
      <li>
        <a href="" @click.prevent="noContent">
          <span class="iconfont">&#xeb65;</span>
          <p>法甲</p>
        </a>
      </li>
      <li>
        <a href="" @click.prevent="noContent">
          <span class="iconfont">&#xe8fb;</span>
          <p>中超</p>
        </a>
      </li>
      <li>
        <router-link to="/bet/add" tag="a">
          <span class="iconfont">&#xe6ff;</span>
          <p>模拟投注</p>
        </router-link>
      </li>
    </ul>
    <Layout :show="isLayoutShow" text="暂未开放，敬请期待~"></Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import Layout from '../components/Layout.vue'
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {
    Layout
  }
})
export default class Nav extends Vue {
  @Action('setTitle') setTitle: any
  @Provide() display: string = 'none'
  @Provide() isLayoutShow: boolean = false
  created () {
    this.setTitle('首页')
  }
  noContent () {
    this.isLayoutShow = true
    let that = this
    setTimeout(function () {
      that.isLayoutShow = false
    }, 1900)
  }
}
</script>

<style lang="scss" scoped>
  @import url(../../public/css/font.css);
  .nav {
    height: 100%;
  }
  .banner {
    height: 6.3333333rem;
  }
  .banner img {
    width: 100%;
    height: 100%;
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
