<template>
  <div>
    <ad-hero
      :title="title"
      :subtitle="author"
    >
      {{ date }}
    </ad-hero>
  </div>
</template>

<script>
import AdHero from '@/components/common/Hero.vue';

export default {
  components: { AdHero },
  props: {
    title: { type: String, default: '' },
    author: { type: String, default: '' },
    date: { type: String, default: '' },
  },
};
</script>
