import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style.css";
import "./assets/style/global.scss";

createApp(App).use(store).use(router).mount("#app");
