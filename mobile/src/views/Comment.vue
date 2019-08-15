<template>
  <div class="comment">
    <div class="comment-box" v-for="(item,index) in contents" :key="index">
      <div class="comment-header">
        <span class="username">{{item.user.username}}</span>
      </div>
      <div class="comment-content">
        <p class="content">{{item.content}}</p>
        <p class="time">{{item.date}}</p>
      </div>
      <div class="comment-operation">
        <div class="like" @click="onLikeClick(item._id)">
          <span class="iconfont">&#xe63a;</span>
          <span class="description">{{item.likes.length}}</span>
        </div>
        <div class="unlike" @click="onUnlikeClick(item._id)">
          <span class="iconfont">&#xe665;</span>
          <span class="description">踩</span>
        </div>
        <div class="delete" v-show="canDelete(item.user._id)" @click="onDelete(item._id)">
          <span class="iconfont">&#xe73d;</span>
          <span class="description">删</span>
        </div>
      </div>
    </div>
    <div class="add-comment">
      <a href="javascript:void(0);" @click="addInput">+</a>
    </div>
    <div ref="inputComment" v-show="isShowTextarea" class="input-comment">
      <form @submit.prevent="addComment">
        <div class="input-comment-header">
          <div class="left-button">
            <button type="reset" class="btn" @click="cancelInput">取消</button>
          </div>
          <div class="center-title">
            <span class="title">发热评</span>
          </div>
          <div class="right-button">
            <button type="submit" class="submit">发送</button>
          </div>
        </div>
        <TextAreaItem width="98%" name="inputComment" cols="30" rows="20" placeholder="分享新鲜事..." v-model="formData.content"></TextAreaItem>
      </form>
    </div>
    <Layout :show="isLayoutShow" :text="errorMsg"></Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import TextAreaItem from '../components/TextareaItem.vue'
import { commentDate } from '../utils/utils'
import Layout from '../components/Layout.vue'
@Component({
  components: {
    TextAreaItem,
    Layout
  }
})
export default class Comment extends Vue {
  @Provide() isLayoutShow = false
  @Provide() errorMsg: string = ''
  @Provide() isShowTextarea: boolean = false
  @Provide() contents: object = {}
  @Provide() formData: {
    content: String;
  } = {
    content: ''
  }
  addInput () {
    this.isShowTextarea = true
  }
  cancelInput () {
    this.isShowTextarea = false
  }
  showLayout () {
    this.isLayoutShow = true
    let that = this
    setTimeout(function () {
      that.isLayoutShow = false
      that.errorMsg = ''
    }, 3900)
  }
  created () {
    this.getData()
  }
  getData () {
    (this as any).$axios.get('/api/comment/1/')
      .then((res:any) => {
        if (res.status === 200) {
          console.log(res)
          if (res.data.length !== 0) {
            res.data.contents.map((item:any) => {
              item.date = commentDate(item.date)
            })
            this.contents = res.data.contents
          }
        }
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
  canDelete (id:string) {
    return (localStorage.getItem('userId') && localStorage.getItem('userId') === id)
  }
  onDelete (id: string) {
    (this as any).$axios.delete(`/api/comment/${id}/`)
      .then((res:any) => this.getData())
      .catch((err:any) => {
        this.errorMsg = err.response.data.message
        this.showLayout()
      })
  }
  onLikeClick (id: string) {
    (this as any).$axios.post(`/api/comment/like/${id}/`)
      .then((res:any) => this.getData())
      .catch((err:any) => {
        this.errorMsg = err.response.data.message
        this.showLayout()
      })
  }
  onUnlikeClick (id: string) {
    (this as any).$axios.post(`/api/comment/unlike/${id}/`)
      .then((res:any) => this.getData())
      .catch((err:any) => {
        this.errorMsg = err.response.data.message
        this.showLayout()
      })
  }
  addComment () {
    if (this.formData.content === '') {
      this.errorMsg = '发送热评不能为空'
      this.showLayout()
      return null
    }
    (this as any).$axios.post('/api/comment/', this.formData)
      .then((res:any) => {
        if (res.status === 200) {
          this.cancelInput()
          this.getData()
        }
      })
      .catch((err:any) => {
        this.errorMsg = err.response.data.message
        this.showLayout()
      })
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
    display: block;
    animation: appear .5s ease;
  }
  @keyframes appear {
    0% {top: 100vh;}
    100% {top: 0;}
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
  .input-comment .input-comment-header .right-button button {
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
