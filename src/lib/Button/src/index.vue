<template>
  <button class="halo_button halo_hover">
    <div class="halo_button_wraper" :class="theme">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
declare interface PropsTypes {
  type: String;
  hoverLight: Boolean;
}
export default defineComponent({
  name: "halo-button",
  props: {
    type: {
      type: String,
      default: "normal",
    },
    hoverLight: {
      type: Boolean,
      default: true,
    },
  },
  setup(props: PropsTypes) {
    const theme = computed(() => [
      `halo_button_${props.type}`,
      props.hoverLight ? "" : "halo_none",
    ]);
    return {
      theme,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_button {
  padding: 0 16px;
  cursor: pointer;
  outline: none;
  background-color: rgba($white, 0.3);
  position: relative;
  transition: all linear 0.3s;
  padding: 2px;
  border: none;
  &_wraper {
    padding: 0 16px;
    background-color: $color;
    color: $white;
    overflow: hidden;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: rgba($white, 0.3);
    & > .halo_button_wraper {
      background-color: gray;
    }
    &:hover {
      border-color: $grey;
      background-color: rgba($white, 0.3);
    }
  }
}
.halo_button_normal {
  height: $h;
  width: auto;
}
.halo_button_custom {
  height: 100%;
  width: 100%;
}

@keyframes halo_spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
