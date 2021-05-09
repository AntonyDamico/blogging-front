<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Nuevo Artículo</p>
    </header>

    <form @submit.prevent="submit" enctype=“multipart/form-data”>
      <section class="modal-card-body">

        <b-field label="Título">
          <b-input type="text"  v-model="article.title" autofocus @keyup.native="onKey" />
        </b-field>

        <b-field label="Cuerpo">
          <b-input type="textarea" maxlength="400" v-model="article.body" @keyup.native="onKey" />
        </b-field>

        <label for="image" class="label">Imágen</label>
        <b-field class="file" :class="{'has-name': uploadedImage}">
          <b-upload v-model="image" class="file-label">
              <span class="file-cta">
                  <span class="file-label">Click to upload</span>
              </span>
              <span class="file-name" v-if="uploadedImage">
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
import { mapActions } from 'vuex';

export default {
  name: 'ArticleModal',

  data() {
    return {
      article: {
        title: '',
        body: '',
      },
      image: null,
      failed: false,
      errorMessage: '',
    };
  },

  computed: {
    missingFields() {
      return !this.article.title.length || !this.article.body.length;
    },
    uploadedImage() {
      return Boolean(this.image);
    },
  },

  methods: {
    onKey() {
      this.failed = false;
    },

    async submit() {
      try {
        await this.performSubmit();
      } catch (error) {
        this.failed = true;
        this.errorMessage = error.message;
      }
    },

    async performSubmit() {
      const finalArticle = this.article;
      if (this.uploadedImage) finalArticle.image = this.image;
      const article = await this.submitArticle(finalArticle);
      this.$parent.close();
      this.goToDetail(article);
    },

    goToDetail({ slug, url }) {
      const routerContent = {
        name: 'ArticleDetail',
        params: { slug, url },
      };
      this.$router.push(routerContent);
    },
    ...mapActions('Article', ['submitArticle']),
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
