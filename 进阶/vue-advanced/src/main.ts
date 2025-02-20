/*
 * @Author: taojinchao
 * @Date: 2022-04-01 16:23:01
 * @LastEditors: taojinchao
 * @LastEditTime: 2025-02-20 14:13:37
 * @Description: 
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setupGlobDirectives } from "./directives/index";

const app = createApp(App);

// 全局注册自定义指定
setupGlobDirectives(app);

app.use(store)
    .use(router)
    .mount("#app");
