<template>
  <Teleport to="body">
    <div
      class="halo_dialong_overlay"
      :class="{ show_dialog: show }"
      @click.stop="overlayClick"
    >
      <div
        class="halo_dialong_wraper halo_hover"
        :class="{ show_dialog_wraper: show }"
        @click.stop
      >
        <div class="halo_dialong_wraper_content halo_none">
          <div class="content">{{ content }}</div>
          <Button
            type="custom"
            class="halo_dialong_wraper_content_btn"
            @click.stop="comfirmHandler"
            >{{ confirmTxt }}</Button
          >
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import Button from "../../Button";
import {
  defineComponent,
  getCurrentInstance,
  watch,
  ref,
  watchEffect,
  onBeforeUnmount,
} from "vue";
export default defineComponent({
  name: "halo-dialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    confirm: {
      type: Function,
      default: () => {},
    },
    content: {
      type: String,
      default: "",
    },
    confirmTxt: {
      type: String,
      default: "好的",
    },
    onClose: Function,
    oneTime: {
      type: Boolean,
      default: false,
    },
    clickOverlayCancel: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Button,
  },
  emits: ["update:visible"],
  setup(props) {
    const show = ref();
    let timer;
    watchEffect(() => {
      if (props.oneTime) {
        timer = setTimeout(() => {
          show.value = props.visible;
        });
      } else {
        show.value = props.visible;
      }
    });
    const { emit } = getCurrentInstance();
    watch(
      () => show.value,
      (val) => {
        if (!val) props.onClose && props.onClose();
      }
    );
    const overlayClick = () => {
      if (!props.clickOverlayCancel) return;
      if (props.oneTime) show.value = false;
      emit("update:visible", false);
    };
    const comfirmHandler = () => {
      props.confirm && props.confirm();
      if (props.oneTime) show.value = false;
    };
    onBeforeUnmount(() => {
      clearTimeout(timer);
    });
    return {
      overlayClick,
      show,
      comfirmHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_dialong_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: fade_out(black, 0.5);
  z-index: 99999;
  visibility: hidden;
  transition: visibility linear 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.halo_dialong_wraper {
  width: fit-content;
  height: auto;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  opacity: 0;
  transition: opacity linear 0.4s;
  max-width: 70%;
  .halo_dialong_wraper_content {
    color: $white;
    width: 100%;
    height: 100%;
    background-color: $color;
    padding: 16px;
    .content {
      width: fit-content;
      height: auto;
      margin-bottom: 15px;
      word-break: break-all;
    }
    &_btn {
      width: 100px;
      height: 40px;
      float: right;
    }
  }
}
.show_dialog_wraper {
  opacity: 1;
}
.show_dialog {
  visibility: visible;
}
</style>
