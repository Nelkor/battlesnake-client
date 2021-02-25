<template>
  <header class="app-header shadow">
    <div class="header-wrapper">
      <div class="logo">Logo</div>

      <div
        class="header-burger"
        @click="openAside"
      >
        <IconBurger/>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

import IconBurger from '@icons/IconBurger'

export default {
  name: 'AppHeader',
  components: {
    IconBurger,
  },
  computed: {
    ...mapState('auth', ['id', 'name']),
  },
  methods: {
    openAside() {
      this.$store.commit('layout/setAppAsideOpen', true)
    },
  },
}
</script>
