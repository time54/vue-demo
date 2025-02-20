<!--
 * @Author: taojinchao
 * @Date: 2025-02-19 15:08:29
 * @LastEditors: taojinchao
 * @LastEditTime: 2025-02-20 15:08:56
 * @Description: 
-->
<template>
    <div>
        <p>count: {{ count }}</p>
        <p>doubleCount: {{ doubleCount }}</p>
        <button @click="add">add</button>
        <br/> <br/>
        <button @click="asyncAdd">asyncAdd</button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const count = computed(() => store.state.count)

const doubleCount = computed(() => store.getters.count)

const add = () => {
    store.commit('add')
}

const asyncAdd = () => {
    store.dispatch('asyncAdd')
}

</script>
