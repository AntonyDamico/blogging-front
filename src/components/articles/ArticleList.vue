<template>
  <div>
    <div v-if="!articles.length">
      <h1 class="title is-1">No hay artículos...</h1>
    </div>
    <div class="columns is-multiline main-content">
          <!-- :author="article.author" -->
      <ad-article-summary-element
        v-for="(article, index) in articles" :key="index"
        :title="article.title"
        :summary="article.summary"
        :date="article.createdAt"
        :imageSrc="article.image"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AdArticleSummaryElement from './ArticleSummaryElement.vue';

export default {
  components: { AdArticleSummaryElement },
  mounted() {
    console.log(this.articles, 'hello');
    this.fetchArticles();
  },
  computed: {
    ...mapGetters('Home', ['articles']),
  },
  methods: {
    ...mapActions('Home', ['fetchArticles']),
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 600px) {
  .main-content {
    padding: 0 8rem;
  }
}
</style>
