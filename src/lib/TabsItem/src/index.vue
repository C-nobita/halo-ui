<template>
  <div class="halo_tabs_item" :class="theme"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from "vue";
export default defineComponent({
  name: "halo-tabs-item",
  props: {
    lable: [String, Number],
    name: [String, Number],
  },
  inject: ["currentTab", "tabs"],
  setup(props) {
    const currentTab = inject("currentTab");
    const tabs = inject("tabs");
    const theme = computed(() => {
      const currentInd = tabs.findIndex((item) => item.lable === currentTab.value);
      const ind = tabs.findIndex((item) => item.lable === props.lable);
      let classVar;
      if (ind === -1) classVar = "";
      else {
        if (ind < currentInd) classVar = "halo_tabs_item_left";
        else if (ind === currentInd) classVar = "halo_tabs_item_current";
        else classVar = "halo_tabs_item_right";
      }
      return classVar;
    });
    return {
      currentTab,
      theme,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_tabs_item {
  min-width: 500px;
  min-height: $h;
  top: 0;
  transition: all ease-in-out 0.6s;
  position: relative;
  display: inline-block;
}
.halo_tabs_item_left,
.halo_tabs_item_right {
  position: absolute;
  visibility: hidden;
  overflow: hidden;
}
.halo_tabs_item_left {
  left: -100%;
}
.halo_tabs_item_right {
  left: 100%;
}
.halo_tabs_item_current {
  left: 0;
}
</style>
