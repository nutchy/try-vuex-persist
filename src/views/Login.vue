<template>
  <div>
    <h1>Login page</h1>
    <button @click="login">Login</button>
    {{isLoggedIn}}
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const authStore = createNamespacedHelpers('auth')
export default {
  methods: {
    ...authStore.mapActions(['login'])
  },
  computed: {
    ...authStore.mapGetters(['isLoggedIn'])
  },
  watch: {
    isLoggedIn: function(val) {
      val && this.$router.push({ name: 'About'})
    }
  }
}
</script>

<style>

</style>