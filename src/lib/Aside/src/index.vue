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
          @click="emit('itemClick', item)"
          class="halo_aside_wraper_content_item"
          type="custom"
          v-for="(item, index) in asideList"
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
import { defineComponent, reactive, toRefs, getCurrentInstance, watchEffect } from "vue";
declare interface DataTypes {
  open: Boolean;
}
export default defineComponent({
  name: "halo-aside",
  props: {
    openVlaue: {
      type: Boolean,
      default: () => false,
    },
    asideList: {
      type: Array,
      default: [],
    },
  },
  components: {
    Button,
  },
  setup(props) {
    const { emit } = getCurrentInstance();
    const data: DataTypes = reactive({
      open: false,
    });
    watchEffect(() => {
      data.open = props.openVlaue;
    });
    return {
      ...toRefs(data),
      emit,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
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
