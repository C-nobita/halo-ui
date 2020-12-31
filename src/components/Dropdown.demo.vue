<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-dropdown v-model:selectValue="value" :values="dropdownList"></halo-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref('')
    const dropdownList = ref(["123", "456"]);
    return {
      value,
      dropdownList
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
