<template>
  <div>
    <h1>Login page</h1>
    <label for="email"></label>
    <input type="email" name="" id="email" v-model="email">
    {{email}}
    <button @click="doLogin">Login</button>
    {{isLoggedIn}}
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const authStore = createNamespacedHelpers('auth')
export default {
  data: () => {
    return {
      email: ''
    }
  },
  methods: {
    ...authStore.mapActions(['login']),
    ...authStore.mapMutations(['setEmail']),
    doLogin: async function () {
      await this.login({ email: this.email })
    },
    doSetEmail: function () {
      this.setEmail(this.email)
    }
  },
  computed: {
    ...authStore.mapGetters(['isLoggedIn'])
  },
  watch: {
    isLoggedIn: function(val) {
      val && this.$router.push({ name: 'About'})
    },
    email: function(val) {
      this.setEmail(this.email)
    }
  }
}
</script>

<style>

</style>