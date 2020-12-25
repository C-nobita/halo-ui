<template>
  <div
    class="lighting_aside lighting_light_hover"
    :class="{ lighting_aside_close: !open }"
  >
    <div class="lighting_aside_wraper lighting_none">
      <div class="lighting_aside_header"></div>
      <div
        class="lighting_aside_wraper_content lighting_light_hover"
        :class="{ lighting_aside_wraper_content_close: !open }"
      >
        <Button
          @click="open = false"
          class="lighting_aside_wraper_content_item"
          type="custom"
          v-for="(item, index) in headerList"
          :key="index"
          >{{ item.name }}</Button
        >
      </div>
      <div class="lighting_aside_footer"></div>
      <Button type="custom" class="operator" @click="open = !open">icon</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../../Button";
import { defineComponent, computed, reactive, toRefs } from "vue";
export default defineComponent({
  name: "lighting-aside",
  props: {
    centralize: Boolean,
    loading: Boolean,
    headerList: {
      type: Array,
      default: [
        { name: "haha", url: "/sadas" },
        { name: "haha", url: "/sadas" },
        { name: "haha", url: "/sadas" },
        { name: "haha", url: "/sadas" },
        { name: "haha", url: "/sadas" },
        { name: "haha", url: "/sadas" },
        { name: "haha", url: "/sadas" },
        { name: "haha", url: "/sadas" },
        { name: "haha", url: "/sadas" },
        { name: "haha", url: "/sadas" },
        { name: "haha", url: "/sadas" },
        { name: "haha", url: "/sadas" },
        { name: "haha", url: "/sadas" },
      ],
    },
  },
  components: {
    Button,
  },
  setup(props, { emit }) {
    // const theme = computed(() => [props.centralize ? "centralize" : ""]);
    const data = reactive({
      open: false,
    });
    return {
      ...toRefs(data),
      emit,
      // theme,
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
.lighting_aside {
  position: absolute;
  top: 0;
  padding-right: 2px;
  transition: transform 0.9s;
  &_wraper {
    width: 220px;
    height: 100vh;
    background-color: $color;
    position: relative;
    display: flex;
    flex-direction: column;
    &_content {
      opacity: 1;
      transition: opacity 0.3s linear;
      overflow-y: auto;
      &_item {
        width: 100%;
        height: $h;
        padding: 0;
      }
      &_item:hover {
        padding: 2px 0;
        // height: 35px;
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
    &_content_close {
      opacity: 0;
    }
    .operator {
      position: absolute;
      left: 100%;
      bottom: 60px;
      padding-left: 0;
      background-color: $color;
    }
  }
  &_header,
  &_footer {
    width: 100%;
    height: 200px;
  }
}
.lighting_aside_close {
  transform: translateX(-100%);
}
</style>
