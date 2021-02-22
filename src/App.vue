<template>
  <div id="app">
    <div
      v-if="$store.state.auth.isAuthChecked"
      class="app-wrapper"
      :class="{ blocked: isPopUpShown }"
    >
      <AppHeader/>
      <AppMain/>
    </div>

    <PopUp v-if="isPopUpShown"/>
  </div>
</template>

<script>
import AppHeader from '@layout/components/AppHeader'
import AppMain from '@layout/components/AppMain'
import PopUp from '@pop-up/PopUp'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    PopUp,
  },
  computed: {
    isPopUpShown() {
      return this.$store.getters['popUp/shown']
    },
  },
  created() {
    this.$store.dispatch('auth/checkAuth')
  },
}
</script>
