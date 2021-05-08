<template>
  <b-navbar fixed-top spaced>
    <template #brand>
      <router-link to="/">
        <b-button type="is-dark">Home</b-button>
      </router-link>
    </template>

    <template #end>
      <div class="buttons" v-if="!isAuthenticated">
        <b-button type="is-primary is-light" @click="login">Iniciar Sesión</b-button>
        <b-button type="is-primary" @click="signUp">Registro</b-button>
      </div>
      <div class="buttons" v-else>
        <b-button type="is-danger" @click="performLogout">Cerrar sesión</b-button>
      </div>
    </template>
  </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AuthModal from '@/components/auth/AuthModal.vue';

export default {
  name: 'Navbar',

  computed: {
    ...mapGetters('Auth', ['isAuthenticated']),
  },

  methods: {
    login() {
      this.openAuthModal(true);
    },

    signUp() {
      this.openAuthModal(false);
    },

    performLogout() {
      this.logout();
      this.$buefy.toast.open('Sessión cerrada');
      if (this.$route.name !== 'Home') this.$router.push({ name: 'Home' });
    },

    openAuthModal(isLogin) {
      this.$buefy.modal.open({
        parent: this,
        component: AuthModal,
        props: { isLogin },
      });
    },
    ...mapActions('Auth', ['logout']),
  },
};
</script>
