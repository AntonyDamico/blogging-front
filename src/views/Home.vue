<template>
  <div class="home">
    <ad-home-hero />
    <ad-article-list></ad-article-list>
  </div>
</template>

<script>
import AdHomeHero from '@/components/home/HomeHero.vue';
import AdArticleList from '@/components/articles/ArticleList.vue';

export default {
  name: 'Home',
  components: { AdHomeHero, AdArticleList },
};
</script>

<style lang="scss" sccoped>
.home {
  margin-bottom: 5rem;
}
</style>
