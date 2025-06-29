<template>
  <div class="menu">
    <ul>
      <li>
        <div class="CaiNiao">
          <a href="https://www.runoob.com/" target="blank">
            <span>CaiNiao</span>
          </a>
        </div>
      </li>
      <li>
        <router-link to="/">
          <div class="HomeView">
            <span>HomeView</span>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/todolist">
          <div class="TodoList">
            <span>TodoList</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
ul {
  list-style: none;
  li {
    float: left;
  }
}
.menu {
  height: 50px;
  background-color: #ececec;
  width: 100%;
  position: absolute;
  top: 0;
  .HomeView,
  .TodoList,
  .CaiNiao {
    width: 200px;
    height: 30px;
    margin: 10px;
    background-color: antiquewhite;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
    text-align: center;
    span {
      line-height: 30px;
    }
  }
}
</style>
