<!--
 * @Author: taojinchao
 * @Date: 2025-02-13 10:37:22
 * @LastEditors: taojinchao
 * @LastEditTime: 2025-02-13 14:45:10
 * @Description: 
-->
<template>
  <div>
    <!-- 1.默认插槽：父组件不传值时，默认显示'默认插槽内容'-->
    <slot>默认插槽内容</slot>
    <!-- 2. 具名插槽 -->
    <slot name="header">header</slot>
    <!-- 3. 条件插槽: $slots 组件所传入插槽的对象-->
    <slot v-if="$slots.term" name="term">term</slot>
    <!-- 4. 动态插槽名-->
    <slot :name="slotName">动态插槽名</slot>
    <!-- 5. 作用域插槽 -->
    <slot name="scope" :msg="msg">作用域插槽</slot>
    <ul>
      <li v-for="item in items" :key="item.body">
        <slot name="item" v-bind="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const slotName = "dynamicSlotName";
  const msg = "scope";
  // 作用域插槽扩展：高级列表组件示例【单个列表元素内容和样式的由父组件控制】
  const items = [
    { body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
    { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 }
  ];
</script>
