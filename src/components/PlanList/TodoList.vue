<template>
  <div class="container">
    <AddPlan :tid="todos.length" @add-todo="addTodo"/>
    <FilterPlan :selected="filter" @change-filter="filter = $event"/>
    <ListPlan :todos="filteredTodos"/>
  </div>
</template>

<script lang="ts">
import AddPlan from "./AddPlan.vue"
import FilterPlan from "./FilterPlan.vue";
import ListPlan from "./ListPlan.vue";
import {ref,computed} from "vue";

export default {
  name: "PlanList",
  components: {
    AddPlan,
    FilterPlan,
    ListPlan,
  },
  setup(){
    const todos = ref([]);
    const addTodo = (todo) => todos.value.push(todo);

    const filter = ref("all");
    const filteredTodos = computed(() => {
      switch (filter.value) {
        case "done":
          return todos.value.filter((todo) => todo.completed);
        case "todo":
          return todos.value.filter((todo) => !todo.completed);
        default:
          return todos.value;
      }
    });

    return {
      todos,
      addTodo,
      filter,
      filteredTodos,
    }
  }
}

</script>

<style scoped>
.container{
  width: 250px;
  height: 800px;
  border: 1px solid black;
  background-color: antiquewhite;
}
</style>