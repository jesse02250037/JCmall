import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCounter(state,payload){
      payload.count++
    },
    addItem(state,payload){
      payload.checked=true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context,payload){
      let oldProduct=null
      for(let item of this.state.cartList){
        if(item.iid===payload.iid){
          oldProduct=item;
        }
      }
      if(oldProduct){
        context.commit('addCounter',oldProduct)
      }else{
        payload.count=1;
        context.commit('addItem',payload)
      }
    }
  },
  modules: {
  }
})
