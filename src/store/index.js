import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import { postLogin } from '../api/axios'
import { postSignUp } from '../api/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    show_index: null
  },
  mutations: {
    GET_TOKEN(state, data) { 
      state.token = data 
    },
    SHOW_DYNAMIC_COMPONENT(state, data) { 
      state.show_index = data 
    }
  },
  actions: {
    actionPostLogin({ commit }, payload) {
      const PostLogin = postLogin(payload)
      PostLogin.then(res => {
        let token = res.data.token
        commit('GET_TOKEN', token)
      })
    },
    actionPostSignUp({ commit }, payload) {
      const PostSignUp = postSignUp(payload)
      PostSignUp.then(res => {
        let user = res.data.user
      })
    },
    showDynamicComponent({ commit }, params) { 
      let index = params 
      commit('SHOW_DYNAMIC_COMPONENT', index)
    }
  },
  modules: {
  }
})
