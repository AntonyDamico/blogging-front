<template>
  <div @click="goToDetail" class="column is-one-third">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="imageSrc">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
          </div>
          <div class="media-content">
            <p class="title is-4">{{ title }}</p>
            <p class="subtitle is-6">{{ author }}</p>
          </div>
        </div>

        <div class="content">
          {{ summary }}
        </div>
        <p>{{ date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleSummary',
  props: {
    title: { type: String, default: '' },
    author: { type: String, default: '' },
    summary: { type: String, default: '' },
    date: { type: String, default: '' },
    imageSrc: { type: String, default: '' },
  },

  methods: {
    goToDetail() {
      //
    },
  },
};
</script>

<style lang="scss" scoped>
.column:hover {
  transform: scale(1.1);
}
</style>
