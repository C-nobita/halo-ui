<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <div>
      <halo-switch :disabled="value2" v-model:on="value1"></halo-switch>
      value: {{ value1 }}
    </div>
    打开禁用另一个按钮
    <div>
      <halo-switch :disabled="value1" v-model:on="value2"></halo-switch>
      value: {{ value2 }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value1 = ref(false);
    const value2 = ref(true);
    return {
      value1,
      value2,
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
}
</style>
