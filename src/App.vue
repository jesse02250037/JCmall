<template>
  <div id="nav">
    <keep-alive exclude="Detail" include="Home">
    <router-view></router-view>
    </keep-alive>
    <tab-bar-content></tab-bar-content>
  </div>
</template>


<script>
import TabBarContent from "components/content/TabBarContent";

export default {
  name: "App",
  components: {
    TabBarContent,
  },
};
</script>

<style>
@import url("assets/css/base.css");

/* .app-tab-bar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
} */
</style>
