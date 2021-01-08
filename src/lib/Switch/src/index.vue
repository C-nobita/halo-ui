<template>
  <div
    :ref="(dom) => (rootEL = dom)"
    class="halo_switch halo_hover"
    @click="originalEl.click()"
    :disabled="disabled"
  >
    <input
      :ref="(dom) => (originalEl = dom)"
      v-model="value"
      :disabled="disabled"
      class="halo_switch_original_el"
      type="checkbox"
      true-value="true"
      @change="emit('update:on', value)"
    />
    <div :style="style" class="halo_switch_content halo_none">
      <div class="halo_switch_content_silder halo_hover" :class="value ? 'on' : 'off'">
        <div class="halo_switch_content_silder_content halo_none"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, getCurrentInstance, watchEffect } from "vue";
export default defineComponent({
  name: "halo-switch",
  props: {
    disabled: Boolean,
    on: Boolean,
  },
  emits: ["update:on"],
  setup(props) {
    const { emit } = getCurrentInstance();
    const rootEL = ref(null);
    const style = ref("");
    const value = ref(false);
    watchEffect(() => {
      value.value = Boolean(props.on);
    });
    const originalEl = ref(null);
    onMounted(() => {
      const { height, width } = rootEL.value.getBoundingClientRect();
      style.value = `height: ${height - 4}px; width: ${width - 4}px`;
    });
    return {
      rootEL,
      style,
      value,
      emit,
      originalEl,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_switch {
  cursor: pointer;
  position: relative;
  padding: 2px;
  width: 56px;
  height: 10px;
  box-sizing: border-box;
  display: flex;
  &_original_el {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  &[disabled="true"],
  &_original_el[disabled] + &_content > &_content_silder {
    cursor: not-allowed;
    background-color: rgba($color: $white, $alpha: 0.3);
  }
  &_original_el[disabled] + &_content,
  &_original_el[disabled] + &_content > &_content_silder > &_content_silder_content {
    background-color: gray;
  }
  &_content {
    background: $color;
    box-sizing: border-box;
    position: relative;
    &_silder {
      text-align: center;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      transition: left ease-in-out 0.6s;
      padding: 2px;
      &_content {
        width: 16px;
        height: 16px;
        background-color: $color;
      }
    }
    .off {
      left: 0;
    }
    .on {
      left: calc(100% - 20px);
    }
  }
}
</style>
