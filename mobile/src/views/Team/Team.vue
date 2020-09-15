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
              <li><router-link to="/team/Mancity/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Mancity.jpg')" alt=""/>
                </div>
                <p>曼城</p>
              </router-link>
              </li>
              <li><router-link to="/team/Liverpool/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Liverpool.jpg')" alt=""/>
                </div>
                <p>利物浦</p>
              </router-link>
              </li>
              <li><router-link to="/team/TottenhamHotSpur/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/TottenhamHotSpur.jpg')" alt=""/>
                </div>
                <p>热刺</p>
              </router-link>
              </li>
            </ul>
            <ul>
              <li><router-link to="/team/Arsenal/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Arsenal.jpg')" alt=""/>
                </div>
                <p>阿森纳</p>
              </router-link>
              </li>
              <li><router-link to="/team/ManUtd/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/ManUtd.jpg')" alt=""/>
                </div>
                <p>曼联</p>
              </router-link>
              </li>
              <li><router-link to="/team/Chelsea/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Chelsea.jpg')" alt=""/>
                </div>
                <p>切尔西</p>
              </router-link>
              </li>
            </ul>
            <ul>
              <li><router-link to="/team/Everton/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Everton.jpg')" alt=""/>
                </div>
                <p>埃弗顿</p>
              </router-link>
              </li>
              <li><router-link to="/team/Leichester" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Leichester.jpg')" alt=""/>
                </div>
                <p>莱斯特城</p>
              </router-link>
              </li>
              <li><router-link to="/team/Wolfhampton/">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Wolfhampton.jpg')" alt=""/>
                </div>
                <p>狼队</p>
              </router-link>
              </li>
            </ul>
            <ul>
              <li><router-link to="/team/Westham/">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Westham.jpg')" alt=""/>
                </div>
                <p>西汉姆联</p>
              </router-link>
              </li>
              <li><router-link to="/team/Southampton/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Southampton.jpg')" alt=""/>
                </div>
                <p>南安普顿</p>
              </router-link>
              </li>
              <li><router-link to="/team/CrystalPalace/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/CrystalPalace.jpg')" alt=""/>
                </div>
                <p>水晶宫</p>
              </router-link>
              </li>
            </ul>
            <ul>
              <li><router-link to="/team/Burnley/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Burnley.jpg')" alt=""/>
                </div>
                <p>伯恩利</p>
              </router-link>
              </li>
              <li><router-link to="/team/AstonVilla/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/AstonVilla.jpg')" alt=""/>
                </div>
                <p>阿斯顿维拉</p>
              </router-link>
              </li>
              <li><router-link to="/team/NewCastle/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/NewCastle.jpg')" alt=""/>
                </div>
                <p>纽卡斯尔联</p>
              </router-link>
              </li>
            </ul>
            <ul>
              <li><router-link to="/team/Fullham/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Fullham.png')" alt=""/>
                </div>
                <p>富勒姆</p>
              </router-link>
              </li>
              <li><router-link to="/team/LeedsUnit/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/LeedsUnit.png')" alt=""/>
                </div>
                <p>利兹联</p>
              </router-link>
              </li>
              <li><router-link to="/team/WestBromwich/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/WestBromwich.png')" alt=""/>
                </div>
                <p>西布朗维奇</p>
              </router-link>
              </li>
            </ul>
            <ul>
              <li><router-link to="/team/Brighton/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Brighton.jpg')" alt=""/>
                </div>
                <p>布莱顿</p>
              </router-link>
              </li>
              <li><router-link to="/team/Sheffield/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Sheffield.jpg')" alt=""/>
                </div>
                <p>谢菲尔德联</p>
              </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logo">
            <img :src="require('@/assets/images/league/Laliga.png')" alt=""/>
          </div>
          <div class="team-wrapper">
            <ul>
              <li><router-link to="/team/Espanyol/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/Laliga/Espanyol.jpg')" alt=""/>
                </div>
                <p>西班牙人</p>
              </router-link>
              </li>
              <li><router-link to="/team/Granada/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/Laliga/Granada.jpg')" alt=""/>
                </div>
                <p>格拉纳达</p>
              </router-link>
              </li>
              <li><router-link to="/team/RealSociedad/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/Laliga/RealSociedad.jpg')" alt=""/>
                </div>
                <p>皇家社会</p>
              </router-link>
              </li>
              <li><router-link to="/team/Valencia/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/Laliga/Valencia.jpg')" alt=""/>
                </div>
                <p>瓦伦西亚</p>
              </router-link>
              </li>
              <li><router-link to="/team/AtleticoMadrid/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/Laliga/AtleticoMadrid.jpg')" alt=""/>
                </div>
                <p>马德里竞技</p>
              </router-link>
              </li>
              <li><router-link to="/team/Barcelona/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/Laliga/Barcelona.jpg')" alt=""/>
                </div>
                <p>巴塞罗那</p>
              </router-link>
              </li>
              <li><router-link to="/team/RealMadrid/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/Laliga/RealMadrid.jpg')" alt=""/>
                </div>
                <p>皇家马德里</p>
              </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logo">
            <img :src="require('@/assets/images/league/Bundesliga.png')" alt=""/>
          </div>
          <div>
            <div class="team-wrapper">
              <ul>
                <li><router-link to="/team/FrankFurt/" tag="a">
                  <div class="team-logo">
                    <img :src="require('@/assets/images/Bundesliga/FrankFurt.jpg')" alt=""/>
                  </div>
                  <p>法兰克福</p>
                </router-link>
                </li>
                <li><router-link to="/team/Dusseldorf/" tag="a">
                  <div class="team-logo">
                    <img :src="require('@/assets/images/Bundesliga/Dusseldorf.jpg')" alt=""/>
                  </div>
                  <p>杜塞尔多夫</p>
                </router-link>
                </li>
                <li><router-link to="/team/Dortmund/" tag="a">
                  <div class="team-logo">
                    <img :src="require('@/assets/images/Bundesliga/Dortmund.jpg')" alt=""/>
                  </div>
                  <p>多特蒙德</p>
                </router-link>
                </li>
                <li><router-link to="/team/RBLeipzig/" tag="a">
                  <div class="team-logo">
                    <img :src="require('@/assets/images/Bundesliga/RBLeipzig.jpg')" alt=""/>
                  </div>
                  <p>莱比锡红牛</p>
                </router-link>
                </li>
                <li><router-link to="/team/Bayern/" tag="a">
                  <div class="team-logo">
                    <img :src="require('@/assets/images/Bundesliga/Bayern.jpg')" alt=""/>
                  </div>
                  <p>拜仁</p>
                </router-link>
                </li>
                <li><router-link to="/team/Padeborn/" tag="a">
                  <div class="team-logo">
                    <img :src="require('@/assets/images/Bundesliga/Paderborn.jpg')" alt=""/>
                  </div>
                  <p>帕德博恩</p>
                </router-link>
                </li>
                <li>
                  <router-link to="/team/BerlinUnion/" tag="a">
                    <div class="team-logo">
                      <img :src="require('@/assets/images/Bundesliga/BerlinUnion.jpg')" alt=""/>
                    </div>
                    <p>柏林联合</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/team/Bremen/" tag="a">
                    <div class="team-logo">
                      <img :src="require('@/assets/images/Bundesliga/Bremen.jpg')" alt=""/>
                    </div>
                    <p>云达不来梅</p>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logo">
            <img :src="require('@/assets/images/league/serieA.png')" alt=""/>
          </div>
          <div class="team-wrapper">
            <ul>
              <li><router-link to="/team/Atalanta/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/SerieA/Atalanta.jpg')" alt=""/>
                </div>
                <p>亚特兰大</p>
              </router-link>
              </li>
              <li><router-link to="/team/Brescia/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/SerieA/Brescia.jpg')" alt=""/>
                </div>
                <p>布雷西亚</p>
              </router-link>
              </li>
              <li><router-link to="/team/Napoli/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/SerieA/Napoli.jpg')" alt=""/>
                </div>
                <p>那不勒斯</p>
              </router-link>
              </li>
              <li><router-link to="/team/Juventus/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/SerieA/Juventus.jpg')" alt=""/>
                </div>
                <p>尤文图斯</p>
              </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logo">
            <img :src="require('@/assets/images/league/EUROPA.jpg')" alt=""/>
          </div>
          <div class="team-wrapper">
            <ul>
              <li><router-link to="/team/PSG/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/Ligue1/PSG.jpg')" alt=""/>
                </div>
                <p>巴黎圣日耳曼</p>
              </router-link>
              </li>
              <li><router-link to="/team/Olympiacos/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/EUROPA/Olympiacos.png')" alt=""/>
                </div>
                <p>奥林匹亚科斯</p>
              </router-link>
              </li>
              <li><router-link to="/team/Brugge/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/EUROPA/Brugge.jpg')" alt=""/>
                </div>
                <p>布鲁日</p>
              </router-link>
              </li>
              <li><router-link to="/team/Lyon/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/Ligue1/Lyon.jpg')" alt=""/>
                </div>
                <p>里昂</p>
              </router-link>
              </li>
              <li><router-link to="/team/Tambov/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/EUROPA/Tambov.jpg')" alt=""/>
                </div>
                <p>坦波夫</p>
              </router-link>
              </li>
              <li><router-link to="/team/KrylyaSovetov/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/EUROPA/KrylyaSovetov.jpg')" alt=""/>
                </div>
                <p>苏维埃之翼</p>
              </router-link>
              </li>
              <li><router-link to="/team/Watford/">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Watford.jpg')" alt=""/>
                </div>
                <p>沃特福德</p>
              </router-link>
              </li>
              <li><router-link to="/team/Norwich/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/Norwich.jpg')" alt=""/>
                </div>
                <p>诺维奇</p>
              </router-link>
              </li>
              <li><router-link to="/team/AFCBournemouth/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/premierLeague/AFCBournemouth.jpg')" alt=""/>
                </div>
                <p>伯恩茅斯</p>
              </router-link>
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
            <img :src="require('@/assets/images/league/AFC.jpg')" alt=""/>
          </div>
          <div class="team-wrapper">
            <ul>
              <li><router-link to="/team/SydneyFC/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/AFC/SydneyFC.jpg')" alt=""/>
                </div>
                <p>悉尼FC</p>
              </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logo">
            <img :src="require('@/assets/images/league/KLeague.jpg')" alt=""/>
          </div>
          <div class="team-wrapper">
            <ul>
              <li><router-link to="/team/GangwonFC/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/KLeague/GangwonFC.jpg')" alt=""/>
                </div>
                <p>江原FC</p>
              </router-link>
              </li>
              <li><router-link to="/team/SangjuSangmu/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/KLeague/SangjuSangmu.png')" alt=""/>
                </div>
                <p>尚州尚武</p>
              </router-link>
              </li>
              <li><router-link to="/team/Samsung/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/KLeague/Samsung.png')" alt=""/>
                </div>
                <p>水原三星</p>
              </router-link>
              </li>
              <li><router-link to="/team/UlsanHyundaiFC/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/KLeague/UlsanHyundai.jpg')" alt=""/>
                </div>
                <p>蔚山现代</p>
              </router-link>
              </li>
              <li><router-link to="/team/Posco/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/KLeague/Posco.png')" alt=""/>
                </div>
                <p>浦项制铁</p>
              </router-link>
              </li>
              <li><router-link to="/team/JeonbukHyundai/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/KLeague/JeonbukHyundai.jpg')" alt=""/>
                </div>
                <p>全北现代</p>
              </router-link>
              </li>
              <li><router-link to="/team/SeongnamFC/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/KLeague/SeongnamFC.jpg')" alt=""/>
                </div>
                <p>城南FC</p>
              </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="logo">
            <img :src="require('@/assets/images/league/JLeague.png')" alt=""/>
          </div>
          <div class="team-wrapper">
            <ul>
              <li><router-link to="/team/Yokohama/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/JLeague/Yokohama.png')" alt=""/>
                </div>
                <p>横滨水手</p>
              </router-link>
              </li>
              <li><router-link to="/team/VisselKobe/" tag="a">
                <div class="team-logo">
                  <img :src="require('@/assets/images/JLeague/VisselKobe.jpg')" alt=""/>
                </div>
                <p>神户胜利船</p>
              </router-link>
              </li>
            </ul>
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
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {

  }
})
export default class Team extends Vue {
  @Action('setTitle') setTitle: any
  @Provide() swiperList: any = []
  created () {
    this.setTitle('球队')
  }
  mounted () {
    this.getData()
  }
  getData () {
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
