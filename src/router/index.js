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
            {
              path: "resin-textile",
              name: "Resin-Textile",
              component: () =>
                import("@/components/Products/RibbonResinTextile.vue"),
              children: [
                {
                  path: "silver",
                  name: "Silver",
                  component: () =>
                    import("@/components/Products/Ribbon/ResinTextile/RibbonSilver.vue"),
                },
                {
                  path: "gold",
                  name: "Gold",
                  component: () =>
                    import("@/components/Products/Ribbon//ResinTextile/RibbonGold.vue"),
                },
                {
                  path: "blue-metallic",
                  name: "Blue-Metallic",
                  component: () =>
                    import("@/components/Products/Ribbon/ResinTextile/RibbonBlueMetallic.vue"),
                },
                {
                  path: "green-metallic",
                  name: "Green-Metallic",
                  component: () =>
                    import("@/components/Products/Ribbon/ResinTextile/RibbonGreenMetallic.vue"),
                },
                {
                  path: "red-metallic",
                  name: "Red-Metallic",
                  component: () =>
                    import("@/components/Products/Ribbon/ResinTextile/RibbonRedMetallic.vue"),
                },
              ],
            },
            {
              path: "hotstamp",
            name: "HotStamp",
            component: () =>
              import("@/components/Products/Ribbon/HotStampRibbon.vue"),},
          ],
        },
        {
          path: "labels",
          name: "Labels",
          component: () => import("@/components/Products/LabelsInfo.vue"),
          children: [
            {
              path: "semi-gloss",
              name: "Semi-Gloss",
              component: () =>
                import("@/components/Products/Label/SemiGlossLabel.vue"),
            },
            {
              path: "polypropylene",
              name: "Polypropylene",
              component: () =>
                import("@/components/Products/Label/PolypropyleneLabel.vue"),
            },
            {
              path: "thermo-eco",
              name: "Thermo-Eco",
              component: () =>
                import("@/components/Products/Label/ThermoEcoLabel.vue"),
            },
            {
              path: "thermo-top",
              name: "Thermo-Top",
              component: () =>
                import("@/components/Products/Label/ThermoTopLabel.vue"),
            },
          ],
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
    {
      path: "/delivery",
      name: "delivery",
      component: () => import("../views/DeliveryPrintMark.vue"),
    },
    {
      path: "/production",
      name: "production",
      component: () => import("../views/ProductionPrintMark.vue"),
    },
    {
      path: "/custom-sizing",
      name: "custom-sizing",
      component: () => import("../views/CustomSizingPrintMark.vue"),
    },
    {
      path: "/certificates",
      name: "certificates",
      component: () => import("../views/CertificatesPrintMark.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
