<template>
  <div class="halo_radio_group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, toRefs } from "vue";
export default defineComponent({
  name: "halo-radio-group",
  props: {
    value: [String, Number],
  },
  emits: ["update:value", "change"],
  setup(props) {
    const { value } = toRefs(props);
    provide("defaultValue", value);
    return {};
  },
});
</script>

<style lang="scss" scoped>
.halo_radio_group {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
