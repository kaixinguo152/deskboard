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
          <div class="Homeview">
            <span>HomeView</span>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/planlist">
          <div class="PlanList">
            <span>PlanList</span>
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
  .Homeview,
  .PlanList,
  .CaiNiao {
    width: 200px;
    height: 30px;
    margin: 10px;
    background-color: antiquewhite;
    // position: relative;
    // top: 0;
    // left: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
    text-align: center;
    span {
      line-height: 30px;
    }
  }
}
</style>
