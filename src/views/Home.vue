<template>
  <div class="home">
    <div class="home_wraper halo_hover">
      <div class="home_wraper_content halo_none">
        <div id="name"></div>
        Halo Ui基于 Vue 3.0 以及 TypeScript 搭建的 Ui 框架。
        <br />
        引入该组件库，你可以使用组件库的组件。也可以根据组件中的自定义教程
        <a href="#/doc/custom">[自定义]</a>，写出类似效果的组件。
        <br />
        前端萌新，学习之路上的一个小作品。欢迎各路大佬提出建议、给出评价。
        <br />
        如果觉得我还写的不错，期待大佬们的 star！<a
          href="https://github.com/C-nobita/halo-ui"
          target="blank"
          >[仓库地址]</a
        >
        <div class="info">
          <div class="avator halo_hover">
            <div class="avator_content halo_none">
              <img
                style="width: 110%; height: 110%"
                src="../assets/Wec11.jpeg"
                alt=""
              />
            </div>
          </div>
          <div class="info_content">
            <div class="info_content_name">不止狂澜</div>
            <div class="info_content_social">
              <div class="info_content_social_item">
                <a href="https://github.com/BuckNoBug" target="_blank">
                  <svg
                    class="octicon octicon-mark-github v-align-middle"
                    height="32"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="32"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="info_content_social_item">
                <a href="https://github.com/C-nobita" target="_blank">
                  <svg
                    class="octicon octicon-mark-github v-align-middle"
                    height="32"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="32"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="info_content_social_item">
                <a href="https://juejin.cn/user/3535631568868829" target="_blank"
                  ><img
                    style="width: 32px"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ1cHgiIGhlaWdodD0iMzhweCIgdmlld0JveD0iMCAwIDQ1IDM4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkp1ZWppbjwvdGl0bGU+CiAgICA8ZGVzYz5KdWVqaW4uY248L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iMC4xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAtMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCA1LjAwMDAwMCkiIGZpbGw9IiMwMDZDRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjEuMjkzNDMyOCwyLjU4MzEzMDQ5IEwxOC4wMTczOTg0LDAgTDE0LjU5NDYyNCwyLjY5ODg3ODAxIEwxNC40MTcyMDc3LDIuODQxODIzMDQgTDE4LjAxNzM5ODQsNS43MTI0MjQ4MyBMMjEuNjI4NjU3OCwyLjg0MTgyMzA0IEwyMS4yOTM0MzI4LDIuNTgzMTMwNDkgWiBNMzMuNzA3ODI4OSwxMi42MDA2Njc0IEwxOC4wMDc5MTA5LDI0Ljk4MDI3NiBMMi4zMTc0ODA0NCwxMi42MDgyNTc0IEwwLDE0LjQ2OTcwNTIgTDE4LjAwNzkxMDksMjguNjY5MDE2NyBMMzYuMDI1NjI1NiwxNC40NjIxMTUyIEwzMy43MDc4Mjg5LDEyLjYwMDY2NzQgWiBNMTguMDA3OTEwOSwxMy42MDUwNzc2IEw5LjQ2NDQxNTU0LDYuODY4NjM1MDUgTDcuMTQ2NjE4ODUsOC43MzAwODI5IEwxOC4wMDc5MTA5LDE3LjI5NDEzNDUgTDI4Ljg3ODM3NDIsOC43MjI0OTI5IEwyNi41NjA1Nzc1LDYuODYxMDQ1MDUgTDE4LjAwNzkxMDksMTMuNjA1MDc3NiBaIiBpZD0iRmlsbC0xLUNvcHkiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                    alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";
export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    let timer;
    const titleHandler = async () => {
      if (!SVGTextAnimate) {
        timer = setTimeout(() => {
          titleHandler();
        }, 1000);
        return;
      }
      const opensans = new SVGTextAnimate(
        "https://cdn.jsdelivr.net/gh/oubenruing/svg-text-animate@latest/docs/fonts/OpenSans-Regular-webfont.woff",
        {
          duration: 300,
          direction: "normal",
          "fill-mode": "forwards",
          delay: 150,
          mode: "delay",
        },
        {
          stroke: "#FFF",
          "stroke-width": "2px",
          // "font-size": 55,
        }
      );
      await opensans.setFont();
      opensans.create("Halo Ui", "#name");
    };
    onMounted(() => {
      titleHandler();
    });
    onBeforeUnmount(() => {
      clearTimeout(timer);
    });
    return {};
  },
});
</script>

<style lang="scss">
.home {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  padding-top: 36px;
  height: 100%;
  color: white;
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
      .info {
        padding: 20px;
        display: flex;
        justify-content: center;
        .avator {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          padding: 2px;
          box-sizing: border-box;
          overflow: hidden;
          .avator_content {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        &_content {
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 20px;
          &_name {
            font-size: 14px;
          }
          &_social {
            display: flex;
            &_item {
              margin-right: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              & > a {
                display: flex;
                align-items: center;
              }
            }
          }
        }
      }
    }
  }
  #name {
    margin-bottom: 50px;
  }
}
</style>
