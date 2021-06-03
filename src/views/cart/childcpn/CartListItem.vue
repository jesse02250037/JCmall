<template>
  <div class="item">
    <div class="item-select">
      <check-button :is-checked='product.checked' @click.native="checkClick"/>
    </div>
    <div class="item-image">
      <img :src="product.image" alt="" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="item-bottom">
        <div class="item-price">¥{{ product.price }}</div>
        <div class="item-count">X{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/CheckButton.vue'
export default {
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components:{
    CheckButton
  },
  methods: {
    checkClick(){
      this.product.checked=!this.product.checked
    }
  },
};
</script>
<style scoped>
.item {
  width: 100%;
  display: flex;
  font-size: 10px;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
 .item-select {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

.item-image img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
  margin-left: 10px;
}

.item-bottom {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.item-price{
  float: left;
}
.item-count{
  float:right;
}
.item-bottom .item-price {
  color: orangered;
}

.item-title,
.item-desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
</style>