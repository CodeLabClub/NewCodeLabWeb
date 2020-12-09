---
title: "Neverland2.0原型之 兴趣的【指向】"
author: 种瓜
date: 2020-12-08
tags: ["Neverland2"]
---

> 生活是没有地图可以指引的，所以我们是自由的（生き方に地図なんかないけど だから自由） -- 数码宝贝进化曲《brave heart》

<!--truncate-->

![](https://adapter.codelab.club/img/digimon-us.jpeg)

我们近期正在构建 Neverland 2.0， 在新年之前计划完成第一个里程碑 -- 一个新年主题的可编程魔法空间。

Neverland 2.0(可编程魔法空间) 是一项激动人心的计划，我们都为此热血沸腾，目前这个项目由 @snownstone 构思并推进， CodeLab 所有成员都参与其中，它是 Neverland 的下一个版本，融入了 Neverland 1.0 以来我们的所有思考。

将计算机视为一种表达媒介(Alan Kay) 以及 将计算机视为一种现实环境（Bret Victor/Dynamicland）的想法依然启发着我们。但 Neverland 2.0 也融入了许多我们野心勃勃的新想法。

以下是 @snownstone 第一次为我们分享这个计划时准备的脑图:

![](https://adapter.codelab.club/img/NeverlandMindstorms.png)

---

这周起，我们开始前往 2020 年的里程碑: 2021 新年前，在 Neverland 2.0 里，举办一场新年魔法 Party。

目前正在重构整个 CodeLab Neverland 空间：

-   在树莓派上运行 Adapter Master 和 Adapter Node
-   调试激光雷达与投影仪
-   使用遮光材料屏蔽外部光线，构建沉浸式环境
-   将 Alan Kay、 Seymour Papert 等人的画像、论文等元素内置到空间中，在阐述观点时可以随时引用
-   ...

当我们讨论:

> 将 Alan Kay、 Seymour Papert 等人的画像、论文等元素内置到空间中

想到与 @Rick 关于 **二维码/Scratch** 的想法结合起来 。

@Rick 的想法是，将二维码锚定到现实空间中的实物上，将其看作类似超链接的东西，链接的内容由 **Scratch** 构建，这样普通人（尤其是孩子）就可以为自己身边的事物，贴上电子标签，将其用作便签、电子收纳盒、备忘、展示、密码管理、管家 chatbot ...

我们将这个原型用作 Neverland 2.0 的一部分, 看重其中关于 **超链接/指向** 的想法， 将其看作 **解释/阐述** 的入口（类似@Rick 提到的 **展示** 功能）。当人们处在空间中，使用手机扫描自己感兴趣的事物（附着二维码），环境将对这个事物作出阐述，既可以是事物的自我阐述（如 cozmo 自己发言），也可以是环境中的动态媒介对其作出响应(诸如投影、屏幕)。

当一个用户对 Alan Kay（画像）感兴趣，他只需 **指向** Alan Kay 画像上的二维码，Neverland 环境将负责介绍 Alan Kay （Scratch 作为表达环境，投影在环境中）。

以上交互由 Adapter 驱动，其背后的核心观点是: 环境/系统中的 **对象** 通过 **消息** 沟通（talk）。这正是 Alan Kay 对计算机的主要观点。我们追随 Alan Kay 的想法去构建编程环境，并在这个动态媒介里阐述 Alan Kay。

实现逻辑是:

![](https://adapter.codelab.club/img/80bc03f6958245a1025389f6d98e026a.png)

这种存在于现实空间的 **指向系统** 拥有极高的自由度: 用户的的兴趣指向、事物的阐述方式都是自由的，这个原型也是很好的例子，用于解释: 计算机是一种动态媒介，编程是在可计算环境里想法表达。

它可能会用于构建 CodeLab 和 英荔教育共同规划的可交互 Ai 博物馆。

以下是一个 demo, 当用户对环境中的 Cozmo 感兴趣时， 环境将负责解释 Cozmo，可以将其视为构建在 Neverland 2.0 之上的一个 APP。

<video width="80%" src="https://adapter.codelab.club/video/1607421421434030.mp4" controls="controls"></video>

我们构建了一个 Adapter digimon（数码宝贝）Python插件， Neverland 2.0 中的各种物体，将被贴上二维码之后，它们将转变为 digimon，可以响应用户的兴趣指向(Scratch 作为表达媒介)。

# 源码
Scratch源码 已经分享到 CodeLab Scratch 社区: [neverland2原型之 数码宝贝](https://create.codelab.club/projects/8070/)

Adapter 插件源码: [node_digimon.py](https://github.com/CodeLabClub/codelab_adapter_extensions/blob/master/nodes_v3/node_digimon.py)。

[文档](https://adapter.codelab.club/extension_guide/digimon/)

# 参考

-   [数码宝贝 デジモンアドベンチャー (1999)](https://movie.douban.com/subject/1970134/)
-   [【数码宝贝】进化曲 Brave Heart](https://www.bilibili.com/video/BV1YW411Q7v1?from=search&seid=9296518497023190388)
