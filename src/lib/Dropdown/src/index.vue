<template>
  <div class="relative" :style="`height: ${height}px; width: ${width}px`">
    <div ref="dropdown" tabindex="0" class="halo_dropdown halo_hover" :class="theme">
    <div
      class="halo_dropdown_wraper halo_none halo_hover"
      :style="{ height: open ? `${openHeight}px` : void 0 }"
    >
      <div class="halo_dropdown_wraper_item">{{ value }}</div>
      <div class="halo_dropdown_wraper_item" v-for="(item, index) in values" :key="index" @click="select(item)">
        {{ item }}
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
// import
import Button from "../../Button";
import { defineComponent, computed, getCurrentInstance, onMounted, reactive, toRefs, watchEffect } from "vue";
export default defineComponent({
  name: "halo-dropdown",
  props: {
    type: {
      type: String,
      default: "normal",
    },
    values: {
      type: Array,
      default: [""],
    },
    selectValue: {
      type: String,
      default: ''
    }
  },
  components: {
    Button,
  },
  setup(props, { emit }) {
    const ctx = getCurrentInstance();
    const data = reactive({
      open: false,
      value: '',
      width: 0,
      height: 0,
    });
    watchEffect(() => {
      data.value = props.selectValue
    })
    const theme = computed(() => [`halo_dropdown_${props.type}`]);
    const openHeight = computed(() => {
      const oneHeight = 39;
      const height = oneHeight * props.values.length;
      return height || oneHeight;
    });
    onMounted(() => {
      ctx.refs.dropdown.onfocus = () => {
        data.open = true;
      }
      ctx.refs.dropdown.onblur = () => {
        data.open = false;
      }
      data.width = ctx.refs.dropdown.offsetWidth
      data.height = ctx.refs.dropdown.offsetHeight
    });
    const select = (item) => {
      if (data.open) {
        ctx.refs.dropdown.blur();
        emit("update:selectValue", item)
      }
    };
    return {
      ...toRefs(data),
      emit,
      theme,
      openHeight,
      select,
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
.halo_dropdown {
  position: absolute;
  background-color: rgba($white, 0.3);
  padding: 2px;
  box-sizing: border-box;
  outline: none;
  &_wraper {
    background-color: $color;
    height: $h;
    width: 100%;
    transition: height 0.6s ease-in-out;
    overflow: hidden;
    &_item {
      cursor: pointer;
      padding: 0 16px;
      width: 120px;
      height: $h;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: white;
    }
  }
}
.halo_dropdown_normal {
  // height: $h;
  width: fit-content;
}
.halo_dropdown_custom {
  height: 100%;
  width: 100%;
}
.relative {
  position: relative;
}
</style>
