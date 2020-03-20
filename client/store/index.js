import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import bar from './modules/bar'

const store = () => new Vuex.Store({
   state: {
      baseUrl: 'http://185.22.61.189:1337'
   },
   mutations: {
   },
   actions: {
   },
   getters: {
      getBaseUrl: state => state.baseUrl
   },
   modules: {
      bar
   }
});

export default store