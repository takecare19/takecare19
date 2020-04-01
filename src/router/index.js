import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Main from "@/pages/Main";
import About from "@/pages/About";
import Submit from "@/pages/Submit";

const routes = [
  { path: "/", component: Main },
  { path: "/About", component: About },
  { path: "/Submit", component: Submit }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
