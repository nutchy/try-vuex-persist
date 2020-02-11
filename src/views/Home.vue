<template>
  <div class="home">
    <ul>
      <template v-for="(todo, index) in todos">
        <li :key="index" @dblclick="deleteTodo(index)" style="cursor:pointer">
          {{ todo }}
        </li>
      </template>
    </ul>
    <input type="text" v-model="newTodo" />
    <button @click="addNewTodo">Add</button>

    <div>
      <button @click="login">Login</button>
      {{isLoggedIn}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { createNamespacedHelpers } from 'vuex'

const todosStore = createNamespacedHelpers('todos')
const authStore = createNamespacedHelpers('auth')

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: () => ({
    newTodo: ''
  }),
  methods: {
    addNewTodo: function() {
      if (this.newTodo) {
        this.addTodo(this.newTodo)
        this.newTodo = ''
      }
    },
    deleteTodo: function(index) {
      this.todos.splice(index, 1)
    },
    ...todosStore.mapActions(['addTodo']),
    ...todosStore.mapMutations(['resetTodos']),
    ...authStore.mapActions(['login'])
  },
  computed: {
    ...todosStore.mapState(['todos']),
    ...authStore.mapGetters(['isLoggedIn'])
  }
}
</script>
