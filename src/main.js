import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import "./index.css";
import "ant-design-vue/dist/antd.css";

const vueApp = createApp(App);
vueApp.use(router);
vueApp.use(Antd);
vueApp.mount("#app");
