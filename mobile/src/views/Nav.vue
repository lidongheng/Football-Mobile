<template>
  <div class="nav">
    <div class="banner">

    </div>
    <ul>
      <li>
        <a href="">
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
        <a href="">
          <span class="iconfont">&#x3500;</span>
          <p>文章</p>
        </a>
      </li>
      <li>
        <a href="">
          <span class="iconfont">&#xe63e;</span>
          <p>热评</p>
        </a>
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
        <a href="">
          <span class="iconfont">&#xe61a;</span>
          <p>西甲</p>
        </a>
      </li>
      <li>
        <a href="">
          <span class="iconfont">&#xe8fb;</span>
          <p>中超</p>
        </a>
      </li>
      <li>
        <a href="">
        <span class="iconfont">&#xe638;</span>
        <p>德甲</p>
        </a>
      </li>
      <li>
        <a href="">
          <span class="iconfont">&#xe53f;</span>
          <p>意甲</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {

  }
})
export default class Nav extends Vue {}
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
    margin: .7rem .1066666rem 0 .1066666rem;
  }
  ul>li {
    display: flex;
    flex-basis: 25%;
    justify-content: center;
    align-items: center;
    margin: .5rem 0;
  }
  ul>li>a {
    color: #37A2D8;
  }
  ul>li>a>span {
    font-size: 1.5rem;
  }
  ul>li>a>p {
    font-size: .5866666rem;
    text-align: center;
    margin-top: .1333333rem;
  }
</style>
