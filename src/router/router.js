import Vue from "vue";
import Router from "vue-router";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "*",
    redirect: "/"
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
