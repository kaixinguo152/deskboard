<template>
  <div class="input-add">
      <input type="text" name="todo" v-model.lazy="todoContent" @keyup.enter="emitAddTodo"/>
      <button @click="emitAddTodo">
        <i class="add-todo">
          add todo.
        </i>
      </button>
  </div>
</template>
<script lang="ts">
import {ref} from "vue";

export default {
  name: "AddPlan",
  // props: {
  //   AddPlan: Function,
  //   tid: Number,
  // },
  setup(props,context) {
    const todoContent = ref("");
    const emitAddTodo = () => {
      const todo = {
        id: props.tid,
        content: todoContent.value,
        completed: false,
      };
      context.emit("add-todo", todo);
      todoContent.value = "";
    }
    return {
      emitAddTodo,
      todoContent,
    };
  },
};
</script>

