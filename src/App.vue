<template>
  <div id="app">
    <AuthCard/>
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
  created() {
    this.$store.dispatch('auth/checkAuth')
  },
}
</script>
