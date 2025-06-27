<script setup lang="ts">
import MenuBar from "./components/bar/MenuBar.vue";
</script>

<template>
  <menu-bar></menu-bar>
  <div class="view">
    <!-- 路由的显示入口 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.view {
  height: 980px;
  margin: 0 50px;
  background-color: aqua;
  position: relative;
  top: 50px;
}
</style>
