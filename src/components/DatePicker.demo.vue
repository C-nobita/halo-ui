<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-datepicker v-model:date="date" @picked="pickedHandler"></halo-datepicker>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const date = ref(new Date());
    const pickedHandler = () => {
      console.log(date.value);
    };
    return {
      date,
      pickedHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo {
  position: relative;
  height: 200px;
  // overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
