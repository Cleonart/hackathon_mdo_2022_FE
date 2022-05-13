import ClinicDashboard from "./views/clinic_dashboard.vue";
import ClinicDashboardMain from "./views/clinic_dashboard_main.vue";
import Module from "./module.vue";

const routes = {
  path: "/clinic",
  component: Module,
  children: [
    {
      path: "",
      component: ClinicDashboard,
      children: [
        {
          path: "",
          component: ClinicDashboardMain,
        },
      ],
    },
  ],
};

export default routes;
