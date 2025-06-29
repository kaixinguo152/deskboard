<template>
  <div class="filters">
    <div
        v-for="filter in filters"
        :key="filter.value"
        @click="$emit('change-filter',filter.value)"
        class="filter"
        :class="{ active: selected === filter.value }"
    >
      <span> {{filter.label}} </span>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "FilterPlan",
  props:["selected"],
  setup(){
    const filters = [
      {
        label: "all",
        value: "all"
      },
      {
        label: "done",
        value: "done"
      },
      {
        label: "todo",
        value: "todo"
      }
    ]
    return {
      filters,
    }
  }
}
</script>

<style>

.filters {
  height: 42px;
  border: 1px solid blue;
}

.filters .filter{
  width: 70px;
  height: 30px;
  margin: 5px;
  background-color: #eee;
  float: left;
  border: 1px solid black;
  border-radius: 20px;
  align-content: center;
  text-align: center;
  cursor: pointer;
  &.active{
    background-color: green;
  }
}
</style>