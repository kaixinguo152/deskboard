import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/todolist",
      component: () => import("../views/TodoListView.vue"),
    },
  ],
});

export default router;
