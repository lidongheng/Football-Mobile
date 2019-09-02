<template>
  <section>
    <div style="height: 10vh;width: 100vw; background: #ffffff;"> </div>
    <div class="footer">
      <ul>
        <li>
          <router-link to="/" tag="a">
            <span class="iconfont">&#xe608;</span>
            <p class="iconTitle">首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/team" tag="a">
            <span class="iconfont">&#xe69a;</span>
            <p class="iconTitle">球队</p>
          </router-link>
        </li>
        <li>
          <router-link to="/match" tag="a">
            <span class="iconfont">&#xe63f;</span>
            <p class="iconTitle">比赛</p>
          </router-link>
        </li>
        <li>
          <router-link to="/me" tag="a">
            <span class="iconfont">&#xe62a;</span>
            <p class="iconTitle">我</p>
          </router-link>
        </li>
      </ul>
    </div>
  </section>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {

  }
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
  @import url(../../public/css/font.css);
  .footer {
    height: 10vh;
    width: 100%;
    padding: .133333rem 0;
    border-top: 1px solid #c6c0b3;
    position: fixed;
    bottom: 0;
    background: #ffffff;
    z-index: 99999;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li {
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iconfont {
    font-size: 1rem;
  }
  .iconTitle {
    font-size: .42666666rem;
    text-align: center;
    margin-top: .1066666rem;
  }
  a {
    color: #37A2D8;
  }
</style>
