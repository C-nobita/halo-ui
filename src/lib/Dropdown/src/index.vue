<template>
  <div class="relative" :style="`height: ${height}px; width: ${width}px`">
    <div
      :ref="(dom) => getDropdownEl(dom)"
      tabindex="0"
      class="halo_dropdown halo_hover"
      :class="theme"
    >
      <div
        class="halo_dropdown_wraper halo_none halo_hover"
        :style="{ height: open ? `${openHeight}px` : void 0 }"
      >
        <div class="halo_dropdown_wraper_item">{{ value || "请选择" }}</div>
        <div
          class="halo_dropdown_wraper_item"
          v-for="(item, index) in values"
          :key="index"
          @click="select(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../../Button";
import {
  defineComponent,
  computed,
  getCurrentInstance,
  onMounted,
  reactive,
  toRefs,
  watchEffect,
} from "vue";
declare interface DataTypes {
  open: Boolean;
  value: String;
  width: Number;
  height: Number;
  dropdownEl: HTMLElement;
}
export default defineComponent({
  name: "halo-dropdown",
  props: {
    type: {
      type: String,
      default: "normal",
    },
    values: {
      type: Array,
      default: [],
    },
    selectValue: {
      type: String,
      default: "",
    },
  },
  components: {
    Button,
  },
  setup(props) {
    const { emit } = getCurrentInstance();
    const data: DataTypes = reactive({
      open: false,
      value: "",
      width: 0,
      height: 0,
      dropdownEl: null,
    });
    const getDropdownEl = (dom) => (data.dropdownEl = dom);
    watchEffect(() => {
      data.value = props.selectValue;
    });
    const theme = computed(() => [`halo_dropdown_${props.type}`]);
    const openHeight = computed(() => {
      const oneHeight = 39;
      const height = oneHeight * props.values.length;
      return height || oneHeight;
    });
    onMounted(() => {
      data.dropdownEl.onfocus = () => {
        data.open = true;
      };
      data.dropdownEl.onblur = () => {
        data.open = false;
      };
      data.width = data.dropdownEl.offsetWidth;
      data.height = data.dropdownEl.offsetHeight;
    });
    const select = (item) => {
      if (data.open) {
        data.dropdownEl.blur();
        emit("update:selectValue", item);
      }
    };
    return {
      ...toRefs(data),
      emit,
      theme,
      openHeight,
      select,
      getDropdownEl,
    };
  },
});
</script>

<style lang="scss" scoped>
$h: 39px;
$color: #333;
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
