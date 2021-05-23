<template>
  <div id="detail">
    <!-- 顶部导航栏 -->
    <detail-nav-bar/>
    <!-- 轮播图 -->
    <detail-swiper :topImage='topImage'/>
    <!-- 商品信息 -->
    <detail-goods-info :goods='goods'/>
    <!-- 店铺信息 -->
    <detail-shop-info :shop='shop'/>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
import DetailNavBar from './childcpn/DetailNavBar'
import DetailSwiper from './childcpn/DetailSwiper'
import DetailGoodsInfo from './childcpn/DetailGoodsInfo.vue';
import DetailShopInfo from './childcpn/DetailShopInfo'


import {getDetail,Goods,Shop} from 'network/detail.js'
export default {
  name: "Detail",
  data() {
    return {
      iid:null,
      topImage:[],
      goods:{},
      shop:{}
    }
  },
  created() {
    this.iid=this.$route.query.iid
    getDetail(this.iid).then(res=>{
      console.log(res);
      const data=res.result
      this.topImage=data.itemInfo.topImages
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop=new Shop(data.shopInfo)
    })

  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo
  }
};
</script>

<style scoped>
</style>
