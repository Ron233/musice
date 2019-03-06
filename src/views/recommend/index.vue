<template>
  <div class="recomment">
    <scroll :data='songList'>
    <div class="slider">
      <swiper :options="swiperOption" v-if='swiperData.slider'>
        <swiper-slide v-for="item in swiperData.slider" :key="item.picUrl">
          <div class="img-content">
            <img :src="item.picUrl" alt="">
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="contarit">
      <!-- <h3>
        电台
      </h3>
      <div class="radio_list">
        <div class="li" v-for="item in swiperData.radioList" :key="item.picUrl">
          <div class="img">
            <img :src="item.picUrl" alt="">
          </div>
          <div class="text">
            {{item.Ftitle}}
          </div>
        </div>
      </div> -->
        <h3>
          热门歌单
        </h3>
        
          <div class="hot_list">
            <div class="li" v-for="item in swiperData.songList" :key="item.picUrl">
              <div class="img-content">
                <img v-lazy="item.picUrl" width="100" height="100" alt="">
              </div>
              <div class="text">
                <div class="title">{{item.songListDesc}}</div>
                <div class="author">{{item.songListAuthor}}</div>
              </div>
            </div>
          </div>
        
    </div>
    </scroll>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getCommendApi, getRankingApi } from '@/api/recomment'
import Scroll from '@/components/scroll'

export default {
  data(){
    return{
       swiperOption: {
          // 所有的参数同 swiper 官方 api 参数
          autoplay: true,
          loop: true
        },
        swiperData: {

        },
        songList:null
    }
  },
  created () {
    this._getCommend()
  },
  mounted () {
    
  },
  methods: {
    _getCommend(){
      getCommendApi().then(res => {
        if(res.code === 0){
          this.swiperData = res.data
          this.songList = res.data.songList
          // Object.assign(this.swiper,res.data)
        }
      })
    }
  },
  components: {
    swiper,
    swiperSlide,
    Scroll
  },
  computed: {}
}
</script>
<style lang="stylus" scoped>
@import url("~/assets/css/variable.styl")

.recomment
  height 300px
  overflow hidden
  .slider
    height 150px
    width 100%
    overflow hidden
    .img-content
      height 100%
      width 100%
      img
        width 100%
        height 100%
  .contarit
    box-sizing border-box
    border-left 15px solid transparent
    border-right 15px solid transparent
    // height 500px
    h3
      text-align center
      height 45px
      line-height 45px
      color $color-them
    .radio_list
      display flex
      justify-content space-between
      .li
        width 48%
        img 
          width 100%
    .hot_list
      .li
        margin-bottom 10px
        display flex
        justify-content space-between
        flex-wrap wrap
        .img-content
          width 90px
          height 90px
          img 
            width 100%
            height 100%
        .text
          box-sizing border-box
          border 10px solid transparent
          flex 1
          display flex
          flex-direction column 
          justify-content space-between
          .title
            font-size $font-size-medium-x
          .author
            font-size $font-size-medium
</style>



