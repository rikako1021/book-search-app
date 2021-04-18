<template>
  <div>
    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      カテゴリで絞り込み
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: null,
      loading2: false,
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
