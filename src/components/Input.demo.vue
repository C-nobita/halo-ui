<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-input v-model:value="value1" inputType="password" showPassword></halo-input>
    <div>value: {{ value1 }}</div>
    <halo-input v-model:value="value2" disabled></halo-input>
    <div>value: {{ value2 }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value1 = ref()
    const value2 = ref(123)
    return {
      value1,
      value2
    };
  },
});
</script>

<style lang="scss" scoped>
.demo {
  position: relative;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
</style>
