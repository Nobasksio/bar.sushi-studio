import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import bar from './modules/bar'
import feedback from './modules/feedback'
import promotion from './modules/promotion'

const store = () => new Vuex.Store({
   state: {
      ApiBaseUrl: 'http://185.22.61.189:1337'
   },
   mutations: {
   },
   actions: {
   },
   getters: {
      getApiBaseUrl: state => state.ApiBaseUrl
   },
   modules: {
      bar, feedback, promotion
   }
});

export default store
