/*
 * @Descripttion: 🐉
 * @Author: xinxin
 * @Date: 2020-03-07 10:42:35
 * @LastEditTime: 2020-03-08 23:45:59
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "" */ "../views/About.vue")
  },
  {
    path: "/study",
    name: "Study",
    // route level code-splitting
    // this generates a separataboute chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "study" */ "../views/Study.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
