<template>
  <!-- 顶部logo加名字 -->
  <div class="shopInfo">
    <div class="top">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <!-- 中间信息 -->
    <div class="middle">
      <div class="middle-left-item">
        <div class="sell-item">
          <div class="sells-count">
            {{ sellsCount }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="all-goods">
          <div class="all-goods-count">{{ shop.goodsCount }}</div>
          <div class="all-goods-text">全部宝贝</div>
        </div>
      </div>

      <!-- 右边评价 -->
      <div class="score">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="green" :class="{ isRed: item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ gao: item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
      <!-- 最下方的按钮 -->
    </div>
    <div class="btn">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
    },
  },
  computed: {
    sellsCount() {
      if (this.shop.sells < 10000) return this.shop.sells;
      return (this.shop.sells / 10000).toFixed(1) + "万";
    },
  },
};
</script>
<style scoped>
.shopInfo {
  padding: 25px 8px 10px;
  border-bottom: 5px solid #f2f5f8;
  position: relative;
}
.top {
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #333;
}
.top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.middle {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: #333;
}
.middle-left-item {
  display: flex;
  justify-content: space-between;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding-right: 20px;
}

.middle-left-item .sell-item {
  margin-right: 20px;
}

.score table {
  width: 120px;
  color: #333;
  text-align: center;
}

.green {
  color: #5ea732;
}
.better span {
  color: #fff;
  background-color: #5ea732;
}
.score .isRed {
  color: red;
}

.score .gao span {
  background-color: red;
}

.btn {
  background-color: #f2f5f8;
  width: 100px;
  height: 25px;
  text-align: center;
  border-radius: 10px;
  margin: 15px auto 0px;
}

.enter-shop {
  font-size: 12px;
  line-height: 25px;
}
</style>
