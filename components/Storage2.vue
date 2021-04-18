<template>
  <v-btn
    class="ma-2"
    :loading="loading4"
    :disabled="loading4"
    color="#3ba9d9"
    @click="loader = 'loading4'"
  >
    <nuxt-link to="/" class="stbtn">すべての商品を表示する</nuxt-link>
    <template v-slot:loader>
      <v-icon light>mdi-cached</v-icon>
    </template>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      loader: null,
      loading4: false,
    }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
}
</script>

<style>
.v-application a {
  color: #fff;
  text-decoration: none;
}
</style>
