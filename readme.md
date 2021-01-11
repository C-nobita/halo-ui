# HALO UI

Halo Ui - A Vue.js 3.0 UI library

[![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=C-nobita)](https://github.com/C-nobita/halo-ui)

这是自己在业余时间搭建的组件库玩具，样式比较简陋，可能不和你的胃口，这个组件库是自己学习过程中的一个产物，希望以后能够成为一个优秀的开源库的作者，期待你给予的建议。

### 官网

[官网地址1](https://halo-ui.top/#/)

[官网地址2](https://ls_code_space.gitee.io/halo-ui/#/)

### 使用

`npm install halo-ui` or `yarn add halo-ui`

```js
import "halo-ui/dist/halo-ui.css";
import HaloUi from "halo-ui";

createApp(App).use(HaloUi).mount("#app");
```

> 引入组件库后会在页面上加上一个光晕的效果如果需要自定义大小，那么你可以这么做。

```js
window.haloRadius = 120;
import "halo-ui/dist/halo-ui.css";
import HaloUi from "halo-ui";

createApp(App).use(HaloUi).mount("#app");
```

如果你觉得写的还可以的话，期待你给我一个star！如果觉得写的不好的话，也希望给我一点建议！谢谢！！！😁
