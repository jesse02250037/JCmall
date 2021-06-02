<template>
  <div v-if="Object.keys(goodsImage).length !== 0" class="DetailGoodsImage">
    <div class="info-desc">
      <div class="info-desc-start"></div>
      <div class="info-desc-text clearfix">{{goodsImage.desc}}</div>
      <div class="info-desc-end"></div>
    </div>
    <div class="goods-key">{{goodsImage.detailImage[0].key}}</div>
    <ul class="detail-img">
      <li v-for="(item,index) in goodsImage.detailImage[0].list" :key="index">
        <img :src="item" alt="" @load="imgLoad">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsImage",
  props:{
    goodsImage:{
      type:Object
    }
  },
  methods: {
    imgLoad(){
      this.$emit('imgLoad')
    }
  },
};
</script>
<style scoped>
.DetailGoodsImage{
  font-size: 13px;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc{
  padding:10px 15px;
}
.info-desc-start{
  height: 1px;
  width: 90px;
  background-color: #a3a3a5;
  float: left;
  position: relative;
}
.info-desc-end{
  height: 1px;
  width: 90px;
  background-color: #a3a3a5;
  float: right;
  position: relative;
}

.info-desc-text{
  margin: 20px 0;
}

.info-desc-start::before,.info-desc-end::after{
  content: '';
  width: 10px;
  height: 10px;
  background-color: #000;
  position: absolute;
  bottom: 0;
}

.goods-key{
  padding: 0 15px;
  margin-bottom: 10px;
}

.detail-img img{
  width: 100%;
}
</style>