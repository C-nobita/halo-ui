<template>
  <div class="halo_radio" @click="checkHandler">
    <input :checked="ckecked" :disabled="disabled" class="original_el" type="radio" />
    <div class="halo_radio_check_container halo_hover">
      <div class="halo_radio_check_container_content halo_none">
        <div class="halo_radio_check_container_content_check"></div>
      </div>
    </div>
    <div class="halo_radio_lable"><slot></slot></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  getCurrentInstance,
  inject,
  watchEffect,
  watch,
} from "vue";
export default defineComponent({
  name: "halo-radio",
  props: {
    disabled: Boolean,
    lable: [String, Number],
  },
  emits: ["checked"],
  setup(props) {
    const defaultValue = inject("defaultValue");
    const ckecked = ref(false);
    const ctx = getCurrentInstance();
    const parent = ctx.parent;
    watchEffect(() => {
      if (defaultValue.value == props.lable) {
        ckecked.value = true;
      } else ckecked.value = false;
    });
    watch(
      () => ckecked.value,
      (val) => {
        if (val) {
          parent.emit && parent.emit("update:value", props.lable);
          parent.emit && parent.emit("change", props.lable);
          ctx.emit("checked", props.lable);
        }
      }
    );
    const checkHandler = () => {
      if (props.disabled) return;
      ckecked.value = true;
    };
    return {
      ckecked,
      checkHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_radio {
  padding-left: 24px;
  position: relative;
  cursor: pointer;
  .original_el {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
  }
  .original_el[disabled] + &_check_container,
  .original_el[disabled] + &_check_container + &_lable {
    cursor: not-allowed;
  }
  .original_el[disabled] + &_check_container {
    background-color: rgba($color: $white, $alpha: 0.3);
  }
  .original_el[disabled] + &_check_container > &_check_container_content {
    background-color: gray;
  }
  .original_el[disabled]
    + &_check_container
    > &_check_container_content
    > &_check_container_content_check {
    background-color: seashell;
  }
  .original_el:checked
    + &_check_container
    > &_check_container_content
    > &_check_container_content_check {
    width: 60%;
    height: 60%;
  }
  &_check_container {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    padding: 2px;
    &_content {
      width: 100%;
      height: 100%;
      background-color: $color;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      &_check {
        width: 0;
        height: 0;
        background-color: white;
        transition: all linear 0.2s;
      }
    }
  }
  &_lable {
    margin-left: 4px;
    height: 24px;
    line-height: 24px;
    position: relative;
    z-index: 1;
  }
}
</style>
