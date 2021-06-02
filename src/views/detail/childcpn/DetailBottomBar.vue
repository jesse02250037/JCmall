<template>
  <div class="bottom-bar">
    <div class="bar-left bar-item">
      <div class="bar-left-item">
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div class="bar-left-item">
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div class="bar-left-item">
        <i class="icon like"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right bar-item">
      <div class="bar-right-item yellow" @click="addGoods">加入购物车</div>
      <div class="bar-right-item pink">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addGoods(){
      this.$emit('addGoods')
    }
  },
};
</script>
<style scoped>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  font-size: 13px;
}
.bar-item{
  flex: 1;
}
.bar-left-item {
  flex: 1;
}

.bar-left {
  display: flex;
}
.bar-right {
  display: flex;
  line-height: 49px;
}
.bar-left .icon {
  display: block;
  background-image: url("~assets/img/detail/detail_bottom.png");
  background-size: 100%;
  width: 22px;
  height: 22px;
  margin: 7px auto 3px;
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-right-item {
  flex: 1;
}
.yellow {
  background-color: #ffe817;
}
.pink {
  background-color: #f69;
}
</style>