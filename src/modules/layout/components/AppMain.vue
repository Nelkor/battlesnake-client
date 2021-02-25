<template>
  <main class="app-main">
    <router-view class="router-view"/>
    <AppAside/>

    <div
      class="aside-bg"
      :class="{ 'is-open': isAppAsideOpen }"
      @click="closeAside"
    />
  </main>
</template>

<script>
import { mapState } from 'vuex'

import AppAside from '@layout/components/AppAside'

export default {
  name: 'AppMain',
  components: {
    AppAside,
  },
  computed: {
    ...mapState('layout', ['isAppAsideOpen']),
  },
  methods: {
    closeAside() {
      this.$store.commit('layout/setAppAsideOpen', false)
    },
  },
}
</script>
