<template>
  <div>
    <label>
      <input type="checkbox" v-model.lazy="inputValue" />
      <button @click="AddPlan(plan)">Add Plan</button>
    </label>
  </div>
</template>
<script lang="ts">
export default {
  name: 'AddPlan',
  props:{
    AddPlan : Function,
    tid: Number,
  },
  setup(){
    const plan = {
      id: tid,
      content: inputValue,
    }
    return{
      plan,
    }
  }
}
</script>