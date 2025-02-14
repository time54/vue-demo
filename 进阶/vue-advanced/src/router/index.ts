/*
 * @Author: taojinchao
 * @Date: 2022-04-01 16:23:01
 * @LastEditors: taojinchao
 * @LastEditTime: 2025-02-13 14:47:05
 * @Description: 
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/slot",
    name: "slot",
    component: () =>
      import(/* webpackChunkName: "插槽" */ "../views/SlotDemo.vue"),
  },
  {
    path: "/$on$emit",
    name: "$on$emit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/$on$emit.vue"),
  },
  {
    path: "/directivedemo",
    name: "directivedemo",
    component: () =>
      import(/* webpackChunkName: "自定义指令" */ "../views/DirectiveDemo.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
