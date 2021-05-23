<template>
  <div>
    <swiper class="detail-swipe" :autoplay="2000" indicator-color="white">
      <swiper-item v-for="item in topImage" :key="item.index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style scoped>
.detail-swipe {
  height: 300px;
}
.detail-swipe img {
  width: 100%;
}
</style>
