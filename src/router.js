import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Items from "./views/Items.vue";
import Project from "./views/Project.vue";
import BrandPage from "./views/BrandPage.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/items",
      name: "items",
      component: Items
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/project",
      name: "project",
      component: Project
    },
    {
      path: "/brandpage",
      name: "brandpage",
      component: BrandPage
    }
  ]
});
