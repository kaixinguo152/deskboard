<template>
  <div>
    <AddPlan :tid="todos.length" @add-todo="addTodo"/>
<!--    <FilterPlan />-->
    <ListPlan :todos="filteredTodos"/>
  </div>
</template>

<script lang="ts">
import AddPlan from "../components/PlanList/AddPlan.vue"
import FilterPlan from "../components/PlanList/FilterPlan.vue";
import ListPlan from "../components/PlanList/ListPlan.vue";
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
        case "todo:":
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