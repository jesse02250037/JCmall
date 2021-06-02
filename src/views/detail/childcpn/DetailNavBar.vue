<template>
  <div class="detailNavBar">
    <nav-bar>
      <template v-slot:center>
        <ul class="title">
          <li v-for="(item,index) in title"
          :key="index"
          :class="{isActive:currentIndex===index}"
          @click="titleClick(index)"
          >{{ item }}</li>
        </ul>
      </template>
      <template v-slot:left>
        <div class="back" @click="back">
          <img src="~assets/img/common/back.svg" alt="" />
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index){
      this.currentIndex=index
      this.$emit('NavClick',index)
    },
    back(){
      this.$router.back()
    }
  },
};
</script>
<style scoped>
ul li {
  list-style: none;
}

.title {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
}

.back{
  margin-top: 5px;
}

.isActive{
  color: #ff5777;
}
</style>
