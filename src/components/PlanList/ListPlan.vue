<template>
  <div>
    <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo-item="todo"
        @change-state="todo.completed = $event.target.checked"
    ></TodoListItem>
  </div>
</template>

<script lang="js">
import TodoListItem from "./TodoListItem.vue";

export default {
  name: "ListPlan",
  components: {TodoListItem},
  // props:["todos"]
  props:{
    todos: Array,
  }
};

</script>