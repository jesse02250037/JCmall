<template>
  <div class="cart-list">
    <cart-list-item v-for="(item,index) in $store.state.cartList" :key="index" :product='item'/>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
  name: "CartList",
  components:{
    CartListItem
  }
};
</script>

<style scoped>
</style>