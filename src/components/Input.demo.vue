<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-input v-model:value="value1" />
    <div>value1: {{ value1 }}</div>
    <halo-input v-model:value="value2" inputType="password" showPassword lable="密码框" />
    <div>value2: {{ value2 }}</div>
    <halo-input
      v-model:value="value3"
      class="demo_input"
      type="custom"
      disabled
      lable="禁用框"
    />
    <div>value3: {{ value3 }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value1 = ref("123");
    const value2 = ref("123");
    const value3 = ref("123");
    return {
      value1,
      value2,
      value3,
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
  &_input {
    width: 300px;
    height: 30px;
  }
}
</style>
