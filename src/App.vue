<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('auth/checkAuth')
  },
}
</script>
