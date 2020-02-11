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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { createNamespacedHelpers } from 'vuex'

const Todos = createNamespacedHelpers('Todos')

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
    ...Todos.mapActions(['addTodo']),
    ...Todos.mapMutations(['resetTodos'])
  },
  computed: {
    ...Todos.mapState(['todos'])
  }
}
</script>
