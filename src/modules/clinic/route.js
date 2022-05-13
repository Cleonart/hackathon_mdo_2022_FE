import ClinicDashboard from "./views/clinic_dashboard.vue"
import Module from "./module.vue"

const routes = {
    path: "/clinic",
    component: Module,
    children: [
        {
            path: "",
            component: ClinicDashboard,
        }
    ]
}

export default routes