import { createWebHistory, createRouter } from "vue-router";

import MainLayout from "@/layouts/Main.vue";

import Home from "@/views/Home.vue";
import Services from "@/views/Services.vue";
import Products from "@/views/Products.vue";
import Partners from "@/views/Partners.vue";
import Resources from "@/views/Resources.vue";
import Shop from "@/views/Shop.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainLayout,
    children: [
      // {
      //   path: "/",
      //   name: "Home",
      //   component: Home,
      // },
      {
        path: "/services",
        name: "Services",
        component: Services,
      },
      {
        path: "/products",
        name: "Products",
        component: Products,
      },
      {
        path: "/partners",
        name: "Partners",
        component: Partners,
      },
      {
        path: "/resources",
        name: "resources",
        component: Resources,
      },
      {
        path: "/shop",
        name: "Shop",
        component: Shop,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
