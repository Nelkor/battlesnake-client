<template>
  <div class="profile-view">
    <div
      v-if="isOwnerId"
      class="log-out"
    >
      <div class="head">Выйти из профиля</div>

      <button>На этом устройстве</button>

      <button>На всех устройствах</button>

      <button>На остальных устройствах</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  computed: {
    profileId() {
      return this.$route.params.id
    },
    isOwnerId() {
      return Number(this.profileId) === this.$store.state.auth.id
    },
  },
}
</script>
