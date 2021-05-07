<template>
  <div class="columns is-multiline main-content">
    <ad-article-summary-element
      v-for="(article, index) in articles" :key="index"
      :title="article.title"
      :author="article.author"
      :summary="article.summary"
      :date="article.date"
      :imageSrc="article.imageSrc"
    />
  </div>
</template>

<script>
import AdArticleSummaryElement from './ArticleSummaryElement.vue';

export default {
  components: { AdArticleSummaryElement },
  data() {
    return {
      articles: [
        {
          url: 'title-123213',
          slug: 'slug-title-123213',
          title: 'This is the title',
          author: 'John Smith',
          summary: 'This is the summary, it goes here...',
          date: '11:09 PM - 1 Jan 2016',
          imageSrc: 'https://bulma.io/images/placeholders/1280x960.png',
        },
        {
          url: 'title2-djasf',
          slug: 'slug-title2-djasf',
          title: 'This is the title 2',
          author: 'John Smith',
          summary: 'This is the second summary, it goes here...',
          date: '11:09 PM - 1 Jan 2016',
          imageSrc: 'https://bulma.io/images/placeholders/1280x960.png',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  padding: 0 10rem;
}
</style>
