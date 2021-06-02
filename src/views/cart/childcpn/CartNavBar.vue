<template>
<div class="nav-bar">
  <nav-bar>
    <template v-slot:center>购物车({{goodsCount}})</template>
  </nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:'CartNavBar',
  components:{
    NavBar
  },
  computed:{
    goodsCount(){
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: #ff8198;
  color: #fff;
}
</style>