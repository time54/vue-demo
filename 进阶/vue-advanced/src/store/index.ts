/*
 * @Author: taojinchao
 * @Date: 2022-04-01 16:23:01
 * @LastEditors: taojinchao
 * @LastEditTime: 2025-02-19 15:47:25
 * @Description: 数据仓库
 */
import { createStore } from "vuex";

// 定义 State 接口
interface State {
  count: number;
}

export default createStore<State>({
  // 数据仓库
  state() {
    return {
      count: 0
    };
  },
  // 从 store 中的 state 中派生出一些状态
  getters: {
    count: (state) => state.count*2
  },
  // 同步操作
  mutations: {
    add(state) {
      state.count++;
    }
  },
  // 异步操作，修改数据建议通过 mutations 的方法
  actions: {
    asyncAdd(context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    }
  },
  modules: {
  },
});
