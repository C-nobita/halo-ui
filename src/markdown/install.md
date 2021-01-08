# 安装

打开终端运行下列命令：

```
npm install halo-ui
```

或

```
yarn add halo-ui
```

在main文件中引入，可以直接全局注册
```js
import "halo-ui/dist/halo-ui.css";
    import HaloUi from "halo-ui";

    createApp(App).use(HaloUi).mount("#app");
```

或
```js
import "halo-ui/dist/halo-ui.css";
    import { Button, Dialog } from "halo-ui";

    createApp(App).use(Button).use(Dialog).mount("#app");
```

使用该组件库会在你的页面上出现光晕的效果，具体请参照文档。
如果你要自定义光晕大小，你可以这么做。
```js
window.haloRadius = 120;
import "halo-ui/dist/halo-ui.css";
    import HaloUi from "halo-ui";

    createApp(App).use(HaloUi).mount("#app");
```
ps: 注意定义 haloRadius 全局变量需要在 use 组件库之前。

下一节：[开始使用](#/doc/aside)