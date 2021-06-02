<template>
  <div id="detail">
    <!-- 顶部导航栏 -->
    <detail-nav-bar class="detail-nav" @NavClick='NavClick' ref="navbar"/>
    <scroll class="content" ref="scroll" :probe-type='3' @getPosition='getPosition'>
      <!-- 轮播图 -->
      <detail-swiper :topImage="topImage"/>
      <!-- 商品信息 -->
      <detail-goods-info :goods="goods"/>
      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop" />
      <!-- 商品图片 -->
      <detail-goods-image :goods-image='goodsImage'  @imgLoad='imgLoad'/>
      <!-- 商品参数 -->
      <detail-goods-param ref="param" :goods-params='paramInfo'/>
      <!-- 评论信息 -->
      <detail-comment-info ref="comment" :comment-info='commentInfo'/>
      <!-- 推荐商品 -->
      <goods-list ref="recommend" :goods='goodsRecommend' @imgLoad='imgLoad' />
    </scroll>
    <detail-bottom-bar @addGoods='addGoods'/>
     <div @click="backClick">
      <back-top v-show="isShow"></back-top>
    </div>
  </div>
</template>

<script>
import DetailNavBar from "./childcpn/DetailNavBar";
import DetailSwiper from "./childcpn/DetailSwiper";
import DetailGoodsInfo from "./childcpn/DetailGoodsInfo.vue";
import DetailShopInfo from "./childcpn/DetailShopInfo";
import DetailGoodsImage from './childcpn/DetailGoodsImage.vue';
import DetailGoodsParam from './childcpn/DetailGoodsParam.vue';
import DetailCommentInfo from './childcpn/DetailCommentInfo.vue';
import DetailBottomBar from './childcpn/DetailBottomBar'
import GoodsList from '../home/childcpms/GoodsList.vue';

import Scroll from "components/common/scroll/Scroll";
import BackTop from 'components/content/BackTop.vue'

import { getDetail, Goods, Shop, GoodsParam , getRecommends} from "network/detail.js";
import {debounce} from '../../common/debounce'

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      goodsImage:{},
      paramInfo:{},
      commentInfo:{},
      goodsRecommend:[],
      themeTopYs:[0,1000,1500,2000],
      getThemeY:null,
      currentIndex:null,
      isShow:false
    };
  },
  created() {
    this.iid = this.$route.query.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;
      this.topImage = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.goodsImage=data.detailInfo;
      this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule);
      if(data.rate.cRate !== 0)
      this.commentInfo=data.rate.list[0]
    });
    getRecommends().then(res=>{
      this.goodsRecommend=res.data.list
    })
    
    this.$bus.$on("DetailImageLoad", () => {
      this.$refs.scroll.scroll.refresh()
    });
    this.getThemeY=debounce(()=>{
      this.themeTopYs=[];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)  
    },500)
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailGoodsImage,
    DetailGoodsParam,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
    BackTop,
  },
  methods: {
    imgLoad(){
      this.$refs.scroll.scroll.refresh()
      this.getThemeY()
    },
    NavClick(index){
      this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],1000)
    },
    getPosition(position){
      const positionY=-position.y;
      let length=this.themeTopYs.length;
      for(let i=0;i<this.themeTopYs.length;i++){
        if(this.currentIndex !== i &&((i<length-1 && positionY>this.themeTopYs[i] && positionY<this.themeTopYs[i+1])||
        (i == length-1 && positionY>this.themeTopYs[i]))){
          this.currentIndex=i
          this.$refs.navbar.currentIndex=this.currentIndex
        }
      }
      this.isShow = -position.y > 1000;
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    addGoods(){
      const product={}
      product.image=this.topImage[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc;
      product.iid=this.iid
      product.price=this.goods.realPrice
    }
  },
};
</script>

<style scoped>
/* 隐藏底部的导航栏 */
#detail {
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
}

.content{
  height: calc(100% - 44px - 49px);
}

.detail-nav{
  position: relative;
  z-index: 99;
  background-color: #fff;
}

</style>
