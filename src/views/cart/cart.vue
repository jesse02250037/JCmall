<template>
<div id="cart">
  <!-- 顶部导航栏 -->
  <cart-nav-bar/>
</div>
</template>

<script>
import CartNavBar from './childcpn/CartNavBar'
export default {
  name:'Cart',
  components:{
    CartNavBar
  }
}
</script>
<style scoped>

</style>