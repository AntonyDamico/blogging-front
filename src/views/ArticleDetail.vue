<template>
  <div>
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
import AdArticleHero from '@/components/articles/ArticleHero.vue';
import AdArticleBody from '@/components/articles/ArticleBody.vue';

export default {
  name: 'ArticleDetail',
  components: { AdArticleHero, AdArticleBody },
  beforeRouteEnter(to, from, next) {
    next();
  },
  data() {
    return {
      article: {
        url: 'title-123213',
        slug: 'slug-title-123213',
        title: 'This is the title',
        author: 'John Smith',
        body: 'This is the body, it is much much much longer There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the',
        date: '11:09 PM - 1 Jan 2016',
        imageSrc: 'https://bulma.io/images/placeholders/1280x960.png',
      },
    };
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
