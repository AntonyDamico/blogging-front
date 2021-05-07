<template>
  <div class="columns">
    <img class="column is-half" :src="article.image">
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
