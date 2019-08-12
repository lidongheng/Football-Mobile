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
      <a href="javascript:void(0);" @click="addInput">+</a>
    </div>
    <div ref="inputComment" class="input-comment" style="display:none;">
      <div class="input-comment-header">
        <div class="left-button">
          <button type="button" class="btn" @click="cancelInput">取消</button>
        </div>
        <div class="center-title">
          <span class="title">发热评</span>
        </div>
        <div class="right-button">
          <button type="button">发送</button>
        </div>
      </div>
      <TextAreaItem width="98%" name="inputComment" cols="30" rows="20" placeholder="分享新鲜事..."></TextAreaItem>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TextAreaItem from '../components/TextareaItem.vue'
@Component({
  components: {
    TextAreaItem
  }
})
export default class Comment extends Vue {
  addInput () {
    this.$refs.inputComment.style.display = 'block'
  }
  cancelInput () {
    this.$refs.inputComment.style.display = 'none'
  }
}
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
  .input-comment {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
  }
  .input-comment .input-comment-header {
    height: 8vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #FdFdFd;
  }
  .input-comment .input-comment-header .left-button button {
    outline: none;
    background-color: #FdFdFd;
    letter-spacing: 1px;
    font-size: .426666rem;
  }
  .input-comment>textarea{
    width: 100%;
    outline: none;
  }
  .input-comment .input-comment-header .left-button,.input-comment .input-comment-header .right-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input-comment>.input-comment-header>.right-button>button {
    background-color: orange;
    color: #fff;
    border-radius: .1066666rem;
    letter-spacing: 1px;
    font-size: .373333rem;
    padding: .1866666rem;
    margin-right: .186666rem;
    border: 1px solid #eee;
  }
  .input-comment>.input-comment-header>.right-button>button:disabled {
    background-color: #f8f8f8;
    border-radius: .1066666rem;
    letter-spacing: 1px;
    font-size: .426666rem;
    padding: .1866666rem;
    margin-right: .186666rem;
    border: 1px solid #eee;
  }
  .input-comment .input-comment-header .center-title .title {
    font-size: .48rem;
    font-weight: 600;
    font-family: '-apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB",Arial,sans-serif,Open Sans';
  }
</style>
