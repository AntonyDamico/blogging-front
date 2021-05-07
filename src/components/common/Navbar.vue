<template>
  <b-navbar fixed-top spaced>
    <template #brand>
      <router-link to="/">
        <b-button type="is-dark">Home</b-button>
      </router-link>
    </template>

    <template #end>
      <div class="buttons">
        <b-button type="is-primary is-light" @click="login">Iniciar Sesión</b-button>
        <b-button type="is-primary" @click="signUp">Registro</b-button>
      </div>
    </template>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    login() {
      //
    },

    signUp() {
      //
    },
  },
};
</script>
