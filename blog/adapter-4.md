---
title: "CodeLab Adapter 4.0: 关注协作"
date: 2020-12-28
tags: ["CodeLab"]
Slug: adapter-4
---


![](https://adapter.codelab.club/img/The_Tower_of_Babel.jpg)

>  让我们下去，在那里打乱他们的语言，让他们不能知晓别人的意思。 --《创世记》

由于近期的备案问题，导致CodeLab域名无法访问。 我们提前发布Adapter 4.0，以便与我们的临时IP访问方案相协调。

<!--truncate-->


# 引入 Linda，让协作变得简单
CodeLab Adapter 4.0 引入了 Linda，这个版本重点关注 **协作**。具体而言，关注 编程/表达/创作 场景中，潜在的各种协作需求:

*  不同编程环境之间的协作
    *  图形化编程环境（如Scratch）与文本编程环境（如Python/Jupyter）的协作
    *  多个 Scratch 舞台之间的协作
    *  多个 Python 程序之间的协作
*  专业软件(Unreal Engine/Unity/Logic Pro X/vvvv/Sonic Pi)与用户编程环境之间的协作
*  团队成员分别处于异构系统时的协作
*  不同设备之间的协作
*  AI/IoT/开源硬件...不同问题域之间的协作
*  跨主机/网络环境下的协作
*  构建可编程空间（Neverland）交互场景所涉及的复杂协作
*  ...

由于编程入门者是 CodeLab Adapter 4.0 的典型用户，我们希望协作能够 **足够简单**，不至于困扰入门者， 这是我们选择 Linda 的主要理由之一，使用这种统一/简单/跨语言的并发模型，新手可以将注意力集中在自己的想法以及与他人的沟通上，而不是疲于应对并发系统本身的复杂性。

由于大多数有实际意义的编程项目都和多任务以及多任务之间的协作有关，所以 **个人计算** 的先驱和后继者们都关注这个话题，作为 **个人计算** 精神的后继者: Scratch 在这方面就做的很好，Scratch 用户在一开始就能轻松处理多个角色之间的协作，相比之下，主流编程语言中处理并发任务很困难，即便对于专业程序员也很困难。

我们希望沿袭 Scratch 简易的协作能力，但拓宽它的能力范围。

## 如何使用 Linda
CodeLab Adapter内置的Linda采用 C/S 架构。 Linda Server 内置在 Adapter 4.0的核心中，我们提供以下Client与之交互。

-   [Python Client](https://adapter.codelab.club/user_guide/Linda/#python-client)
-   [Scratch Client](https://adapter.codelab.club/user_guide/Linda/#scratch-client)
-   [REST API](https://adapter.codelab.club/user_guide/Linda/#rest-api)
-   [cli (命令行客户端)](https://adapter.codelab.club/user_guide/Linda/#cli)
-   [JavaScript Client(开发者)](https://adapter.codelab.club/user_guide/Linda/#javascript-client)
-   [mush-lang](https://adapter.codelab.club/user_guide/Linda/#mush-lang): 基于Linda构建的一门LISP风格的玩具语言，用于探索Linda的可能性
-   Lively Client

Linda 最有趣的一个地方是，所有客户端（跨语言、跨系统、跨网络）都能够互操作，语义由参与者自己"协调", 所以 Alan Kay 将 Linda 称为"协调语言"。

### 基本操作(operate)

#### 核心操作
*  out: 生成一个元组(tuple) 到 元组空间（tuple space）
*  in: 在tuple space中匹配元组，如果匹配到则消耗它, 如果未匹配则一直等待
    *  inp: in的非阻塞版本。 如果匹配到则消耗它, 如果未匹配则返回空元组
*  rd: read only,  在tuple space中匹配元组，如果匹配到则返回它(不移除), 如果未匹配则一直等待
    *  rdp: 非阻塞版本的 rd
*  eval: 暂不考虑实现

#### 辅助操作
不在 linda 的原始论文中，是我自己的扩展

*  dump: 获取元组空间所有元组
*  status: 获取元组空间状态
*  reboot: 重置元组空间

更多使用细节参考 [Adapter Linda 文档](https://adapter.codelab.club/user_guide/Linda/)。

## FAQ
### Linda 与 EIM的关系是什么？
在 Adapter 内部， Linda基于 EIM 实现。

Linda 与 EIM 将长期共存，一个 Adapter Node，即是Linda client，也是EIM client，它们各有所擅。长期来看，我们更偏好 Linda。

# Demo

## 多个 Scratch 角色 的 实时同步

<video width="80%" src="https://adapter.codelab.club/video/1608041327753652.mp4" controls="controls"></video>

在 Python 的例子中，我们甚至在Scratch里构建了 Server！

两个Scratch角色同步的代码如下:

*  [linda-demo1](http://118.31.62.99:9001/?sb3url=https://adapter.codelab.club/sb3/linda-demo1.sb3)
*  [linda-demo2](http://118.31.62.99:9001/?sb3url=https://adapter.codelab.club/sb3/linda-demo2.sb3)


python 与 Scratch 同步的代码如下:

*  [linda-demo1](http://118.31.62.99:9001/?sb3url=https://adapter.codelab.club/sb3/linda-demo1.sb3)

Python核心部分代码为:

```python
node.linda_out(["request", "loudness", "xxx"])
node.linda_in(["response", "loudness", "*"])
```


## Jupyter 与 Scratch 的互操作
<video width="80%" src="https://adapter.codelab.club/video/1608095793244042.mp4" controls="controls"></video>

跨语言对象之间的互操作

用到了 Jupyter notebook 里的 ipywidgets.

```python
# 请使用 jupyter notebook，而不是jupyterlab
from ipywidgets import interact, interactive, fixed, interact_manual
from codelab_adapter_client import AdapterNode
import time

class MyNode(AdapterNode):
    NODE_ID = "linda/jupyter"

    def __init__(self):
        super().__init__()

node = MyNode()
node.receive_loop_as_thread()

@interact(show=True, x=100, size=100)
def f(show,x,size):
    node.linda_out(["%%x", x], wait=False) # f函数是非阻塞的回调函数，使用wait=False参数，使node.linda_out使非阻塞的，此时相当于流，记得使用 message tuple（见下文）
    node.linda_out(["%%show", show], wait=False)
    node.linda_out(["%%size", size], wait=False)
    return show,x,size
```

# Linda 文档

[Linda 文档](https://adapter.codelab.club/user_guide/Linda/)

<!--
# todo
云端linda

商业授权

动态更新诸如证书。 下载到本地，下次更新，证书，云端变量
-->

# 其他更新

其他重要更新包括:

*  修复与 token 有关的安全风险
*  支持激光雷达，将普通地面变为交互式 Scratch 舞台

<video width="80%" src="https://adapter.codelab.club/video/1608804837247213.mp4" controls="controls"></video>

<video width="80%" src="https://adapter.codelab.club/video/1607594552142394.mp4" controls="controls"></video>

# Todo
正在思考基于云端的 Linda，可能会用在教育之外的领域, 简化与协作有关的问题。

# 开始使用

[下载最新 Adapter](https://adapter.codelab.club/get_start/gs_install/?version=latest)。


# 参考
-   [在 CodeLab Adapter 中实现 Linda 并发模型](https://wwj718.github.io/post/%E7%BC%96%E7%A8%8B/adapter-linda/)
-   [Adapter Linda 文档](https://adapter.codelab.club/user_guide/Linda/)
-   [Linda: 比 Actor 更好的并发模型](https://wwj718.github.io/post/%E7%BC%96%E7%A8%8B/linda-intro/)
-   [[译]Alan Kay 看待'对象'的几次观点转变](https://wwj718.github.io/post/%E7%BC%96%E7%A8%8B/alan-key-between-oo-fp/)
-   [建立在异步消息之上的同步指令: 分别在 JavaScript、Python、Squeak 上实现](https://wwj718.github.io/post/%E7%BC%96%E7%A8%8B/async-msg-sync-cmd/)
-   [[译]Smalltalk 背后的设计原则](https://wwj718.github.io/post/%E7%BC%96%E7%A8%8B/design-principles-behind-smalltalk/)