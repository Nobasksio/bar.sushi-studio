import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import bar from './modules/bar'

const store = () => new Vuex.Store({
   state: {
   },
   mutations: {
   },
   actions: {
   },
   getters: {
   },
   modules: {
      bar
   }
});

export default store