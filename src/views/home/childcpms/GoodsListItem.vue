<template>
  <div class="goodsItem" @click="goToDetail">
    <img :src="showImage" alt="" @load="imgLoad" />
    <div class="goodsInfo">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="star"
        ><img src="~assets/img/common/collect.svg" alt=""
      /></span>
      <span class="cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    goToDetail() {
      this.$router.push({
        path: "/detail",
        query: {
          iid: this.goodsItem.iid,
        },
      });
    },
    imgLoad() {
      if (this.$route.path.indexOf("/home")) {
        this.$bus.$emit("HomeImageLoad");
      }
      if (this.$route.path.indexOf("/detail")) {
        this.$bus.$emit("DetailImageLoad");
      }
    },
  },
};
</script>
<style scoped>
.goodsItem {
  padding-bottom: 40px;
  position: relative;
  margin-bottom: 10px;
}
.goodsItem img {
  width: 100%;
}

.goodsInfo {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  font-size: 12px;
  text-align: center;
  overflow: hidden;
}
.goodsInfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
}

.goodsInfo .price {
  color: #ff5777;
  position: relative;
  margin-right: 10px;
}

.goodsInfo .star img {
  width: 14px;
  height: 14px;
}
</style>
