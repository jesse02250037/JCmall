<template>
  <div id="detailgoodsinfo" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goods: {
      type: Object
    },
  },
};
</script>

<style scoped>
#detailgoodsinfo{
  margin-top: 10px;
  color: #999;
  padding: 0 8px;
  border-bottom: 5px solid #f2f5f8;
}

.info-title{
  color: #222;
  margin-bottom: 10px;
}
.info-price .n-price{
  color: #ff8198;
  font-size: 24px;
}

.info-price .o-price{
  margin-left: 5px;
  font-size: 10px;
  text-decoration: line-through;
}

.info-price .discount{
  margin-left: 5px;
  color: #fff;
  font-size: 12px;
  background-color: #ff5777;
  border-radius: 8px;
  padding: 2px 2px;
  position: relative;
  top: -8px
}

.info-other{
  margin-top: 10px;
  font-size: 12px;
  display: flex;
  line-height: 20px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-service{
  font-size: 13px;
  display: flex;
  line-height: 60px;
  justify-content: space-between;
  color: #333;
}
.info-service img{
  width: 10px;
  height: 10px;
}

</style>
