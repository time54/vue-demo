import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setupGlobDirectives } from "./directives/index";

const app = createApp(App);
setupGlobDirectives(app); // 全局注册自定义指定
app.use(store).use(router).mount("#app");
