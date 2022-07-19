import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
  },

  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/ProjectView.vue"),
  },

  {
    path: "/testimonials",
    name: "Testimonial",
    component: () => import("../views/TestimonialView.vue"),
  },

  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
