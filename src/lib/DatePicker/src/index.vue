<template>
  <div
    :ref="
      (dom) => {
        originEl = dom;
      }
    "
    class="halo_datepicker halo_hover"
    tabindex="0"
    @focus="pickerShowClass = `picker_show_active`"
    @blur="pickerShowClass = ''"
  >
    <div class="halo_datepicker_content halo_none">
      {{
        `${rangeDate.getFullYear()} - ${
          rangeDate.getMonth() + 1
        } - ${rangeDate.getDate()}`
      }}
      <div class="halo_datepicker_content_picker halo_hover" :class="pickerShowClass">
        <div class="halo_datepicker_content_picker_content halo_none">
          <div class="picker_header">
            <div class="oprator">
              <span class="iconfont oprator_icon" @click="changeRange('del', 'year')">&#xe641;</span>
              <span class="iconfont oprator_icon" @click="changeRange('del', 'month')">&#xe640;</span>
            </div>
            <div class="date_range">
              {{ `${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}` }}
            </div>
            <div class="oprator">
              <span class="iconfont oprator_icon" @click="changeRange('add', 'month')">&#xe63e;</span>
              <span class="iconfont oprator_icon" @click="changeRange('add', 'year')">&#xe642;</span>
            </div>
          </div>
          <div class="week">
            <div class="week_item" v-for="(item, index) in week" :key="index">
              {{ item }}
            </div>
          </div>
          <div class="day">
            <div class="day_line" v-for="(line, lineIndex) in days" :key="lineIndex">
              <div
                class="day_line_item"
                v-for="(day, itemIndex) in line"
                :key="itemIndex"
              >
                <div
                  class="day_line_item_content"
                  :class="{ actived: day.current }"
                  @click="day.current ? dayClickHandler(day.day) : void 0"
                >
                  {{ day.day }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect, getCurrentInstance } from "vue";
export default defineComponent({
  name: "halo-datepicker",
  props: {
    date: {
      type: Date,
      default: () => new Date(),
    },
  },
  emits: ["update:date", "picked"],
  setup(props) {
    const { emit } = getCurrentInstance();
    const rangeDate = ref(null);
    const currentDate = ref(null);
    watchEffect(() => {
      rangeDate.value = props.date;
      currentDate.value = props.date;
    });
    const getLastDaysAndNowDaysAndNowFirstDay = (date) => {
      const newDate = new Date(date);
      const getMonth = newDate.getMonth();
      newDate.setDate(1);
      const firstDay = newDate.getDay();
      newDate.setMonth(getMonth + 1);
      newDate.setDate(0);
      const days = newDate.getDate();
      newDate.setDate(0);
      const lastDays = newDate.getDate();
      return {
        lastDays,
        firstDay,
        days,
      };
    };

    const week = ref(["日", "一", "二", "三", "四", "五", "六"]);

    const days = computed(() => {
      const { firstDay, days, lastDays } = getLastDaysAndNowDaysAndNowFirstDay(
        currentDate.value
      );
      const weeks = Math.ceil((firstDay + days) / 7);
      const arr = [];
      let currentDay = 1;
      for (let week = 0; week < weeks; week++) {
        const weekArr = [];
        let nextDayNum = 1;
        for (let day = 1; day <= 7; day++) {
          if (week === 0 && lastDays - firstDay + day <= lastDays)
            weekArr.push({ day: lastDays - firstDay + day });
          else {
            if (currentDay <= lastDays) {
              weekArr.push({ day: currentDay, current: true });
              currentDay++;
            } else {
              weekArr.push({ day: nextDayNum });
              nextDayNum++;
            }
          }
        }
        arr.push(weekArr);
      }
      return arr;
    });
    const originEl = ref(null);
    const pickerShowClass = ref("");

    const changeRange = (changeType, rangeType) => {
      if (changeType === "add") {
        if (rangeType === "month") {
          const month = currentDate.value.getMonth();
          currentDate.value = new Date(currentDate.value.setMonth(month + 1));
        } else {
          const year = currentDate.value.getFullYear();
          currentDate.value = new Date(currentDate.value.setFullYear(year + 1));
        }
      } else {
        if (rangeType === "month") {
          const month = currentDate.value.getMonth();
          currentDate.value = new Date(currentDate.value.setMonth(month - 1));
        } else {
          const year = currentDate.value.getFullYear();
          currentDate.value = new Date(currentDate.value.setFullYear(year - 1));
        }
      }
    };
    const dayClickHandler = (day) => {
      rangeDate.value = new Date(currentDate.value);
      rangeDate.value.setDate(day);
      emit("update:date", rangeDate.value);
      emit("picked", rangeDate.value);
      originEl.value.blur();
    };

    return {
      days,
      week,
      originEl,
      rangeDate,
      pickerShowClass,
      dayClickHandler,
      changeRange,
      currentDate,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_datepicker {
  box-sizing: border-box;
  padding: 2px;
  cursor: pointer;
  outline: none;
  &_content {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: $color;
    padding: 6px 16px;
    &_picker {
      position: absolute;
      z-index: 9;
      padding: 2px;
      box-sizing: border-box;
      visibility: hidden;
      opacity: 0;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) scale(0);
      transition: all ease-in-out 0.6s;
      cursor: default;
      &_content {
        width: 100%;
        height: 100%;
        background: $color;
        padding: 10px;
        .picker_header {
          display: flex;
          justify-content: space-around;
          align-items: center;
          .oprator {
            flex: 1;
            display: flex;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;
          }
        }
        .week {
          display: flex;
          justify-content: space-around;
          align-items: center;
          &_item {
            white-space: nowrap;
            padding: 6px;
          }
        }
        .day {
          &_line {
            display: flex;
            justify-content: space-around;
            background: $color;
            &_item {
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              &_content {
                color: gray;
              }
              .actived {
                cursor: pointer;
                color: #fff;
              }
            }
          }
        }
      }
    }
    .picker_show_active {
      opacity: 1;
      transform: translateX(-50%) translateY(-50%) scale(1);
      visibility: visible;
    }
  }
}
</style>
