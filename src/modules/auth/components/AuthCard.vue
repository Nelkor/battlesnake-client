<template>
  <div class="auth-card">
    <div
      v-if="name"
      class="name"
    >{{ name }}</div>

    <router-link
      v-if="id"
      :to="{ name: 'profile', params: { id } }"
    >Профиль</router-link>

    <router-link
      v-else
      :to="{ name: 'auth' }"
    >Войти</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AuthCard',
  computed: {
    ...mapState('auth', ['id', 'name']),
  },
}
</script>
