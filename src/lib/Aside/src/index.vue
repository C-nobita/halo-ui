<template>
  <div class="halo_aside halo_hover" :class="{ halo_aside_close: !open }">
    <div class="halo_aside_wraper halo_none">
      <div class="halo_aside_header">
        <slot name="header"></slot>
      </div>
      <div
        class="halo_aside_wraper_content halo_hover"
        :class="{ halo_aside_wraper_content_close: !open }"
      >
        <Button
          @click="open = false"
          class="halo_aside_wraper_content_item"
          type="custom"
          v-for="(item, index) in headerList"
          :key="index"
        >
          {{ item.name }}</Button
        >
      </div>
      <div class="halo_aside_footer">
        <slot name="footer"></slot>
      </div>
      <Button type="custom" class="operator" @click="open = !open">icon</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../../Button";
import { defineComponent, computed, reactive, toRefs } from "vue";
declare interface PropsTypes {
  centralize: Boolean;
  loading: Boolean;
  headerList: Array<Object>;
}
declare interface DataTypes {
  open: Boolean;
}
export default defineComponent({
  name: "halo-aside",
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
  setup(props: PropsTypes, { emit }) {
    const data: DataTypes = reactive({
      open: false,
    });
    return {
      ...toRefs(data),
      emit,
    };
  },
});
</script>

<style lang="scss" scoped>
$h: 39px;
$color: #333;
.halo_aside {
  position: absolute;
  top: 0;
  z-index: 999;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.halo_aside_close {
  transform: translateX(-100%);
}
</style>
