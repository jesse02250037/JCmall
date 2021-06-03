<template>
<div id="cart">
  <!-- 顶部导航栏 -->
  <cart-nav-bar class="nav-bar"/>
  <!-- 购物车列表 -->
  <scroll class="content">
    <cart-list/>
  </scroll>
</div>
</template>

<script>
import CartList from './childcpn/CartList.vue'
import CartNavBar from './childcpn/CartNavBar'

import Scroll from 'components/common/scroll/Scroll.vue'


export default {
  name:'Cart',
  components:{
    CartNavBar,
    CartList,
    Scroll,
  }
}
</script>
<style scoped>
#cart{
  height: 100vh;
}

.content{
 height: calc(100% - 44px - 49px);
}

.nav-bar{
  position: relative;
  z-index: 999;
}
</style>