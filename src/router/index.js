import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        key: 'home',
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/Signup.vue"),
    },
    {
      path: "/activity",
      meta: {
        key: 'activity',
      },
      children: [
        {
          path: "/activity",
          name: "activity",
          component: () => import("../views/Activity.vue"),
        },
        {
          path: "/activity/add",
          name: "add",
          component: () => import("../views/FormActivity.vue"),
        },
        {
          path: "/activity/edit",
          name: "edit",
          component: () => import("../views/FormActivity.vue"),
        },
        {
          path: "/activity/detail",
          name: "detail",
          component: () => import("../views/DetailActivity.vue"),
        }
      ]
    },
  ],
})

export default router;
