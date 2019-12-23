import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/colaborador",
    name: "colaborador",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Colaborador/Index.vue")
  },
  {
    path: "/colaborador/create",
    name: "colaboradorCreate",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Colaborador/Create.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
