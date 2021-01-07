<template>
  <div class="halo_tabs halo_hover">
    <div class="halo_tabs_content halo_none">
      <div class="halo_tabs_content_header">
        <Button
          class="halo_tabs_content_header_item"
          type="custom"
          v-for="item in headerItems"
          :key="item.lable"
          @click="changeHandler(item)"
          >{{ item.name }}</Button
        >
      </div>
      <div class="halo_tabs_content_body halo_hover">
        <div class="halo_tabs_content_body_content halo_none">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../../Button";
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  watchEffect,
  provide,
  toRefs,
} from "vue";
export default defineComponent({
  name: "halo-tabs",
  components: {
    Button,
  },
  props: {
    tab: {
      type: [Number, String],
    },
  },
  children: ["default"],
  emits: ["update:tab", "change"],
  setup(props) {
    const headerItems = reactive([]);
    const { emit, slots } = getCurrentInstance();
    const children = slots["default"] ? slots["default"]() : [];

    const getHeaders = (children) => {
      const headersArr = [];
      children.forEach((vnode) => {
        if (vnode.children && typeof vnode.type !== "object") {
          headersArr.push(...getHeaders(vnode.children));
        } else if (typeof vnode.type === "object") {
          headersArr.push({
            name: vnode.props.name,
            lable: vnode.props.lable,
          });
        }
      });
      return headersArr;
    };

    const changeHandler = (item) => {
      if (props.tab === item.lable) return;
      emit("update:tab", item.lable);
      emit("change", item);
    };

    headerItems.splice.call(headerItems, 0, headerItems.length, ...getHeaders(children));
    watchEffect(() => {
      const ind = headerItems.findIndex((item) => item.lable === props.tab);
      if (ind === -1) {
        changeHandler(headerItems[0]);
      }
    });
    const provideVar = toRefs(props);
    provide("currentTab", provideVar.tab);
    provide("tabs", headerItems);

    return {
      headerItems,
      emit,
      changeHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_tabs {
  padding: 2px;
  &_content {
    background-color: $color;
    &_header {
      display: flex;
      overflow-x: auto;
      &_item {
        background-color: $color;
        height: $h;
        padding: 0 2px 0 0;
        flex-shrink: 0;
      }
    }
    &_body {
      overflow: hidden;
      padding-top: 2px;
      &_content {
        background-color: $color;
        position: relative;
        white-space: nowrap;
      }
    }
  }
}
</style>
