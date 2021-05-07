<template>
  <div class="home">
    <ad-home-hero />
    <ad-sort-row />
    <ad-article-list></ad-article-list>
  </div>
</template>

<script>
import AdHomeHero from '@/components/home/HomeHero.vue';
import AdSortRow from '@/components/home/SortRow.vue';
import AdArticleList from '@/components/articles/ArticleList.vue';

export default {
  name: 'Home',
  components: { AdHomeHero, AdSortRow, AdArticleList },
};
</script>

<style lang="scss" sccoped>
.home {
  margin-bottom: 5rem;
}
</style>
