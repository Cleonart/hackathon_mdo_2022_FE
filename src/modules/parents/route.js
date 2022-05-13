import Navigation from "./components/parent_navigation.vue";
import ParentLoginView from "./components/parent_login.vue";
import ParentDashboard from "./views/parents_dashboard.vue";
import ParentDashboardMain from "./views/parents_dashboard_main.vue";
import ParentDashboardAccount from "./views/parents_dashboard_account.vue";
import Module from "./module.vue";

const routes = {
  path: "/parents",
  name: "Parents",
  component: Module,
  children: [
    {
      path: "",
      name: "Parents Home",
      component: ParentDashboard,
      children: [
        {
          path: "",
          name: "Parents Main",
          component: ParentDashboardMain,
        },
        {
          path: "account",
          name: "Parents Account",
          component: ParentDashboardAccount,
        },
      ],
    },
    {
      path: "login",
      name: "Parents Login",
      component: ParentLoginView,
    },
  ],
};

export default routes;
