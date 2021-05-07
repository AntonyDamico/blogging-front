<template>
  <div class="sort-row subtitle">
    Sort by:
    <span
      :class="{'sort-option': true, 'highlight': sortOption === SORT_OPTIONS.DATE}"
      @click="setSortDate"
    >
      Date
    </span> |
    <span
      :class="{'sort-option': true, 'highlight': sortOption === SORT_OPTIONS.TITLE}"
      @click="setSortTitle"
    >
      Title
    </span>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { SORT_OPTIONS } from '@/common/constants';

export default {
  computed: {
    SORT_OPTIONS: () => SORT_OPTIONS,
    ...mapState('Home', ['sortOption']),
  },
  methods: {
    ...mapActions('Home', ['setSortTitle', 'setSortDate']),
  },
};
</script>

<style lang="scss" scoped>
.sort-row {
  margin-bottom: 2rem;

  .sort-option:hover {
    color: orangered;
  }

  .highlight {
    color: maroon;
  }
}
</style>
