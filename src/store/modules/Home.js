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
    async fetchArticles({ state, commit }) {
      const { sortOption } = state;
      const res = await ArticleService.all(sortOption);
      commit('setArticles', res.data);
    },
    setSortTitle({ dispatch }) {
      dispatch('changeSortOption', SORT_OPTIONS.TITLE);
    },
    setSortDate({ dispatch }) {
      dispatch('changeSortOption', SORT_OPTIONS.DATE);
    },
    changeSortOption({ commit, dispatch }, sortOption) {
      commit('setSortOption', sortOption);
      dispatch('fetchArticles');
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
