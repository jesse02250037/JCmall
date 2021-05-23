<template>
  <div class="recommends-view">
    <div v-for="item in recommends" :key="item.index" class="recommends-view-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommends",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommends-view {
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 14px;
  border-bottom: 10px #eee solid;
}

.recommends-view-item {
  flex: 1;
  padding: 10px 0 25px;
}

.recommends-view-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 5px;
}
</style>
