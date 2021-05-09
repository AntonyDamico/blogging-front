import { ArticleService } from '@/api/service';

export default {
  namespaced: true,

  state: {
    article: null,
  },

  actions: {
    async setArticleByUrl({ state, commit }, url) {
      if (state.article && state.article.url === url) return;
      const { data } = await ArticleService.getByUrl(url);
      commit('setArticle', data);
    },

    async setArticleBySlug({ state, commit }, slug) {
      if (state.article && state.article.slug === slug) return;
      const { data } = await ArticleService.getBySlug(slug);
      commit('setArticle', data);
    },

    async submitArticle({ commit }, newArticle) {
      const { data } = await ArticleService.submitArticle(newArticle);
      commit('setArticle', data);
      return data;
    },
  },

  mutations: {
    setArticle(state, article) {
      state.article = article;
    },
  },
};
