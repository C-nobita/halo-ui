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

    createApp(App).use(Button)..use(Dialog).mount("#app");
```

下一节：[开始使用](#/start)