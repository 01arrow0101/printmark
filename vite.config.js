import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import svgLoader from "vite-svg-loader";
import Sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  base: "printmark",
  plugins: [
    vue(),
    vueDevTools(),
    Sitemap({
      hostname: "https://www.printmark.com.ua", // Ваш основний домен
      // Якщо у вас динамічні маршрути (наприклад, для кожного типу ріббона),
      // ви можете додати їх вручну:
      dynamicRoutes: [
        "/",
        "/products/ribbons",
        "/products/labels",
        "/about",
        "/contacts",
        "/in-line",
        "/products/ribbons/wax",
        "/products/ribbons/resin",
        "/products/ribbons/resin-textile",
        "/products/ribbons/resin-textile/silver",
        "/products/ribbons/resin-textile/gold",
        "/products/ribbons/resin-textile/blue-metallic",
        "/products/ribbons/resin-textile/red-metallic",
        "/products/ribbons/resin-textile/green-metallic",
        "/products/ribbons/hotstamp",
        "/products/labels/semi-gloss",
        "/products/labels/polypropylene",
        "/products/labels/thermo-eco",
        "/products/labels/thermo-top",
      ],
    }),
    svgLoader({
      svgoConfig: {
        // этот параметр для отображения Svg картинок
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
