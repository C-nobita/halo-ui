<template>
  <Teleport to="body">
    <div
      class="halo_dialong_overlay"
      :class="{ show_dialog: visible }"
      @click.stop="emit('update:visible', false)"
    >
      <div
        class="halo_dialong_wraper halo_hover"
        :class="{ show_dialog_wraper: visible }"
        @click.stop
      >
        <div class="halo_dialong_wraper_content halo_none">
          <div class="content">{{ content }}</div>
          <Button
            type="custom"
            class="halo_dialong_wraper_content_btn"
            @click.stop="comfirm"
            >{{ comfirmTxt }}</Button
          >
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
// import
import Button from "../../Button";
import { defineComponent, computed, watchEffect, reactive, toRefs } from "vue";
declare interface PropsTypes {
  visible: Boolean;
  comfirm: Function;
  content: String;
  comfirmTxt: String;
}
declare interface DataTypes {
  show: Boolean;
}
export default defineComponent({
  name: "halo-dialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    comfirm: {
      type: Function,
      default: (e) => {},
    },
    content: {
      type: String,
      default: "",
    },
    comfirmTxt: {
      type: String,
      default: "好的",
    },
  },
  components: {
    Button,
  },
  setup(props: PropsTypes, { emit }) {
    const data: DataTypes = reactive({
      show: false,
    });
    watchEffect(() => {
      data.show = props.visible;
    });

    const callDialog = () => {
      data.show = true;
    };

    return {
      ...toRefs(data),
      callDialog,
      emit,
    };
  },
});
</script>

<style lang="scss" scoped>
$color: #333;
$white: #fff;
.halo_dialong_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: fade_out(black, 0.5);
  z-index: 10;
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
  // border-radius: 6px;
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
