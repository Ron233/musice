<template>
  <div class="ranking">
    <div class="contarit">
      <div class="top_list" v-for="(item,key) in topList" :key="key">
        <div class="img_content">
          <img :src="item.picUrl" alt="">
        </div>
        <div class="text">
          <div class="text_title">{{item.topTitle}}</div>
          <div class="text_text" v-for="(itemChild,key) in item.songList" :key="key">
            {{itemChild.singername}}-{{itemChild.songname}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.ranking
  .contarit
    box-sizing border-box
    border-left 10px solid transparent
    border-right 10px solid transparent
    .top_list
      margin 5px 0
      display flex
      .img_content
        width 100px
        height 100px
        margin-right 10px
        img
          width 100%
          height 100%
      .text
        flex 1
        width 0px
        .text_text
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
</style>

<script>
import { getRankingApi } from '@/api/ranking'
export default {
  data(){
    return{
      topList:[]
    }
  },
  created () {
    this._getRanking()
  },
  methods: {
    _getRanking(){
      getRankingApi().then(res => {
        if(res.code===0){
          this.topList = res.data.topList
        }
      })
    }
  }
}
</script>
