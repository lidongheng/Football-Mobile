<template>
  <div class="comment">
    <div class="comment-box">
      <div class="comment-header">
        <span class="username">用户32358</span>
      </div>
      <div class="comment-content">
        <p class="content">正文内容。这周周末英超比赛有：利物浦vs诺维奇，莱斯特城vs狼队，曼联vs切尔西等</p>
        <p class="time">08-08 16:36</p>
      </div>
      <div class="comment-operation">
        <div class="like">
          <span class="iconfont">&#xe63a;</span>
          <span class="description">55</span>
        </div>
        <div class="unlike">
          <span class="iconfont">&#xe665;</span>
          <span class="description">踩</span>
        </div>
        <div class="delete">
          <span class="iconfont">&#xe73d;</span>
          <span class="description">删</span>
        </div>
      </div>
    </div>
    <div class="comment-box">
      <div class="comment-header">
        <span class="username">用户32358</span>
      </div>
      <div class="comment-content">
        <p class="content">正文内容。这周周末英超比赛有：利物浦vs诺维奇，莱斯特城vs狼队，曼联vs切尔西等</p>
        <p class="time">08-08 16:36</p>
      </div>
      <div class="comment-operation">
        <div class="like">
          <span class="iconfont">&#xe63a;</span>
          <span class="description">55</span>
        </div>
        <div class="unlike">
          <span class="iconfont">&#xe665;</span>
          <span class="description">踩</span>
        </div>
        <div class="delete">
          <span class="iconfont">&#xe73d;</span>
          <span class="description">删</span>
        </div>
      </div>
    </div>
    <div class="add-comment">
      <a href="">+</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {

  }
})
export default class Comment extends Vue {}
</script>

<style lang="scss" scoped>
  .comment {
    background: rgba(0,0,0,.04);
    padding: .266666rem 0;
    box-sizing: content-box;
  }
  .comment-box {
    display: flex;
    flex-direction: column;
    margin-bottom: .266666rem;
    background: #fff;
  }
  .comment-header {
    height: 1rem;
    padding: 0 .4rem;
  }
  .comment-content {
    padding: 0 .4rem;
  }
  .username {
    font-size: .4666666rem;
  }
  .content,.time {
    font-size: .4666666rem;
    color: #333;
    margin-top: .4rem;
  }
  .content {
    padding-bottom: .4rem;
  }
  .time {
    text-align: right;
  }
  .comment-operation {
    display: flex;
    height: 1rem;
    margin-top: .4rem;
    border-top: .026666rem solid rgba(0,0,0,.12);
  }
  .comment-operation>div {
    display: flex;
    flex-basis: 33.33%;
    justify-content: center;
    align-items: center;
    border-right: .026666rem solid rgba(0,0,0,.12);
  }
  .iconfont {
    font-size: .533333rem;
  }
  .description {
    font-size: .373333rem;
    color: #333;
    padding-left: .053333rem;
  }
  .add-comment {
    width: 1rem;
    height: 1rem;
    background: orange;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: .266666rem;
    bottom: 14vh;
    opacity: .37;
  }
  .add-comment>a{
    color: #fff;
  }
</style>
