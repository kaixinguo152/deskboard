import { createRouter, createWebHistory } from "vue-router";

const router = createRouter(
    {
      history: createWebHistory(),
      routes:[
        {
          path:"/",
          component: ()=>import("../views/HomeView.vue"),
        },
        {
          path:"/planlist",
          component: ()=>import("../views/PlanListView.vue"),
        }
      ]
    }
)

export default router;
