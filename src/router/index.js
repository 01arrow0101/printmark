import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: { title: "PrintMark — Етикетки та ріббони в Україні" },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutPrintMark.vue"),
      meta: { title: "PrintMark — Про нас" },
    },
    {
      path: "/products",
      name: "product",
      component: () => import("../views/ProductPrintMark.vue"),
      meta: { title: "PrintMark — Продукти" },
      children: [
        {
          path: "ribbons",
          name: "Ribbons",
          component: () => import("@/components/Products/RibbonInfo.vue"),
          meta: {
            title: "Купити ріббони (термотрансферна стрічка) | PrintMark",
          },
          children: [
            {
              path: "wax",
              name: "Wax",
              component: () =>
                import("@/components/Products/Ribbon/RibbonWax.vue"),
              meta: {
                title:
                  "Купити ріббони WAX (термотрансферна стрічка) | PrintMark",
              },
            },
            {
              path: "wax-resin",
              name: "Wax-Resin",
              component: () =>
                import("@/components/Products/Ribbon/RibbonWaxResin.vue"),
              meta: {
                title:
                  "Купити ріббони WAX-RESIN (термотрансферна стрічка) | PrintMark",
              },
            },
            {
              path: "resin",
              name: "Resin",
              component: () =>
                import("@/components/Products/Ribbon/RibbonResin.vue"),
              meta: {
                title:
                  "Купити ріббони RESIN (термотрансферна стрічка) | PrintMark",
              },
            },
            {
              path: "resin-textile",
              name: "Resin-Textile",
              component: () =>
                import("@/components/Products/RibbonResinTextile.vue"),
              meta: {
                title:
                  "Купити ріббони RESIN-TEXTILE (термотрансферна стрічка) | PrintMark",
              },
              children: [
                {
                  path: "silver",
                  name: "Silver",
                  component: () =>
                    import(
                      "@/components/Products/Ribbon/ResinTextile/RibbonSilver.vue"
                    ),
                  meta: {
                    title:
                      "Купити ріббони RESIN-TEXTILE  СРІБЛО (термотрансферна стрічка) | PrintMark",
                  },
                },
                {
                  path: "gold",
                  name: "Gold",
                  component: () =>
                    import(
                      "@/components/Products/Ribbon//ResinTextile/RibbonGold.vue"
                    ),
                  meta: {
                    title:
                      "Купити ріббони RESIN-TEXTILE ЗОЛОТО (термотрансферна стрічка) | PrintMark",
                  },
                },
                {
                  path: "blue-metallic",
                  name: "Blue-Metallic",
                  component: () =>
                    import(
                      "@/components/Products/Ribbon/ResinTextile/RibbonBlueMetallic.vue"
                    ),
                  meta: {
                    title:
                      "Купити ріббони RESIN-TEXTILE СИНІЙ (термотрансферна стрічка) | PrintMark",
                  },
                },
                {
                  path: "green-metallic",
                  name: "Green-Metallic",
                  component: () =>
                    import(
                      "@/components/Products/Ribbon/ResinTextile/RibbonGreenMetallic.vue"
                    ),
                  meta: {
                    title:
                      "Купити ріббони RESIN-TEXTILE ЗЕЛЕНИЙ (термотрансферна стрічка) | PrintMark",
                  },
                },
                {
                  path: "red-metallic",
                  name: "Red-Metallic",
                  component: () =>
                    import(
                      "@/components/Products/Ribbon/ResinTextile/RibbonRedMetallic.vue"
                    ),
                  meta: {
                    title:
                      "Купити ріббони RESIN-TEXTILE ЗОЛОТО (термотрансферна стрічка) | PrintMark",
                  },
                },
              ],
            },
            {
              path: "hotstamp",
              name: "HotStamp",
              component: () =>
                import("@/components/Products/Ribbon/HotStampRibbon.vue"),
              meta: {
                title:
                  "Купити ріббони HOTSTAMP (термотрансферна стрічка) | PrintMark",
              },
            },
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
              meta: {
                title: "Самоклейні етикетки в рулонах | Виробництво PrintMark",
              },
            },
            {
              path: "polypropylene",
              name: "Polypropylene",
              component: () =>
                import("@/components/Products/Label/PolypropyleneLabel.vue"),
              meta: {
                title:
                  "Самоклейні етикетки в рулонах з поліпропілену | Виробництво PrintMark",
              },
            },
            {
              path: "thermo-eco",
              name: "Thermo-Eco",
              component: () =>
                import("@/components/Products/Label/ThermoEcoLabel.vue"),
              meta: {
                title:
                  "Самоклейні етикетки в рулонах Термо-ЕКО | Виробництво PrintMark",
              },
            },
            {
              path: "thermo-top",
              name: "Thermo-Top",
              component: () =>
                import("@/components/Products/Label/ThermoTopLabel.vue"),
              meta: {
                title:
                  "Самоклейні етикетки в рулонах Термо-ТОП | Виробництво PrintMark",
              },
            },
          ],
        },
      ],
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import("../views/TechnologyPrintMark.vue"),
      meta: { title: "PrintMark — Технології маркування" },
    },
    {
      path: "/in-line",
      name: "In-Line",
      component: () => import("../views/InLinePrintMark.vue"),
      meta: {
        title: "In-Line ріббони Near-Edge для Videojet, Domino | PrintMark",
      },
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/Contact.vue"),
      meta: { title: "PrintMark — Контакти" },
    },
    {
      path: "/delivery",
      name: "delivery",
      component: () => import("../views/DeliveryPrintMark.vue"),
      meta: { title: "PrintMark — Доставка" },
    },
    {
      path: "/production",
      name: "production",
      component: () => import("../views/ProductionPrintMark.vue"),
      meta: { title: "PrintMark — Виробництво" },
    },
    {
      path: "/custom-sizing",
      name: "custom-sizing",
      component: () => import("../views/CustomSizingPrintMark.vue"),
      meta: { title: "PrintMark — Нестандартні Розміри" },
    },
    {
      path: "/certificates",
      name: "certificates",
      component: () => import("../views/CertificatesPrintMark.vue"),
      meta: { title: "PrintMark — Сертифікати" },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

// ПРАВИЛЬНОЕ МЕСТО ДЛЯ ГУАРДА (ВНЕ createRouter)
router.beforeEach((to, from, next) => {
  // Находим самый глубокий заголовок (для вложенных путей)
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else {
    document.title = "PrintMark — Етикетки та ріббони";
  }

  next();
});

export default router;
