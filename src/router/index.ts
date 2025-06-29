import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/plans",
      component: () => import("../views/PlanListView.vue"),
    },
    {
      path: "/planlist",
      component: () => import("../views/PlanList.vue"),
    },
  ],
});

export default router;
