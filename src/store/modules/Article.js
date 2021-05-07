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
      console.log(data);
      commit('setArticle', data);
    },
  },

  mutations: {
    setArticle(state, article) {
      state.article = article;
    },
  },
};
