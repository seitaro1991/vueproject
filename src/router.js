import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import Items from "./views/Items.vue";
import Project from "./views/Project.vue";
import BrandPage from "./views/BrandPage.vue";
import ProjectRegister from "./views/ProjectRegister.vue";
import ProductRegister from "./views/ProductRegister.vue";
import ImageRegister from "./views/ImageRegister.vue";
import Payment from "./views/Payment.vue";
import Thankyou from "./views/Thankyou.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    // {
    //   path: "/items",
    //   name: "items",
    //   component: Items
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    {
      path: "/project/:id",
      name: "project",
      component: Project
    },
    {
      path: "/brandpage/:id",
      name: "brandpage",
      component: BrandPage
    },
    {
      path: "/projectregister/:id",
      name: "projectregister",
      component: ProjectRegister
    },
    {
      path: "/productregister/:id",
      name: "productregister",
      component: ProductRegister
    },
    {
      path: "/imageregister/:id",
      name: "imageregister",
      component: ImageRegister
    },
    {
      path: "/payment",
      name: "payment",
      component: Payment
    },
    {
      path: "/thankyou",
      name: "thankyou",
      component: Thankyou
    },
    {
      path: "*",
      redirect: { name: "home" }
    }
  ]
});
