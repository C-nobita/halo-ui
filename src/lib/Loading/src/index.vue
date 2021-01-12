<template>
  <div class="halo_loading halo_hover">
    <span class="halo_loading_text halo_none"><slot></slot></span>
    <div class="halo_loading_wraper halo_none"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "halo-loading",
  props: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_loading {
  height: 60px;
  width: 60px;
  box-sizing: border-box;
  padding: 2px;
  border-radius: 50%;
  background-color: $color;
  overflow: hidden;
  position: relative;
  &_wraper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border-width: 6px;
    border-style: solid;
    border-color: transparent;
    background-color: $color;
    border-top-color: white;
    animation: rotate 1.6s infinite ease-in-out;
  }
  &_text {
    z-index: 1;
    font-size: 0.5em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
