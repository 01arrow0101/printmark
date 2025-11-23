import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
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
      children: [
        {
          path: "ribbons",
          name: "Ribbons",
          component: () => import("@/components/Products/RibbonInfo.vue"),
          children: [
            {
              path: "wax",
              name: "Wax",
              component: () =>
                import("@/components/Products/Ribbon/RibbonWax.vue"),
            },
            {
              path: "wax-resin",
              name: "Wax-Resin",
              component: () =>
                import("@/components/Products/Ribbon/RibbonWaxResin.vue"),
            },
            {
              path: "resin",
              name: "Resin",
              component: () =>
                import("@/components/Products/Ribbon/RibbonResin.vue"),
            },
          ],
        },
        {
          path: "labels",
          name: "Labels",
          component: () => import("@/components/Products/LabelsInfo.vue"),
        },
      ],
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
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
