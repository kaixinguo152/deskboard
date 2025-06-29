<template>
  <div class="container">
    <TodoList />
  </div>

</template>

<script lang="js">
import TodoList from "../components/PlanList/TodoList.vue";

export default {
  name:"TodoListView",
  components:{TodoList,}
}

</script>

<style scoped>
.container {
  margin:10px;
}
</style>