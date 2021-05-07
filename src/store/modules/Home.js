import { ArticleService } from '@/api/service';

export default {
  namespaced: true,

  state: {
    articles: [],
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
  },

  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    },
  },
};
