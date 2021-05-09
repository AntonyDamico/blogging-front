<template>
  <div>
    <ad-hero
      title="Blogging"
      subtitle="Plataforma de artículos"
    >
      <b-button v-if="isAuthenticated" size="is-large" @click="openArticleModal">
        Nuevo Artículo
      </b-button>
    </ad-hero>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AdHero from '@/components/common/Hero.vue';
import AdArticleModal from '@/components/articles/ArticleModal.vue';

export default {
  components: { AdHero },
  computed: {
    ...mapGetters('Auth', ['isAuthenticated']),
  },
  methods: {
    openArticleModal() {
      this.$buefy.modal.open({
        parent: this,
        component: AdArticleModal,
      });
    },
  },
};
</script>
