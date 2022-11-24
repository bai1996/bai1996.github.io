# 第四节：更改后台管理样式

更改【src\defaultSettings.js】

![image-20210122142821780](../img/image-20210122142821780.png)

更改【vue.config.js】中的css.loaderOptions.less.modifyVars

![image-20210122142800820](../img/image-20210122142800820.png)

在【src\main.js】新增

```js
import '../public/color.less';  // 覆盖颜色
```

![image-20210122142523543](../img/image-20210122142523543.png)

再更改相应的颜色即可

![image-20210122143033997](../img/image-20210122143033997.png)