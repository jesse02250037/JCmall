<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in tags"
      :key="item.index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index)
    },


  },
  props: {
    tags: Array,
    default() {
      return [];
    },
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
  font-size: 14px;
  background-color: #fff;
  justify-content: space-around;
}

.tab-control-item {
  height: 40px;
  line-height: 40px;
}

span {
  padding: 5px;
}

.active {
  color: #ff5777;
}

.active span {
  border-bottom: 3px solid #ff5777;
}
</style>
