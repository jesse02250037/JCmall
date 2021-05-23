<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>首页</template>
    </nav-bar>
    <tab-bar-control
      :tags="['流行', '新品', '精选']"
      @tabClick="tabClick"
      class="tabcontrol"
      ref="tabcontrol1"
      v-show="isTabShow"
    ></tab-bar-control>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @getPosition="getPosition"
      :pull-up-load="true"
      @pullingUp="loadmore"
    >
      <!-- 首页的轮播图 -->
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <!-- 推荐 -->
      <home-recommends :recommends="recommends"></home-recommends>
      <!-- 首页中间图片 -->
      <home-feature></home-feature>
      <!-- 控制器 -->
      <tab-bar-control
        :tags="['流行', '新品', '精选']"
        @tabClick="tabClick"
        ref="tabcontrol2"
      ></tab-bar-control>
      <!-- 商品信息 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <div @click="backClick">
      <back-top v-show="isShow"></back-top>
    </div>
  </div>
</template>

<script>
import HomeSwiper from "./childcpms/HomeSwiper";
import HomeRecommends from "./childcpms/HomeRecommends";
import HomeFeature from "./childcpms/HomeFeature";
import TabBarControl from "./childcpms/TabBarControl";

import NavBar from "components/common/navbar/NavBar";
import GoodsList from "./childcpms/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      tabControlTop: 0,
      isTabShow: false,
      saveY:0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    NavBar,
    GoodsList,
    Scroll,
    BackTop,
    TabBarControl,
    HomeSwiper,
    HomeRecommends,
    HomeFeature,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 事件监听方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },

    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    getPosition(position) {
      this.isShow = (-position.y) > 1000;

      // 判断是否吸顶
      this.isTabShow = (-position.y) > this.tabControlTop;
    },
    loadmore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.finishPullUp();
      this.$refs.scroll.scroll.refresh();
    },
    // 获取tab-bar-control的offsettop，根据轮播图的图片加载完成之后再获取值
    swiperImgLoad() {
      this.tabControlTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>


<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
}
.tabcontrol {
  position: relative;
  z-index: 99;
}
.home-nav {
  background-color: #ff8198;
  color: #fff;
  position: relative;
  z-index: 999;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>
