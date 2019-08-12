<template>
  <div class="register">
    <div class="title">
      <h1>欢迎注册</h1>
      <form>
        <InputItem type="text" name="username" placeholder="请输入用户名"></InputItem>
        <InputItem type="email" name="email" placeholder="请输入邮箱地址"></InputItem>
        <InputItem type="password" name="password" placeholder="请输入密码"></InputItem>
        <InputItem type="password" name="password2" placeholder="请再次输入密码"></InputItem>
        <div class="form-control">
          <button type="button" class="btn btn-primary">立即注册</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import InputItem from '../components/InputItem.vue'
@Component({
  components: {
    InputItem
  }
})
export default class Register extends Vue {}
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
    display: flex;
    justify-content: center;
    align-items: center;
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
