<template>
  <div class="columns" v-if="article">
    <img class="column is-half" :src="article.imageSrc">
    <div class="article-body column is-half ">
      {{ article.body }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleBody',

  props: {
    article: { type: Object, default: null },
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
