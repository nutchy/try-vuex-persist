<template>
  <div>
    <h1>Login page</h1>
    <label for="email"></label>
    <input type="email" name="" id="email" v-model="emailStr">
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
      emailStr: ''
    }
  },
  methods: {
    ...authStore.mapActions(['login']),
    ...authStore.mapMutations(['setEmail']),
    doLogin: async function () {
      await this.login({ email: this.emailStr })
    },
    doSetEmail: function () {
      this.setEmail(this.emailStr)
    },
  },
  computed: {
    ...authStore.mapGetters(['isLoggedIn']),
    ...authStore.mapState(['email'])
  },
  watch: {
    isLoggedIn: function(val) {
      val && this.$router.push({ name: 'About'})
    },
    emailStr: function(val) {
      this.setEmail(this.emailStr)
    }
  },
   mounted() {
      console.log("mounted");
      this.emailStr = this.email
    }
}
</script>

<style>

</style>