<template>
  <div class="homeswiper">
    <swiper>
      <swiper-item v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  data() {
    return {
    };
  },
  props: {
    banners: {
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
  methods: {
    swiperImgLoad() {
      this.$emit("swiperImgLoad");
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
/* .homeswiper{
  padding-top: 44px;
} */
</style>
