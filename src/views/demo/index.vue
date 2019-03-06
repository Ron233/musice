<template>
  <div class="demo">
    <scroll>
      <ul>
        <li v-for="(item,key) in 100" :key="key">{{item}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../../components/scroll.vue'
export default {
  components: {
    Scroll
  }
}
</script>
<style lang="stylus" scoped>
.demo
  height 90vh
  background red
  overflow hidden
  ul 
    li
      height 45px
</style>

