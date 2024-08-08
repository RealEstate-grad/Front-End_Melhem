import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/CSS/Style.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

createApp(App).use(store).use(router).mount("#app");
