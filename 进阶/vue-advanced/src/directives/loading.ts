import type { Directive, App } from "vue";

const loadingDirective: Directive = {
  updated(el, binding) {
    if (binding.value) {
      const div = document.createElement("div");
      div.innerText = "加载中。。。";
      div.setAttribute("id", "loading");
      div.style.position = "absolute";
      div.style.left = "0";
      div.style.top = "0";
      div.style.width = "100%";
      div.style.height = "100%";
      div.style.display = "flex";
      div.style.justifyContent = "center";
      div.style.alignItems = "center";
      div.style.color = "white";
      div.style.background = "rgba(0, 0, 0, .7)";
      document.body.append(div);
    } else {
      const div = document.getElementById("loading");
      div && document.body.removeChild(div);
    }
  },
};

// 导出 loading 指令
export function setupLoadingDirective(app: App) {
  app.directive("loading", loadingDirective);
}
