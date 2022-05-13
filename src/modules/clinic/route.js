import ClinicDashboard from "./views/clinic_dashboard.vue";
import ClinicDashboardMain from "./views/clinic_dashboard_main.vue";
import ClinicDashboardRegisterImmune from "./views/clinic_dashboard_register_vaccination.vue";
import ClinicLogin from "../clinic/loginClinic.vue";
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
    {
      path: "loginClinic",
      component: ClinicLogin,
    },
  ],
};

export default routes;
