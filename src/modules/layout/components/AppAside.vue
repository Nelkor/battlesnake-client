<template>
  <aside
    class="app-aside shadow"
    :class="{ 'is-closed': !isAppAsideOpen }"
  >
    <div class="aside-wrapper"></div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppAside',
  computed: {
    ...mapState('layout', ['isAppAsideOpen']),
  },
}
</script>
