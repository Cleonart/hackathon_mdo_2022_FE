import { createRouter, createWebHashHistory } from "vue-router";
import Clinic from "../modules/clinic";
import Parents from "../modules/parents";

const routes = [
  Clinic.route,
  Parents.route,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
