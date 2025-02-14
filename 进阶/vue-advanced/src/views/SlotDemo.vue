<!--
 * @Author: taojinchao
 * @Date: 2022-04-01 16:23:01
 * @LastEditors: taojinchao
 * @LastEditTime: 2025-02-13 14:58:17
 * @Description: 插槽：使用于可服用组件的内容定制，方便父组件根据需求提供不同的内容
-->
<template>
  <div class="about">
    <slot-content>
      <!-- 1. 默认插槽可以直接写在组件标签内 -->
      <div>
        <p>默认插槽：{{ msg }}</p>
      </div>
      <!-- 2. 具名插槽 -->
      <template #header>
        <p>具名插槽: header</p>
      </template>
      <!-- 3. 条件插槽 -->
      <template #term>
        <p>条件插槽： term</p>
      </template>
      <!-- 4. 动态插槽名-->
      <template #[slotName]>
        <p>动态插槽名： {{ slotName }}</p>
      </template>
      <!-- 5. 作用域插槽 -->
      <template #scope="slotProps">
        <p>作用域插槽： {{ slotProps.msg }}</p>
      </template>
      <!-- 作用域插槽扩展：高级列表组件示例【单个列表元素内容和样式的由父组件控制】-->
      <template #item="{ body, username, likes }">
        <div>
          <h3>{{ body }}</h3>
          <p>by {{ username }} | {{ likes }} </p>
        </div>
      </template>
    </slot-content>
  </div>
</template>

<script setup lang="ts">
  import SlotContent from "../components/SlotContent.vue";

  const msg = "插槽内容";
  const slotName = "dynamicSlotName";
</script>
