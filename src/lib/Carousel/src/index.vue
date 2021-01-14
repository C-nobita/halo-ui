<template>
  <div class="halo_carousel halo_hover">
    <div class="halo_carousel_content halo_none">
      <div
        class="halo_carousel_content_item"
        :class="{
          item_passed: true
            ? currentIndex === 0
              ? index === itemList.length - 1
              : currentIndex - 1 === index
            : currentIndex - 1 === index,
          item_active: currentIndex === index,
        }"
        :style="{ backgroundColor: itemBackgrounds[index % itemBackgrounds.length] }"
        v-for="(item, index) in itemList"
        :key="index"
      >
        <template v-if="item.type === 'text'">
          {{ item.text }}
        </template>
        <template v-else-if="item.type === 'image'">
          <img :src="item.image" />
        </template>
      </div>
      <Button
        :disabled="disabledLeft"
        type="custom"
        class="operator_left iconfont"
        @click="operator('l')"
        ><slot name="left">&#xe640;</slot></Button
      >
      <Button
        :disabled="disabledRight"
        type="custom"
        class="operator_right iconfont"
        @click="operator('r')"
        ><slot name="right">&#xe63e;</slot></Button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import Button from "../../Button";
export default defineComponent({
  name: "halo-carousel",
  props: {
    loop: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    itemBackgrounds: {
      type: Array,
      default: () => [],
    },
    itemList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Button,
  },
  setup(props) {
    let timer;
    const currentIndex = ref(0);
    const disabledLeft = computed(() => !props.loop && currentIndex.value === 0);
    const disabledRight = computed(
      () => !props.loop && currentIndex.value + 1 === props.itemList.length
    );
    const setTimer = () => {
      clearInterval(timer);
      if (!props.duration) return;
      timer = setInterval(() => {
        if (!props.loop && currentIndex.value === props.itemList.length - 1) return;
        operator("r");
      }, props.duration);
    };
    const operator = (type) => {
      clearInterval(timer);
      if (type === "l") {
        if (currentIndex.value - 1 < 0) {
          currentIndex.value = props.itemList.length - 1;
        } else currentIndex.value--;
      } else {
        if (currentIndex.value + 1 >= props.itemList.length) {
          currentIndex.value = 0;
        } else currentIndex.value++;
      }
      setTimer();
    };
    onMounted(() => {
      setTimer();
    });
    return {
      currentIndex,
      operator,
      disabledLeft,
      disabledRight,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_carousel {
  height: 160px;
  width: 260px;
  box-sizing: border-box;
  padding: 2px;
  &_content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    &_item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all ease-in-out 0.5s;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(100%);
      visibility: hidden;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .item_passed {
      transform: scale(0);
      visibility: hidden;
      z-index: -1;
    }
    .item_active {
      transform: scale(1);
      visibility: visible;
    }
    .operator_left,
    .operator_right {
      transform: translateY(-50%);
      position: absolute;
      top: 50%;
      background: transparent;
    }
    .operator_left {
      padding-left: 0;
      left: 0;
    }
    .operator_right {
      padding-right: 0;
      right: 0;
    }
  }
}
</style>
