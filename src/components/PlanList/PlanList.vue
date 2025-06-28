<template>
  <div>
    <AddPlan :add-plan="AddPlan()" :tid="tid"/>
    <FilterPlan />
    <ListPlan />
  </div>
</template>

<script>
import AddPlan from "./AddPlan.vue"
import FilterPlan from "./FilterPlan.vue";
import ListPlan from "./ListPlan.vue";
import {ref} from "vue";

export default {
  name: "PlanList",
  components: {
    AddPlan,
    FilterPlan,
    ListPlan,
  },
  setup(){
    const Plans = ref([]);
    const tid = Plans.value.length;
    function AddPlan(plan){
      Plans.value.push(plan);
    }
    return {
      AddPlan,
      tid,
    }
  }
}

</script>