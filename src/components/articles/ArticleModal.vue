<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Nuevo Artículo</p>
    </header>

    <form @submit.prevent="submit">
      <section class="modal-card-body">

        <b-field label="Título">
          <b-input type="text"  v-model="title" autofocus @keyup.native="onKey" />
        </b-field>

        <b-field label="Cuerpo">
          <b-input type="textarea" v-model="body" @keyup.native="onKey" />
        </b-field>

        <label for="image" class="label">Imágen</label>
        <b-field class="file" :class="{'has-name': !!image}">
          <b-upload v-model="image" class="file-label">
              <span class="file-cta">
                  <span class="file-label">Click to upload</span>
              </span>
              <span class="file-name" v-if="image">
                  {{ image.name }}
              </span>
          </b-upload>
      </b-field>

      </section>

      <footer class="modal-card-foot">
        <div v-if="failed" class="tag is-danger">
          {{ errorMessage }}
        </div>

        <div>
          <input :disabled="missingFields" type="submit" value="Enviar" class="button is-primary" />
        </div>
      </footer>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ArticleModal',

  data() {
    return {
      title: '',
      body: '',
      image: null,
      failed: false,
      errorMessage: '',
    };
  },

  computed: {
    missingFields() {
      return !this.title.length || !this.body.length;
    },
  },

  methods: {
    onKey() {
      this.failed = false;
    },

    async submit() {
      try {
        //
      } catch (error) {
        this.failed = true;
        this.errorMessage = error.message;
      }
    },
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
