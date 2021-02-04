<template>
  <div id="app">
    <AuthCard v-if="isAuthChecked"/>
    <AppMain/>
  </div>
</template>

<script>
import AuthCard from '@auth/components/AuthCard'
import AppMain from '@layout/components/AppMain'

export default {
  name: 'App',
  components: {
    AuthCard,
    AppMain,
  },
  computed: {
    isAuthChecked() {
      return this.$store.state.auth.isAuthChecked
    },
  },
  created() {
    this.$store.dispatch('auth/checkAuth')
  },
}
</script>
