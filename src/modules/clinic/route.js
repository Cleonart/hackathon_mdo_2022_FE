import ClinicDashboard from "./views/clinic_dashboard.vue";
import ClinicDashboardMain from "./views/clinic_dashboard_main.vue";
import ClinicDashboardRegisterImmune from "./views/clinic_dashboard_register_vaccination";
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
        {
          path: "register_vaccination",
          component: ClinicDashboardRegisterImmune,
        },
      ],
    },
  ],
};

export default routes;
