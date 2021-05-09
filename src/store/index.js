import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import Home from './modules/Home';
import Auth from './modules/Auth';
import Article from './modules/Article';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Home, Auth, Article,
  },
  plugins: [new VuexPersistence({ storage: window.localStorage }).plugin],
});
