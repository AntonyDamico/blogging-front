<template>
  <div id="app">
    <div id="nav">
      <ad-navbar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AdNavbar from '@/components/common/Navbar.vue';
import { AxiosClient } from '@/api/service';

export default {
  components: { AdNavbar },
  mounted() {
    this.setTokenFromStore();
  },
  computed: {
    ...mapGetters('Auth', ['token']),
  },
  methods: {
    setTokenFromStore() {
      if (!this.token) return;
      AxiosClient.setAuthHeader(this.token);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
