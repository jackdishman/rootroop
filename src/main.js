import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.ts";

import "./styles/app.css"; // Here

createApp(App).use(router).mount("#app");
