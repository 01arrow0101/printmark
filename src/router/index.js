import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/main",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutPrintMark.vue"),
    },
    {
      path: "/products",
      name: "product",
      component: () => import("../views/ProductPrintMark.vue"),
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import("../views/TechnologyPrintMark.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/Contact.vue"),
    },
  ],
});

export default router;
