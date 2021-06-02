<template>
  <div class="detail-goods-param" v-if="Object.keys(goodsParams).length !== 0">
    <table
      class="info-size"
      v-for="(table, index) in goodsParams.sizes"
      :key="index"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>

    <table class="detail-info">
      <tr v-for="(item, index) in goodsParams.infos" :key="index">
        <td class="info-key">{{ item.key }}</td>
        <td class="info-text">{{ item.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="goodsParams.image.length !== 0">
      <img :src="goodsParams.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParam",
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.info-size {
  border-bottom: 5px solid #f2f5f8;
  font-size: 14px;
  padding: 10px 10px;
}

.detail-goods-param table {
  width: 100%;
  font-size: 14px;
  padding: 10px 10px;
}

.detail-goods-param table tr {
  height: 42px;
}
.detail-goods-param table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-key {
  width: 70px;
}

.info-text {
  color: #ff8198;
}

.info-img img {
  width: 100%;
}
.detail-info{
  border-bottom: 5px solid #f2f5f8;
}

.info-img{
  border-bottom: 5px solid #f2f5f8;
}
</style>