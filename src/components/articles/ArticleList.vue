<template>
  <div>
    <div v-if="!articles.length">
      <h1 class="title is-1">No hay artículos...</h1>
    </div>
    <div class="columns is-multiline main-content">
      <ad-article-summary-element
        v-for="(article, index) in articles" :key="index"
        :url="article.url"
        :slug="article.slug"
        :author="article.author"
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
import eventBus from '@/common/event-bus';
import AdArticleSummaryElement from './ArticleSummaryElement.vue';

export default {
  components: { AdArticleSummaryElement },
  mounted() {
    this.fetchArticles();
    eventBus.$on('loggedUser', this.fetchArticles);
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
