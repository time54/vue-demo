<!--
 * @Author: taojinchao
 * @Date: 2022-04-01 16:23:01
 * @LastEditors: taojinchao
 * @LastEditTime: 2025-02-12 16:45:48
 * @Description: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import HelloWorld from "../components/HelloWorld.vue";

  export default defineComponent({
    name: "HomeView",
    components: {
      HelloWorld,
    },
  });
</script>
