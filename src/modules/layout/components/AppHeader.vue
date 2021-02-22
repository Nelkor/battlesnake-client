<template>
  <header class="app-header">
    <div class="wrapper">
      <IconBurger/>
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
}
</script>
