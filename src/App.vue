<script setup lang="ts">
import MenuBar from "./components/bar/MenuBar.vue";
</script>

<template>
  <div class="View">
    <menu-bar class="menu-bar"></menu-bar>
    <div class="views">
      <!-- 路由的显示入口 -->
      <router-view></router-view>
      <div class="glass"></div>
    </div>
  </div>
</template>

<style scoped>
.View {
  background: url("./assets/senlin.jpeg") no-repeat;
  background-size: cover;
}

.menu-bar{
  position: absolute;
}

.views {
  height: 800px;
  margin: 0 50px;
  position: relative;
  top: 50px;
}

.views .glass {
  width: 1000px;
  height: 800px;
  float: right;
  background-color: #eeeeee;
  position: absolute;
  left: 350px;
  top: 30px;
  backdrop-filter: blur(15px);
  background-color: rgba(0,0,0,20%);
}
</style>
