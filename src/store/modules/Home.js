import { SORT_OPTIONS } from '@/common/constants';
import { ArticleService } from '@/api/service';

export default {
  namespaced: true,

  state: {
    articles: [],
    sortOption: SORT_OPTIONS.DATE,
  },

  getters: {
    articles(state) {
      return state.articles;
    },
  },

  actions: {
    async fetchArticles({ commit }) {
      const res = await ArticleService.all();
      console.log(res.data);
      commit('setArticles', res.data);
    },
    setSortTitle({ commit }) {
      commit('setSortOption', SORT_OPTIONS.TITLE);
    },
    setSortDate({ commit }) {
      commit('setSortOption', SORT_OPTIONS.DATE);
    },
  },

  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    },
    setSortOption(state, sortOption) {
      state.sortOption = sortOption;
    },
  },
};
