<template>
  <div class="comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-nav clearfix">
      <div class="left">用户评价</div>
      <div class="right">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>

    <div class="user-info">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-text">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span class="style">{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-image">
      <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
    </div>
  </div>
</template>

<script>
import {formatDate} from '../../../common/formatDate'
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters:{
    showDate(value){
      let date=new Date(value*1000)
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>
<style scoped>
.comment{
  margin-bottom: 20px;
  border-bottom: 5px solid #f2f5f8;
}
.info-nav {
  margin: 5px 10px;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 40px;
  line-height: 40px;
}
.left {
  float: left;
}

.right {
  float: right;
}

.user-info img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.user-info {
  padding: 10px 0 5px;
  margin-left: 10px;
}

.user-info span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}
.info-text {
  padding: 0px 10px;
  margin-top: 10px;
}
.info-text p{
  font-size: 14px;
}

.info-other{
  font-size: 10px;
  margin-top: 10px;
  color: #999;
}
.info-other .date{
  margin-right: 5px;
}

.info-image img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>