<template>
  <div class="auth-view">
    <label>
      <span>Имя</span>

      <input
        type="text"
        v-model="name"
      >
    </label>

    <label>
      <span>Пароль</span>

      <input
        type="password"
        v-model="password"
      >
    </label>

    <button @click="clickLogIn">Авторизоваться</button>

    <button @click="clickReg">Зарегистрироваться</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AuthView',
  data() {
    return {
      name: '',
      password: '',
    }
  },
  computed: {
    id() {
      return this.$store.state.auth.id
    },
  },
  methods: {
    ...mapActions('auth', ['logIn', 'reg']),

    clickLogIn() {
      this.logIn({ name: this.name, password: this.password })
    },
    clickReg() {
      this.reg({ name: this.name, password: this.password })
    },
    redirectToProfile() {
      this.$router
        .replace({ name: 'profile', params: { id: this.id.toString() } })
    },
  },
  watch: {
    id() {
      this.redirectToProfile()
    },
  },
  created() {
    if (!this.id) {
      return
    }

    this.redirectToProfile()
  },
}
</script>
