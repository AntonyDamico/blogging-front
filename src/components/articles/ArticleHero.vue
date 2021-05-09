<template>
  <div>
    <ad-hero
      :title="title"
      :subtitle="author"
    >
      <b-button
        v-if="showDeleteButton"
        type="is-danger"
        @click="performDelete"
      >
        Borrar
      </b-button>
      {{ date }}
    </ad-hero>
  </div>
</template>

<script>
import AdHero from '@/components/common/Hero.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { AdHero },
  props: {
    slug: { type: String, default: '' },
    title: { type: String, default: '' },
    author: { type: String, default: '' },
    date: { type: String, default: '' },
  },

  computed: {
    showDeleteButton() {
      return this.username === this.author;
    },
    ...mapGetters('Auth', ['username']),
  },

  methods: {

    async performDelete() {
      await this.deleteArticle(this.slug);
      this.$router.push({ name: 'Home' });
    },

    ...mapActions('Article', ['deleteArticle']),
  },
};
</script>
