import { createRouter, createWebHashHistory } from "vue-router";
import ParentHomeView from "../views/IndexParents.vue";
import ParentLoginView from "../views/LoginParents.vue";
import Index from "../views/Index.vue";

const routes = [
  {
    path: "/parents",
    name: "home",
    component: Index,
    children: [
      {
        path: "",
        name: "Home Parent",
        component: ParentHomeView,
      },
      {
        path: "login",
        name: "Login",
        component: ParentLoginView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
