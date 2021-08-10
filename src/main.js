import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
const store = new Vuex.Store({
  state : {
    newWork : '',
    Works : [
      {content : 'Đi ngủ' , done : true},
      {content : 'Đi ngủ' , done : false}
    ]
  },
  getters: {
    getWorks(state) {
      return state.Works;
    }
  },
  mutations: {
    ThemWork(state, Work) {
      state.Works.push(Work);
    },
    xoaTodo(state, index) {
      state.Works.splice(index,1);
    }
  },
  actions: {
    addTodo(context,Work) {
      context.commit('ThemWork',Work);
      context.state.newWork = '';
    },
    removeTodo(context,index) {
      context.commit('xoaTodo', index);
    }
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
}).$mount('#app')
