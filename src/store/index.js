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
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context,payload){
      let index=context.state.cartList.indexOf(payload)
      if(index === -1){
        payload.count=1;
        context.commit('addItem',payload)
      }else{
        let oldProduct=context.state.cartList[index];
        context.commit('addCounter',oldProduct)
      }
    }
  },
  modules: {
  }
})
