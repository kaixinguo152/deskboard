<template>
  <div>
    <h3>hello router.</h3>
    <AddPlan :tid="todos.length" @add-todo="addTodo"/>
<!--    <FilterPlan />-->
    <ListPlan :todos="todos"/>
  </div>
</template>

<script lang="ts">
import AddPlan from "../components/PlanList/AddPlan.vue"
import FilterPlan from "../components/PlanList/FilterPlan.vue";
import ListPlan from "../components/PlanList/ListPlan.vue";
import {ref} from "vue";

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
    return {
      todos,
      addTodo,
    }
  }
}

</script>