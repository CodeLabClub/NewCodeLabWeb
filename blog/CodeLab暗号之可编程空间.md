---
title: "CodeLab暗号之可编程空间"
date: 2020-04-23
tags: ["CodeLab相关","Neverland","编程学习","Adapter"]
author: CodeLab
---

<img className="img-responsive" src="/img/CodeLabSpace.png" />

当我们谈论`可编程空间`这个概念的时候，至少在当前阶段，具体的落脚点其实是物理空间内嵌入或容纳的软、硬件，如镜头之下CodeLab空间内集结的这些智能玩具、设备，以及因不便取下而无法入镜的智能窗帘、顶灯等。图中，除去少量书、积木、魔杖等物件，其余的看似造型、功能、用途、玩法五花八门，但都可归属于智能设备（或智能硬件）。也就是说，通电开机后，他们内部都有编写好的程序在运行，这和我们平时用的电脑其实本质相同。也可类比于生物，虽然具有多样性，但“生命”的特性相通。

<img className="img-responsive" src="/img/adapter_party.jpeg" />

如果继续沿用智能设备的生物类比，那么可编程空间或许就像生态系统，是一种动态的环境。如此想来，只是单纯陈列各种物件于空间中是远远不够的，他们之间应该存在交流互动，空间内由此生长叠加出丰富的关系，这样，才像个系统。

<!--truncate-->

问题来了。空间内这些或开放或封闭的智能设备，分别由不同的组织、厂商设计制造，内部运行的程序由不同的编程语言编写，该如何让他们交流互动呢？此外，空间内智能设备的数量以及种类随时间动态变化，可能持续会有新成员加入，这些新成员能否快速灵活地融入当前环境，汇入到智能设备间信息的流动中呢？

第一个问题关系到技术上如何实现智能设备间的交流；第二个问题则是如何设计与建构由空间内的智能设备组成的系统。

如果想了解CodeLab针对以上两个问题给出的方案，就需要对CodeLab Adapter有基本的理解。关于Adapter，[主页](https://codelab-adapter-docs.codelab.club/)上已有丰富的信息与案例分享，大家如果感兴趣可以到上面细细查看。接下来，在尽可能回避技术名词与细节的前提下，向大家简单介绍CodeLab可编程空间的技术基础——Adapter。

先上一张图。

![adapterdiagram](/img/adapterdiagram.png)

大家应该可以从背景中隐约看到上一张“全家福”，在此，我们是要故意抹掉“全家福”中各智能设备的形态特征，只抽取他们核心且相通的“生物”特性，从而以抽象但更清晰简洁地图形展现系统的构成以及Adapter的作用。

图片中又蹦出两个概念，硬件和软件。“全家福”中所有的智能设备以及我们平时用的手机、电脑，都可以这样二分地去理解。硬件就是所有我们从外部或拆开内部能看见摸着的物理实体，如当前握着的手机；软件则是硬件通电后运行其中的程序，如现在使用的微信。

因为这些智能设备本质的相似性，所以图中都统一用（表示硬件的）圆圈包围（代表软件的）实心圆这样的图形来表征，即M、R、P、S、A。他们相互间的连线表示分别在硬件与软件层面上建立起的联系。系统中，最特殊的成员A对应的正是CodeLab Adapter，其他M、R、P、S四个成员并无差别，可以对应接入Adapter的任一种智能设备，图片中只是任意画了四个，以作示例。

那Adapter与其他成员的连结，即所谓的接入，具体指什么呢？

首先要说明一下Adapter自身其实不能算作设备，因为它是一个软件，如此看来，似乎与系统中其他智能设备性质不同。但其实软件如果要发挥作用，就必然要运行在某一个硬件上，如个人电脑。所以只是出于强调软件的目的而以其名字命名，但实际仍与它运行其中的硬件构成智能设备，所以与其他成员的性质还是统一的。类似的还有Scratch、Python等软件，他们也都是系统中的重要成员。

从左侧主图中可以很清楚地看出，所有设备都是通过接入Adapter进而打通与系统内其他成员间的联系。设备接入时，一方面会通过USB、蓝牙、WiFi网络等通信方式与承载Adapter的硬件连接；另一方面，则是软件之间通过程序接口连通。一旦通过Adapter接入到系统内，就可以和其他成员交流互动了。

比较主图与右下角拿掉Adapter之后四成员间可能的关联图，可以看出，如果不经过Adapter，系统内所有成员为了实现两两连接而构成的系统会更为复杂，特别是随着成员数增加，系统内关系的复杂度将陡增而变得犹为棘手。

下面向大家呈现一个具体的例子（视频集锦请看[这里](https://adapter.codelab.club/user_guide/gallery/)），由此一瞥系统内成员间互动的自由与灵活。

<video src="https://adapter.codelab.club/video/1587120578222179.mp4" controls="controls"></video>

视频中，有通过Adapter接入的机甲大师（地上跑的机器人）、Scratch（电脑屏幕上呈现的图形化编程环境）、Micro:bit（握在手里下令机甲大师发射的小型计算机），以及通过接入Scratch进而也深入系统中的乐高传感器小组件（控制机甲大师前进、后退、左移与右移）。视频中来自不同国家、不同性质的产品，通过与Adapter的连接，临时组成了一个小系统，信息在他们之间来回穿梭，收到后，每个成员相应做出自己的反应，进而实现成员间流畅和谐的互动。

可编程空间，在我们的理解下，是基于空间内的软硬件、智能设备，人为建构的学习与创作环境。环境本身的设计思维与建构方法，既是环境中的人探索、学习的对象，同时又是修改、再创作的起点。为了满足这样的目标，就要求环境的设计与构建思维合理且好用；环境的层层结构以及构建方法尽可能透明好理解，使不同程度的学习者都可以上手学习；环境本身既有合理的规则保证其基本稳定性，同时又足够开放可塑，使学习者可以直接探索改造。这些都是从SmallTalk系统中，看到的令人振奋的方向。



