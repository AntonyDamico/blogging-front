<template>
  <div id="app">
    <div id="nav">
      <ad-navbar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import AdNavbar from '@/components/common/Navbar.vue';

export default {
  components: { AdNavbar },
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
