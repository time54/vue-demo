<template>
  <div @click="boost">{{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from "vue";

export default defineComponent({
  name: "BasicButton",
  props: {
    msg: String,
  },
  setup(props, context) {
    const boost = () => {
      /*事件消费
       * vm.$emit(eventName, […args])
       * eventName: string
       * […args]: 方法参数
       */
      context.emit("my-events", "my params");
    };
    onUpdated(() => {
      console.log("onUpdated");
    });
    return {
      boost,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
