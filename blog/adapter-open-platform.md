---
title: "CodeLab Adapter v2 接入第三方平台"
author: 种瓜
date: 2019-09-27
tags: ["Adapter","技术文档","CodeLab相关"]
---

## 开放连接

CodeLab Adapter v2 允许[codelab.club](https://www.codelab.club/)的合作方将[CodeLab Adapter v2](https://codelab-adapter-docs.codelab.club/)接入到自己的平台。从而让平台获得与开源硬件/AI/IoT 交互的能力，同时他们也可以将[CodeLab Adapter](https://codelab-adapter-docs.codelab.club/)用作真实的 Python 解释器(与本地文件系统/网络交互)。

<!--truncate-->


我们将在这篇文章中展示如何将[CodeLab Adapter](https://codelab.codelab.club/)接入到任何 Scratch3.0 平台中。事实上，你可以将它接入任何 web 平台中(blockly/brython/electron...)。

本文中, 我们给出了 [CodeLab Adapter eim 插件的源码](https://github.com/Scratch3Lab/codelab_adapter_extensions/blob/master/extensions_v2/extension_eim.py)以及 [scratch3-adapter extension_eim 的源码](https://github.com/Scratch3Lab/scratch3_eim)。

## 教程

我们假设你已经读了[创建你的第一个 Scratch3.0 Extension](https://blog.just4fun.site/create-first-Scratch3-Extension.html)，如果没有，阅读完再回来。最好跟着文章操作一遍。

### 在 Scratch3.0 中创建 EIM Extension

#### Scratch3.0 插件源码

在`scratch-vm/src/extensions`目录创建`scratch3_eim/index.js`

Scratch3.0 eim 插件的源码我们已经放到 Github 上了:[scratch3_eim](https://github.com/Scratch3Lab/scratch3_eim)，源码本身不做过多解释，对照着它的功能，很容易搞懂。

值得注意的是，[scratch3_eim](https://github.com/Scratch3Lab/scratch3_eim)依赖于[socket.io-client](https://github.com/socketio/socket.io-client), 你需要在 scratch-vm 中先安装依赖:`socket.io-client`

Scratch3.0 与[CodeLab Adapter](https://codelab-adapter-docs.codelab.club)建立连接，最关键的部分是:

```js
this.socket = io(`//${adapterHost}:12358` + "/test", {
  transports: ["websocket"]
});
```

从架构图中，你可以更好地理解它们的交互:

![](/img/codelab-adapter_35cfa251.png)

从架构途图中也可以看出，[CodeLab Adapter](https://codelab-adapter-docs.codelab.club)支持任何平台。Scratch3.0 只是它的一个 client，并没有特殊性，你可以在 blockly app 或者任何其他什么地方接入[CodeLab Adapter](https://codelab-adapter-docs.codelab.club)。

#### CodeLab Adapter extension_eim 源码

CodeLab Adapter extension_eim 的源码，我们也已经更新到 Github 上: [extension_eim.py](https://github.com/Scratch3Lab/codelab_adapter_extensions/blob/master/extensions_v2/extension_eim.py)

此外

- [extension_eim_monitor.py](https://github.com/Scratch3Lab/codelab_adapter_extensions/blob/master/extensions_v2/extension_eim_monitor.py)
- [extension_eim_trigger.py](https://github.com/Scratch3Lab/codelab_adapter_extensions/blob/master/extensions_v2/extension_eim_trigger.py)

也是可以配合 Scratch3.0 eim 插件使用的.

## 开发者优先

目前我们允许开发者在本地(`127.0.0.1`)将[CodeLab Adapter](https://codelab-adapter-docs.codelab.club)接入到任何平台中。

需要注意的是，你需要将网站运行为 https(`webpack-dev-server --https`)来与[CodeLab Adapter](https://codelab-adapter-docs.codelab.club)通信。

<!--
[CodeLab Adapter](https://codelab-adapter-docs.codelab.club)目前接受以下 http origin 与它通信:

- 127.0.0.1
- localhost
- 0.0.0.0
- scratch.mit.edu
- scratch3.codelab.club


第三方平台接入的条款我们正在制定中。目前大家可以现在本地测试。
-->


## 参考

- [创建你的第一个 Scratch3.0 Extension](https://blog.just4fun.site/create-first-Scratch3-Extension.html)
- [CodeLab Adapter 可以支持其他平台吗？](https://adapter.codelab.club/user_guide/FAQ/#codelab-adapter)