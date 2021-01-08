<template>
  <div class="halo_aside halo_hover" :class="{ halo_aside_close: !open }">
    <div class="halo_aside_wraper halo_none" :class="theme">
      <div class="halo_aside_header">
        <slot name="header"></slot>
      </div>
      <div
        class="halo_aside_wraper_content halo_hover"
        :class="{ halo_aside_wraper_content_close: !open }"
        :ref="(dom) => (wraperEl = dom)"
      >
        <Button
          @click="itemClick(item, index)"
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
      <Button type="custom" :hoverLight="false" class="operator" @click="open = !open">
        <slot name="menu">
          <img class="operator_icon" :src="imgSrc" alt="" />
        </slot>
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../../Button";
import img from "../../../assets/aside.png";
import {
  defineComponent,
  reactive,
  toRefs,
  getCurrentInstance,
  watchEffect,
  computed,
  ref,
} from "vue";
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
    type: {
      type: String,
      default: "",
    },
  },
  components: {
    Button,
  },
  emits: ["itemClick"],
  setup(props) {
    const { emit } = getCurrentInstance();
    const data: DataTypes = reactive({
      open: false,
      imgSrc: img,
    });
    const theme = computed(() => [props.type ? `halo_aside_theme_${props.type}` : ""]);
    watchEffect(() => {
      data.open = props.openVlaue;
    });
    const wraperEl = ref(null);
    const itemClick = (item, index) => {
      emit("itemClick", item);
      wraperEl.value.scrollTo({
        left: 0,
        top:
          (wraperEl.value.offsetHeight / props.asideList.length) * (index + 2) -
          wraperEl.value.offsetHeight / 2,
        behavior: "smooth",
      });
    };
    return {
      ...toRefs(data),
      emit,
      theme,
      itemClick,
      wraperEl,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_aside {
  position: fixed;
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
        width: 6px;
        border-radius: 3px;
        background-color: #f5f5f5;
      }
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-image: -webkit-gradient(
          linear,
          left bottom,
          left top,
          color-stop(0.44, #123),
          color-stop(0.72, #456),
          color-stop(0.86, #789)
        );
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
      display: flex;
      &_icon {
        width: 20px;
      }
    }
  }
  &_header,
  &_footer {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    max-height: 25%;
    align-items: center;
  }
  &_theme_custom {
    height: 100%;
    width: 100%;
  }
}
.halo_aside_close {
  transform: translateX(-100%);
}
.icon {
  width: 20px;
  height: 20px;
}
</style>
