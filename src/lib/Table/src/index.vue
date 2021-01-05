<template>
  <div class="halo_table halo_hover">
    <div class="halo_table_wraper halo_none">
      <div class="halo_table_wraper_header halo_hover">
        <div
          class="halo_table_wraper_header_item halo_none"
          v-if="!tableData.header.length"
        >
          暂无数据
        </div>
        <div
          class="halo_table_wraper_header_item halo_none"
          v-for="(item, index) in tableData.header"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>

      <div class="halo_table_wraper_body">
        <div class="halo_table_wraper_body_line halo_hover" v-if="!tableData.data.length">
          暂无数据
        </div>
        <div
          class="halo_table_wraper_body_line halo_hover"
          v-for="(item, index) in tableData.data"
          :key="index"
        >
          <div
            class="halo_table_wraper_body_line_item halo_none"
            v-for="(innerItem, innerIndex) in Object.keys(item)"
            :key="innerIndex"
          >
            {{ item[tableData.header[innerIndex].key] || "/" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
declare interface headerObj {
  key: string;
  name: string;
}
declare interface dataObj {
  [key: string]: string;
}
declare interface PropsTypes {
  header: headerObj[];
  data: dataObj[];
}
export default defineComponent({
  name: "halo-table",
  props: {
    header: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup(props: PropsTypes) {
    const tableData = computed(() => {
      const keys = props.header.map((item) => item.key);
      const data = props.data.map((item) => {
        const obj = {};
        keys.forEach((key) => {
          obj[key] = item[key];
        });
        return obj;
      });
      return {
        header: props.header,
        data: data,
      };
    });
    return {
      tableData,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_table {
  padding: 1px;
  background: rgba($color: #fff, $alpha: 0.3);
  &_wraper {
    &_header {
      display: flex;
      justify-content: space-around;
      background-color: $color;
      &_item {
        width: 100%;
        min-height: $h;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $color;
        margin: 1px;
      }
    }
    &_body {
      display: flex;
      flex-direction: column;
      padding: 1px 1px 0;
      &_line {
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        &_item {
          width: 100%;
          min-height: $h;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 2px;
          background-color: inherit;
        }
        & > &_item:first-child {
          margin-left: 0;
        }
      }
      & > &_line:nth-child(odd) {
        background-color: rgba($color: #9999, $alpha: 0.8);
      }
      & > &_line:nth-child(even) {
        background-color: rgba($color: #5555, $alpha: 0.8);
      }
    }
  }
}
</style>
