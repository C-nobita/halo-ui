<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-radio-group
      class="demo_radioGroup"
      v-model:value="value"
      @change="changeHandler"
    >
      <halo-radio :lable="'aa'" @checked="checkedHandler">{{ 'aa' }}</halo-radio>

      <halo-radio :lable="'bb'" disabled>{{ 'bb(disabled)' }}</halo-radio>
    </halo-radio-group>
    <div>lable: <input type="text" v-model="value" /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref();
    const changeHandler = (params) => {
      console.log("Radio group value changed!", params);
    };
    const checkedHandler = (params) => {
      console.log("this Radio is checked!", params);
    };
    return {
      value,
      changeHandler,
      checkedHandler,
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
  &_radioGroup {
    width: 60%;
  }
}
</style>
