import Vue from "vue";
import VueRouter from "vue-router";
import articles from "@/views/articles/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/articles",
  },
  {
    path: `/articles/page/${1}`,
    redirect: "/articles",
  },
  {
    path: "/articles/page/:page?",
    alias: "/articles",
    name: "articles",
    component: articles,
    meta: { requiresAuth: true },
  },
  {
    path: "/articles/add",
    name: "addArticle",
    component: () => import("@/views/articles/add.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/articles/edit/:slug",
    name: "editArticle",
    component: () => import("@/views/articles/edit/_slug.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/auth/register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
