<template>
<div class="halo_input_container">
  <span v-if="lable" class="lable">{{ lable }}</span>
  <div class="halo_input halo_hover" :class="disabled ? 'input_disabled' : ''">
    <div class="halo_input_wraper" :class="theme">
      <input
        :ref="(dom = originalEl = dom)"
        v-model="innerValue"
        :disabled="disabled"
        :type="innerType"
        class="halo_input_wraper_original"
        @input="emit('update:value', innerValue)"
      />
      <span
        v-if="showPassword && inputType === 'password'"
        v-show="innerValue.length"
        class="iconfont halo_input_wraper_icon"
        v-html="icon"
        @click="innerType = innerType === inputType ? 'text' : inputType"
      ></span>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, getCurrentInstance } from "vue";
export default defineComponent({
  name: "halo-input",
  props: {
    type: {
      type: String,
      default: "normal",
    },
    inputType: {
      type: String,
      default: "text",
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    lable: {
      type: String,
      default: ''
    }
  },
  emits: ["update:value"],
  setup(props) {
    const { emit } = getCurrentInstance();
    const innerValue = ref(props.value);
    const innerType = ref(props.inputType);
    const icon = computed(() => (innerType.value === "text" ? "&#xe71c;" : "&#xe718;"));
    const theme = computed(() => [`halo_input_wraper_${props.type}`]);
    const originalEl = ref(null);
    return {
      innerValue,
      theme,
      innerType,
      icon,
      emit,
      originalEl,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_input_container {
  display: flex;
  justify-content: center;
  align-items: center;
  .lable {
    margin-right: 6px;
    font-size: .8em;
    white-space: nowrap;
  }
}
.halo_input {
  height: 100%;
  padding: 2px;
  box-sizing: border-box;
  width: 100%;
  &_wraper {
    height: $h;
    width: 200px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    & > &_original[disabled] {
      cursor: not-allowed;
      background-color: gray;
    }
    &_original {
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000, $alpha: 0.6);
      outline: none;
      border: none;
      padding-left: 16px;
      padding-right: 24px;
      transition: background-color linear 0.2s;
      color: white;
    }
    &_icon {
      position: absolute;
      top: 50%;
      right: 6px;
      width: fit-content;
      transform: translateY(-50%);
      cursor: pointer;
      -webkit-user-select: none;
      user-select: none;
    }
    &_original:focus {
      background-color: rgba($color: #fff, $alpha: 0.6);
      color: black;
    }
    &_original:focus + &_icon {
      color: black;
    }
  }
}
.input_disabled {
  background-color: rgba($color: #fff, $alpha: 0.3);
}
.halo_input_wraper_custom {
  width: 100%;
  height: 100%;
}
</style>
