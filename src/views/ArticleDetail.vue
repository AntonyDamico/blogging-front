<template>
  <div v-if="article">
    <ad-article-hero
      :title="article.title"
      :author="article.author"
      :date="article.date"
    />

    <ad-article-body
      :article="article"
    />

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import store from '@/store';
import AdArticleHero from '@/components/articles/ArticleHero.vue';
import AdArticleBody from '@/components/articles/ArticleBody.vue';

export default {
  name: 'ArticleDetail',
  components: { AdArticleHero, AdArticleBody },
  async beforeRouteEnter(to, from, next) {
    if ('url' in to.params) {
      store.dispatch('Article/setArticleByUrl', to.params.url);
    } else {
      store.dispatch('Article/setArticleBySlug', to.params.slug);
    }
    next();
  },
  computed: {
    ...mapState('Article', ['article']),
  },
  methods: {
    ...mapActions('Article', ['setArticleByUrl']),
  },
};
</script>

<style lang="scss" sccoped>
.columns {
  padding: 0 10rem;

  .article-body {
    text-align: justify;
  }
}
</style>
