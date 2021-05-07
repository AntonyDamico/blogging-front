<template>
  <div class="home">
    <ad-home-hero />
  </div>
</template>

<script>
import AdHomeHero from '@/components/home/HomeHero.vue';

export default {
  name: 'Home',
  components: { AdHomeHero },
};
</script>

<style lang="scss" sccoped>
.home {
  margin-bottom: 5rem;
}
</style>
