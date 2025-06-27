<template>
  <PlanList />
  <div class="box"></div>
</template>

<script lang="ts">
import PlanList from "../components/PlanList.vue";
export default {
  components: {
    PlanList,
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: aqua;
}
</style>
