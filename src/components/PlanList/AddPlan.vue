<template>
  <div class="input-add">
      <input
        type="text"
        name="todo"
        v-model.lazy="todoContent"
        @keyup.enter="emitAddTodo"
        class="input-box"
      />
      <button @click="emitAddTodo" class="add-button">
        <i class="add-todo">
          Add
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
  props:{
    tid: Number,
  },
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

<style scoped>
.input-add {
  border: 1px solid red;
}

.input-box{
  width: 184px;
  border-radius: 10px;
}

.add-button{
  width: 60px;
  border-radius: 10px;
}
</style>