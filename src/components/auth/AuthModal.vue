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
        <div v-if="failed" class="tag is-danger">
          {{ errorMessage }}
        </div>

        <div>
          <input :disabled="missingFields" type="submit" value="Entrar" class="button is-primary" />
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

  computed: {
    missingFields() {
      const missing = !this.username.length || !this.password.length;
      if (this.isLogin) return missing;
      return missing || !this.email.length;
    },
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
          await this.performRegister();
        }
      } catch (error) {
        this.failed = true;
        this.errorMessage = error.message;
      }
    },

    async performLogin() {
      await this.login({
        username: this.username,
        password: this.password,
      });
      this.authSuccess('Sessión iniciada');
    },

    async performRegister() {
      await this.register({
        email: this.email,
        username: this.username,
        password: this.password,
      });
      this.authSuccess('Registro exitoso');
    },

    authSuccess(message) {
      this.$parent.close();
      this.$buefy.toast.open(message);
    },

    ...mapActions('Auth', ['login', 'register']),
  },
};
</script>

<style lang="scss" scoped>
.modal-card-foot {
  flex-flow: column;

  .tag {
    margin-bottom: 1rem;
  }
}
</style>
