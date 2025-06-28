<template>
 <div>
   <label>
     <input type="checkbox" :checked="todoItem.completed"/>
     {{ todoItem.content }}
   </label>
 </div>
</template>

<script lang="ts">
export default {
  name: "TodoListItem",
  props:{
    todoItem: Object,
  }
}
</script>