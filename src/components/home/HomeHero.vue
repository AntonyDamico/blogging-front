<template>
  <div>
    <ad-hero
      title="Blogging"
      subtitle="Plataforma de artículos"
    >
      <b-button v-if="isAuthenticated" size="is-large">
        Nuevo Artículo
      </b-button>
    </ad-hero>
  </div>
</template>

<script>
import AdHero from '@/components/common/Hero.vue';
import { mapGetters } from 'vuex';

export default {
  components: { AdHero },
  computed: {
    ...mapGetters('Auth', ['isAuthenticated']),
  },
};
</script>
