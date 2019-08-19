<template>
  <div class="Team">
    <div class="theme">
      <h1>球队</h1>
    </div>
    <div class="swiper-container">
      <div class="swiper-pagination"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="logo">
            <img :src="require('@/assets/images/league/premierLeague.png')" alt=""/>
          </div>
          <div class="team-wrapper">
            <ul>
              <li><a href="/login">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Mancity.jpg')" alt=""/>
                </div>
                <p>曼城</p>
              </a>
              </li>
              <li><a href="/register">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Liverpool.jpg')" alt=""/>
                </div>
                <p>利物浦</p>
              </a>
              </li>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/TottenhamHotSpur.jpg')" alt=""/>
                </div>
                <p>热刺</p>
              </a>
              </li>
            </ul>
            <ul>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Arsenal.jpg')" alt=""/>
                </div>
                <p>阿森纳</p>
              </a>
              </li>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/ManUtd.jpg')" alt=""/>
                </div>
                <p>曼联</p>
              </a>
              </li>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Chelsea.jpg')" alt=""/>
                </div>
                <p>切尔西</p>
              </a>
              </li>
            </ul>
            <ul>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Everton.jpg')" alt=""/>
                </div>
                <p>埃弗顿</p>
              </a>
              </li>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Leichester.jpg')" alt=""/>
                </div>
                <p>莱斯特城</p>
              </a>
              </li>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Wolfhampton.jpg')" alt=""/>
                </div>
                <p>狼队</p>
              </a>
              </li>
            </ul>
            <ul>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Westham.jpg')" alt=""/>
                </div>
                <p>西汉姆联</p>
              </a>
              </li>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Watford.jpg')" alt=""/>
                </div>
                <p>沃特福德</p>
              </a>
              </li>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Southampton.jpg')" alt=""/>
                </div>
                <p>南安普顿</p>
              </a>
              </li>
            </ul>
            <ul>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/CrystalPalace.jpg')" alt=""/>
                </div>
                <p>水晶宫</p>
              </a>
              </li>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Burnley.jpg')" alt=""/>
                </div>
                <p>伯恩利</p>
              </a>
              </li>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/AFCBournemouth.jpg')" alt=""/>
                </div>
                <p>伯恩茅斯</p>
              </a>
              </li>
            </ul>
            <ul>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/AstonVilla.jpg')" alt=""/>
                </div>
                <p>阿斯顿维拉</p>
              </a>
              </li>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Norwich.jpg')" alt=""/>
                </div>
                <p>诺维奇</p>
              </a>
              </li>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/NewCastle.jpg')" alt=""/>
                </div>
                <p>纽卡斯尔联</p>
              </a>
              </li>
            </ul>
            <ul>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Brighton.jpg')" alt=""/>
                </div>
                <p>布莱顿</p>
              </a>
              </li>
              <li><a href="#">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Sheffield.jpg')" alt=""/>
                </div>
                <p>谢菲尔德联</p>
              </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logo">
            <img :src="require('@/assets/images/league/ChineseSuperLeague.png')" alt=""/>
          </div>
          <div>
            <p style="text-align: center;">暂无数据</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logo">
            <img :src="require('@/assets/images/league/Laliga.png')" alt=""/>
          </div>
          <div>
            <p style="text-align: center;">暂无数据</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logo">
            <img :src="require('@/assets/images/league/serieA.png')" alt=""/>
          </div>
          <div>
            <p style="text-align: center;">暂无数据</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
@Component({
  components: {

  }
})
export default class Team extends Vue {
  @Provide() swiperList: any = []
  mounted () {
    this.getData()
  }
  getData () {
    this.swiperList = [5, 6, 7, 8];
    setTimeout(function () {
      var mySwiper = new Swiper('.swiper-container', {
        loop: false,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }, 100)
  }
}
</script>

<style lang="scss" scoped>
  .swiper-wrapper .swiper-slide .logo {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-wrapper .swiper-slide .logo img {
    width: 3rem;
    height: 3rem;
  }
  .team-logo img {
    width: 2.6666666rem;
    height: 2.6666666rem;
  }
  ul {
    text-align: center;
    height: 3.733333rem;
    width: 100vw;
    margin-bottom: .4rem;
  }
  ul li {
    display: inline-block;
    width: 33.3%;
  }
  ul li a {
    display: inline-block;
  }
  ul li a p {
    font-size: .4266666rem;
    text-align: center;
  }
</style>
