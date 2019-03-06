<template>
  <div class="search">
    <div class="search_input">
      <form action="#">
        <input type="text" placeholder="搜索歌曲、歌单、专辑">
      </form>
    </div>
    <div class="contarit">
      <div class="hot_search">
        <div class="title">热门搜索</div>
        <div class="hot_search_list">
          <ul>
            <li v-for="(items, key) in hotList" :key="key" @click="hotListCheck(items.n)">
              <span>{{items.k}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.search
  background $color-background
  .search_input
    box-sizing border-box
    border 10px solid  $color-highlight-background
    form
      background none
      input
        width 100%
        background none
        height 30px
        outline none
        background $color-dialog-background
  .contarit
    box-sizing border-box
    border-left 10px solid transparent
    border-right 10px solid transparent
    .hot_search
      .title
        font-size $font-size-medium-x
        height 45px
        line-height 45px
      .hot_search_list
        ul
          width 100%
          display flex
          flex-wrap wrap
          li
            height 30px
            line-height 30px
            border 1px solid $color-dialog-background
            border-radius 15px
            margin 0 10px 10px 0
            font-size $font-size-medium
            span 
              padding 10px

</style>

<script>
import { getHotSearchApi } from '@/api/search'
export default {
  data(){
    return{
      hotList:[]
    }
  },
  created () {
    this._getHotSearch()
  },
  methods: {
    _getHotSearch(){
      getHotSearchApi().then(res=>{
        if(res.code===0){
          console.log(res.data.hotkey)
          this.hotList = res.data.hotkey.slice(0,10)
        }
      })
    },
    hotListCheck(n){

    }
  }
}
</script>

