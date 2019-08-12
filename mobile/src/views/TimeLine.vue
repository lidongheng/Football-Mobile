<template>
  <div class="timeLine">
    <ul>
      <li>
        <div class="left"></div>
        <div class="center">
          03-10
        </div>
        <div class="right">
          感谢您在京东购物，欢迎您再次光临！感谢您在京东购物，欢迎您再次光临！
          感谢您在京东购物，欢迎您再次光临！感谢您在京东购物，欢迎您再次光临！
          感谢您在京东购物，欢迎您再次光临！感谢您在京东购物，欢迎您再次光临！
          感谢您在京东购物，欢迎您再次光临！感谢您在京东购物，欢迎您再次光临！
        </div>
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
export default class TimeLine extends Vue {}
</script>

<style lang="scss" scoped>
  .timeLine {
    font-size: .426666rem;
  }
  ul {
    white-space: nowrap;
  }
  li {
    border-left: 1px solid #89c7ff;
    margin-left: .2666666rem;
  }
  .left {
    position: relative;
    left: -.2rem;
    width: 5%;
    min-width: .4rem;
    max-width: .4rem;
    height: .4rem;
    background-color: #fff;
    border-radius: 50%;
    border: .1066666rem solid #89c7ff;
  }
  .center {
    width: 20%;
    min-width: 1.466666rem;
  }
  .right {
    width: 75%;
    white-space: normal;
  }
  li div {
    display: inline-block;
    vertical-align: top;
  }
</style>
