<template>
  <div class="menu-bar">
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

    <div class="message"><span>What path will we take,and what kind of pesion will we be.</span></div>
    <div class="message"><span>Developed by CodeFate</span></div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  li {
    float: left;
  }
}
.menu-bar {
  width: 100%;
  height: 50px;
  background-color: rgba(0,0,0,35%);
  backdrop-filter: blur(25px);
  position: absolute;
  top: 0;
  left: 0;
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

.message{
  height: 50px;
  align-content: center;
  text-align: center;
  float: left;
  margin: 0 30px;
  span{
    color: red;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
