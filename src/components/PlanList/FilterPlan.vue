<template>
  <div>
    <span v-for="filter in filters" :key="filter.value" class="filter">
      {{filter.label}}
    </span>
  </div>
</template>

<script>
export default {
  name: "FilterPlan",
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