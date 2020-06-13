import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // goodsItemPath:'/detall'
    homeScroll:0
  },
  getters: {
    getScroll(scroll){
      return state.homeScroll=scroll
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
