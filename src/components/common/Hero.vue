<template>
<section class="hero is-link">
    <div class="hero-body">
      <p class="title">
        {{ title }}
      </p>
      <p class="subtitle">
        {{ subtitle }}
      </p>
      <slot/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Hero',
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
  },
});
</script>

<style lang="scss" scoped>
.hero {
  margin-bottom: 5rem;
}
</style>
