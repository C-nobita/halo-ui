<template>
  <div class="lighting_header lighting_light_hover">
    <div class="lighting_header_wraper lighting_none">
      <div class="lighting_header_wraper_content" :class="theme">
        <slot name="left"></slot>
        <Button
          type="custom"
          class="lighting_header_wraper_content_item"
          v-for="(item, index) in headerList"
          :key="index"
          >{{ item }}</Button
        >
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import
import Button from "../../Button";
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "lighting-header",
  props: {
    centralize: Boolean,
    loading: Boolean,
    headerList: {
      type: Array,
      default: [],
    },
  },
  components: {
    Button,
  },
  setup(props, { emit }) {
    const theme = computed(() => [props.centralize ? 'centralize' : ''])
    return {
      emit,
      theme,
    };
  },
});
</script>

<style lang="scss" scoped>
$h: 39px;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
$white: #fff;
.lighting_header {
  color: $color;
  width: 100%;
  height: 60px;
  background-color: rgba($white, 0.3);
  box-sizing: border-box;
  overflow: hidden;
  transition: all linear 0.6s;
  padding: 0 0 2px;
  &_wraper {
    height: 100%;
    width: 100%;
    background-color: $color;
    color: $white;
    display: flex;
    justify-content: flex-end;
    &_content {
      &_item {
        width: 150px;
        padding: 0;
        text-align: center;
        height: 100%;
      }
      &_item:hover {
        padding: 0 2px;
      }
    }
  }
}
.centralize {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
</style>
