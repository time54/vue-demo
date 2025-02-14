<template>
  <div>
    <div v-loading="isLoading">{{ data }}</div>
    <button @click="update">更新</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DirectiveDemo",
  setup() {
    let isLoading = ref(false);
    let data = ref("");
    const update = () => {
      isLoading.value = true;
      setTimeout(() => {
        data.value = "用户数据"; // 模拟数据返回
        isLoading.value = false;
      }, 2000);
    };
    return {
      isLoading,
      data,
      update,
    };
  },
});
</script>

<style scoped></style>
