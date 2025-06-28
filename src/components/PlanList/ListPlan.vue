<template>
  <div>
    <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo-item="todo"
    ></TodoListItem>
  </div>
</template>

<script lang="ts">
import TodoListItem from "./TodoListItem.vue";

export default {
  name: "ListPlan",
  components: {TodoListItem},
  props:{
    todos: Array,
  }
};

</script>