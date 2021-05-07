<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Registrarse</p>
    </header>

    <form @submit.prevent="submit">
      <section class="modal-card-body">
        <b-field label="Email" v-if="!isLogin">
          <b-input type="email" size="is-large" v-model="email" autofocus @keyup.native="onKey" />
        </b-field>

        <b-field label="Nombre de usuario">
          <b-input type="text" size="is-large" v-model="username" @keyup.native="onKey" />
        </b-field>

        <b-field label="Contraseña">
          <b-input type="password" size="is-large" v-model="password" @keyup.native="onKey" />
        </b-field>
      </section>

      <footer class="modal-card-foot">
        <div>
          <b-button type="is-primary" @click="submit">Entrar</b-button>
        </div>

        <div v-if="failed" class="tag is-danger">
          {{ errorMessage }}
        </div>
      </footer>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthModal',

  props: {
    isLogin: { type: Boolean, default: true },
  },

  data() {
    return {
      email: '',
      password: '',
      username: '',
      failed: false,
      errorMessage: '',
    };
  },

  methods: {
    onKey() {
      this.failed = false;
    },

    async submit() {
      try {
        if (this.isLogin) {
          await this.performLogin();
        } else {
          this.performRegister();
        }
      } catch (error) {
        console.log(error);
        this.failed = true;
      }
    },

    async performLogin() {
      await this.login({
        username: this.username,
        password: this.password,
      });
      this.$parent.close();
      this.$buefy.toast.open('Sessión iniciada');
    },

    async performRegister() {
      const res = await this.register({
        email: this.email,
        username: this.username,
        password: this.password,
      });
      console.log(res);
    },
    ...mapActions('Auth', ['login', 'register']),
  },
};
</script>
