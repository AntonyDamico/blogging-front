import Vue from 'vue';
import Vuex from 'vuex';

import Home from './modules/Home';
import Auth from './modules/Auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Home, Auth,
  },
});
