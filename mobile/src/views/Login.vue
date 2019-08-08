<template>
  <div class="login">
    <div class="title">
      <h1>欢迎登录</h1>
      <form>
        <div class="form-control">
          <input type="text" name="username" placeholder="邮箱地址">
        </div>
        <div class="form-control">
          <input type="password" name="password" placeholder="密码">
        </div>
        <div class="form-control">
          <button type="button" class="btn btn-primary">提交</button>
        </div>
      </form>
      <div class="register-title">
        <div class="hr"></div>
        <p>没有账号？注册一个</p>
      </div>
      <div class="form-control">
        <button type="button" class="btn btn-light" @click="goToRegister">注册</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {

  }
})
export default class Login extends Vue {
  goToRegister () {
    this.$router.push({ name: 'register' })
  }
}
</script>

<style lang="scss" scoped>
  .title h1 {
    margin: 1.49333rem 0.533333rem;
    font-size: .64rem;
    font-weight: 600;
    line-height: 1.1rem;
    height: 1.1rem;
  }
  input {
    width: 100%;
    height: 1.2533333rem;
    border-style:none;
    border-bottom-style:solid;
    border-bottom-width:thin;
    border-bottom-color:#ededed;
    font-size: .42666666rem;
    padding-left: .2rem;
  }
  .form-control {
    width: 80%;
    margin: 0 auto;
  }
  .register-title {
    width: 80%;
    margin: 0 auto;
    position: relative;
  }
  p:before {
    content: "";
    border: .013333rem solid rgba(0,0,0,.12);
    position: absolute;
    top: 50%;
    left: 10%;
    width: 1.6rem;
  }
  p:after {
    content: "";
    border: .013333rem solid rgba(0,0,0,.12);
    position: absolute;
    top: 50%;
    right: 10%;
    width: 1.6rem;
  }
  p {
    font-size: .32rem;
    color: #89c7ff;
    text-align: center;
    background: #fff;
  }

</style>
