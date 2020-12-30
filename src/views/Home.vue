<template>
  <div>
    <!-- <div class="home_wraper halo_hover">
      <div class="home_wraper_content halo_none">
        <router-view></router-view>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">

export default {
  name: "Home",
  components: {},
  setup() {
    return {}
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  padding-top: 36px;
  height: 100%;
  &_wraper {
    max-width: 1000px;
    width: 70%;
    height: 100%;
    padding: 2px;
    background: rgba($color: #000, $alpha: 0.3);
    &_content {
      padding: 20px;
      width: 100%;
      height: 100%;
      background: rgba($color: #000, $alpha: 0.3);
    }
  }
}
</style>
