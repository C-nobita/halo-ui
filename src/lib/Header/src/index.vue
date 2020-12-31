<template>
  <div
    :ref="(dom) => (headerDom = dom)"
    class="halo_header halo_hover"
    :class="wraperTheme"
  >
    <div class="halo_header_wraper halo_none" :class="theme">
      <div class="halo_header_wraper_left"><slot name="left"></slot></div>
      <div class="halo_header_wraper_content" :class="theme">
        <Button
          @click="emit('itemClick', item)"
          type="custom"
          class="halo_header_wraper_content_item"
          v-for="(item, index) in headerList"
          :key="index"
          >{{ item.name }}</Button
        >
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import
import Button from "../../Button";
import { defineComponent, computed, getCurrentInstance, ref, nextTick } from "vue";

export default defineComponent({
  name: "halo-header",
  props: {
    type: {
      type: String,
      default: "",
    },
    headerList: {
      type: Array,
      default: () => [],
    },
    alwaysTop: {
      type: Boolean,
      default: false,
    },
    scrollHide: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Button,
  },
  setup(props) {
    const { emit } = getCurrentInstance();
    const theme = computed(() => [`halo_header_wraper_${props.type}`]);
    const addHeaderHideClass = ref(false);
    const wraperTheme = computed(() => [
      props.alwaysTop ? "halo_header_always_top" : "",
      addHeaderHideClass.value ? "halo_header_scroll_hide" : "",
    ]);
    const headerDom = ref(null);
    const onTop = ref(true);

    nextTick(() => {
      const { top, height } = headerDom.value.getBoundingClientRect();
      const scrollHandler = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > top + height - 10) {
          onTop.value = false;
          addHeaderHideClass.value = true;
        } else {
          onTop.value = true;
          addHeaderHideClass.value = false;
        }
      };
      const moveHandler = (e) => {
        if (onTop.value) return;
        const { clientY } = e;
        if (addHeaderHideClass.value) {
          if (clientY == top) {
            addHeaderHideClass.value = false;
          } else {
            addHeaderHideClass.value = true;
          }
        } else {
          if (clientY <= top + height) {
            addHeaderHideClass.value = false;
          } else {
            addHeaderHideClass.value = true;
          }
        }
      };
      if (props.scrollHide) {
        document.addEventListener("scroll", scrollHandler);
        document.addEventListener("mousemove", moveHandler);
      }
    });
    return {
      emit,
      theme,
      wraperTheme,
      headerDom,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_header {
  color: $color;
  width: 100%;
  height: 60px;
  background-color: $color;
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
    justify-content: space-around;
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
    &_left {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &_wraper_between {
    justify-content: space-between;
  }
  &_always_top {
    position: sticky;
    z-index: 99999;
    top: 0;
  }
  &_scroll_hide {
    transform: translateY(-100%);
  }
}
</style>
