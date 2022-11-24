# 第一节：jeecg-vue环境的搭建

这里我们使用vscode作为演示

## 准备工作

  [安装node.js](envinstall/nodejs/nodejs.md)
  [安装vsode](envinstall/ide/vscode/README.md)

## 安装插件

![打开插件](../img/image-20210121095932068.png)



### 安装Vetur

  支持Vue

![安装Vetur](../img/image-20210121120155823.png)

点击安装即可

### 安装Ant Design Vue helper

支持ant design vue提示

![image-20210121133604020](../img/image-20210121133604020.png)

## 导入vscode

点击 `文件`->`打开文件夹`


![image-20210121145510516](../img/image-20210121145510516.png)

选择已经下载好的`jeecg-vue`项目

![image-20210121145723975](../img/image-20210121145723975.png)

打开后

![image-20210121145809238](../img/image-20210121145809238.png)

## 初始化安装

打开`NPM 脚本`

![image-20210121150817710](../img/image-20210121150817710.png)

再点击`NPM 脚本`,找到里面的pre，点击运行

![image-20210121150948287](../img/image-20210121150948287.png)

## 初始化安装（使用cmd）

或者使用```cmd```命令进行安装, `这种方法和上面的方法任选其一`


使用 <kbd>Ctrl</kbd>+<kbd>`</kbd> 打开终端

如果打开的是`power shell`,可以更改为`cmd`(`power shell与cmd有些语法上的不同，建议使用cmd`)

选择`cmd.exe`，关闭窗口再次打开即可

![image-20210121152738227](../img/image-20210121152738227.png)

再>后面输入`init` [^1]或者是`npm run pre` [^2]，这两个任选其一

[^1]: 一个cmd脚本，运行即可安装yarn 并使用yarn初始化安装（使用本地的服务器，速度较快，仅支持cmd推荐使用）
[^2]: 用npm执行package.json中的pre脚本，jeecg-vue自带的

## 启动

### 使用`NPM 脚本`启动

点击`serve`的三角号启动

![image-20210121163313143](../img/image-20210121163313143.png)

如下显示，即为启动成功

![image-20210121165249665](../img/image-20210121165249665.png)

点击垃圾桶即可停止

### 使用`cmd`启动

使用 <kbd>Ctrl</kbd>+<kbd>`</kbd> 打开终端

输入 `run`或`yarn serve`或`npm run serve`启动服务

![image-20210122085005820](../img/image-20210122085005820.png)

![image-20210122085243642](../img/image-20210122085243642.png)

# 推荐安装插件

- Eclipse Keymap
  切换为ecliplse快捷键,*也可以更改为其他熟悉的快捷键*

  ![image-20210121132137343](../img/image-20210121132137343.png)

- Git History
  点击任意一行查看git历史

  ![image-20210121132235635](../img/image-20210121132235635.png)

- Path Intellisense
  地址提示

  ![image-20210121132258335](../img/image-20210121132258335.png)

- Guides
  显示辅助线

  ![image-20210121132510512](../img/image-20210121132510512.png)

- Color Highilght
  显示css颜色

  ![image-20210121145137796](../img/image-20210121145137796.png)

- Bracket Pair Colorizer
  彩色括号，成对的一个颜色

  ![image-20210121145158103](../img/image-20210121145158103.png)

- Auto Rename Tag
  自动补全html/xml标签

  ![image-20210121145218548](../img/image-20210121145218548.png)

  