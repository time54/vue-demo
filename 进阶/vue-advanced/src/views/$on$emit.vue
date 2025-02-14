<template>
  <div>
    <!-- my-events: 自定义事件
      事件定义【可以给不同的自定义事件绑定同一个方法】: 将方法加入到 vue 实例上
    -->
    <BasicButton @my-events="handleEvents" :msg="test"></BasicButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BasicButton from "../components/BasicButton.vue";

export default defineComponent({
  name: "OnEmit",
  components: {
    BasicButton,
  },
  setup() {
    let isShow = ref(true);
    let test = ref("基础组件");
    // eslint-disable-next-line
    const handleEvents = (param: any) => {
      console.log(param);
      test.value = "kkkk";
    };
    return {
      isShow,
      test,
      handleEvents,
    };
  },
});
</script>

<style scoped></style>
