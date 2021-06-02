import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const Home=()=>import("views/home/home")
const Category=()=>import("views/category/category")
const Cart=()=>import("views/cart/cart")
const Profile=()=>import("views/profile/profile")
const Detail=()=>import("views/detail/Detail")

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail',
    component:Detail,
    meta:{
      keepAlive:true
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
