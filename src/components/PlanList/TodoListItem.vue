<template>
 <div class="todo-item" :class="{ done: todoItem.completed }">
   <label>
     <input
         type="checkbox"
         :checked="todoItem.completed"
         @click="$emit('change-state',$event)"/>
     {{ todoItem.content }}
   </label>
 </div>
</template>

<script lang="ts">

export default {
  name: "TodoListItem",
  props:["todoItem"],
}
</script>

<style scoped>
.todo-item label  {
  background-color: red;
}

.todo-item.done label{
  text-decoration: line-through;
  font-style: italic;
  background-color: green;
}
</style>