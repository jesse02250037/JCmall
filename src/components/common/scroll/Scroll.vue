<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  components: {
    BScroll,
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        // 利用props通过父组件传值来决定要不要获取位置
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      });

    this.scroll.on("scroll",(position)=>{
      this.$emit('getPosition',position)
    })

    this.scroll.on("pullingUp",()=>{
      this.$emit('pullingUp')
    })
  },
};
</script>
<style scoped>
</style>
