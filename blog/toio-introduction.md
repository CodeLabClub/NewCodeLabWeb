---
title: "toio: 她有轮子!"
author: 种瓜
date: 2019-07-09
tags: ["CodeLab相关","CodeLab❤选","编程学习","Adapter"]
---

<img className="img-responsive" src="/img/toio_codelab_24321ed1.png" />


>  可是，她的轮子在哪里？  -- 爱因斯坦(2岁半)

<!--欢迎到CodeLab体验-->

# 前言
爱因斯坦2岁半的时候，他的妹妹出生，父母抱给他看，他以为是要给他一个玩具，问到："可是，她的轮子在哪里？"

孩子似乎对有轮子的东西情有独钟，连特立独行的爱因斯坦都不能免俗。

toio是孩子会喜欢那种玩具。

toio是个惊人的玩具，不只是有轮子。

<!--truncate-->

<!--基本的方块 感应器 将玩法变为套件 社区-->

# 一睹为快
<!--
看几个视频
-->

先来看几个我们在CodeLab Neverland里玩耍toio时拍摄的视频:


### 模拟生物
毛毛虫

<video width="600px" src="https://www-old.codelab.club/video/toio2.mp4" controls="controls"></video>

裤子

<video width="600px" src="https://www-old.codelab.club/video/toio1.mp4" controls="controls"></video>

### 怎么做到的
初次看到这些视频，多数人会有两个反应。

一开始，表现为兴奋: 好有趣啊！ 

接着满脸困惑: 它是怎么做到的？ 

一些小孩疑惑地拿起桌子旁边的魔杖："是用它施的魔法吗？"

技术出身的工程师则困惑于小机器人是如何知道垫子的边界和彼此的相对位置的？

折腾过机器人的硬件工程师，则困惑于它使用了什么传感器以及如何做到这般惊人的精确度。

几乎从没有人在初次见到它的时候猜到原理。

---

toio究竟是如何做到视频里的这些行为呢？

秘诀就是:

>  位置，方向和时间。

许多工程师听完这句话，在静静地等待你的下文，Ta以为你只是用这句无挂紧要的俏皮话开了个头，重点内容还没开始。

就像你捧着热腾腾的排骨汤，问你的小女朋友怎么这么好喝，她脸色微醺，眼神闪烁，回答说:

>  煲一锅好汤的秘诀无它, 爱与时间而已。

你当然知道食材、火候都是很重要的，你的小女友当然也知道你在夸她，而不是真正想知道煲一锅好汤的技巧。

然而，与你的小女友不同，这不是打情骂俏，`位置，方向和时间`是一个严肃的回答，而且它没有下文，它正是利用toio构建各类模拟生物的技巧所在。

# 位置，方向和时间 
toio是一个小方块，长宽都为32毫米, 我们可以将小方块视为一个机器人。<!--它的轮子由高性能电机驱动。-->

把toio放在视频中的垫子上时，toio能知道自身在垫子上的绝对位置。

`位置，方向和时间`中的第一个词，`位置`已经出现了。

### 位置
关于机器人的定位问题，有许多种方案，往Google一搜，能搜到`25,700,000`条结果。

那么toio是如何知道自身的绝对位置的呢？

它采用的技术比较非主流，几乎是独一无二的。用的是光学传感器，toio的肚子下有一个光学传感器，每秒以数十次的频率扫描垫子，垫子上印有特殊纹理，纹理极为细密，任何一处的纹理都不同，通过扫描纹理。能够精确地知道自身处在垫子上的绝对位置。

### 方向
事实上，这些纹理还有更有趣的地方，它们极为精细，除了每个位置纹理不同，同一个位置不同方向的纹理也各不相同。于是toio通过扫描垫子上的纹理，不只知道所处的位置，还知道自身的朝向，精确到1度以内！

### 时间
`位置，方向和时间`中最后一个要素是时间？

可是， 时间是什么？

[圣·奥古斯丁](https://zh.wikipedia.org/zh/%E5%B8%8C%E6%B3%A2%E7%9A%84%E5%A5%A5%E5%8F%A4%E6%96%AF%E4%B8%81)回答说:

>  没有人问我，我倒清楚，有人问我，我想给他解释，却茫然不解了。

对于一个牛顿系统，给定初始状态，我们能够知道任意时刻切面的系统状态。

如果你知道toio在某个时刻的位置和方向，那么你就能编排下个时刻toio的位置、方向，以此类推，当你为每个时刻编写关于位置、方向的剧本，你可以编排整一出舞台剧。

掌握了时间的艺术，你当然可以编排出在舞台上挪动身体的毛毛虫。你当然知道，那只是时间序列上，位置、方向组合的变化序列，它们骗过了你自作多情、喜欢拟物的认知系统，让你觉得它像一只毛毛虫。

---

好了, 我快编不下去了。

`位置，方向和时间`是制作toio项目的技巧，这个说法不是我提出来的，是toio三位主创在[接受采访](https://toio.io/interview.html)时提到的.

![](/img/toio_c17ae487.png)

他们解释了位置、方向的技术含义，但并未对`时间`做出确切解释，上述关于时间的讨论是我自己的临场发挥。

但我想，应该不会有大的偏差。位置、方向只是一个时间截面上的系统状态，运动发生在时间序列中(想想动画片)。任何的行为无不如此（当然，有些激进的物理学家可能会争论时间只是一种幻觉，只是为了叙事的方便，在此不做讨论）。

运行的程序也可以视为发生在时间序列里的指令序列。

# 废话少说
较真的读者可能会抱怨说, 别整圣·奥古斯丁什么的，关于时间的哲学谈论我们先放一放，好好说技术。在前头的论述里，我们知道了小方块理解它自身的位置和方向，这确实解决了我们不少困惑，但依然有一个问题悬而未决：小方块是如何彼此协作的？在毛毛虫的例子里，它的头部和身体是如何相互配合来移动的？

秘诀是toio小方块会实时报告自身的位置和方向信息，如此一来就可以去构建多个小方块彼此协同的程序了。

# 超越玩具和游戏
一旦理解了Smalltalk的设计原则：`万物皆对象，对象之间通过消息通信`，你就可以使用toio构建复杂的系统； 一旦掌握了如何操控位置、方向和时间，便可以利用toio进行你的叙事，展开无穷无尽的创意。一旦理解了坐标系统，就可以在垫子上开展有趣的活动，诸如模拟新的生物。

toio由于惊人的灵活性和精确度，可以成为非常理想的通用教学平台，无论你希望教学编程、数学还是舞台剧。

Seymour Papert如果活到今天，也许会说toio是理想的Mathland，它比LOGO小龟拥有更多的精度和灵活性，由于其精确的坐标系统和运动控制能力，甚至可以用于讲解微积分(复现Seymour Papert在《Mindstorms》里的例子)。

# 同化
toio是一个简单的机器人，看起来只是一个朴实的小方块。

简单性除了是一种品味，也是一种适合于创造的白纸。

因为toio只是一个朴实的白色小方块，所以你可以将它变成任何东西:

*  我想和我最喜欢的玩偶一起跳舞
*  我想玩我自己设计的角色
*  我想让toio扮演一只小狗
*  让我们在纸上画一个城市，然后把小车套在toio上边吧，让它在城市里自动驾驶。

你可以用它创造自己的世界。

这让我们想到Seymour Papert在《Mindstorms》提到的`同化`概念,这个概念最初来自心理学家让.皮亚杰.

*  >  一件事情，如果你能把它融会到自己的思维方式中，那它就会变得异常简单；如果不能，那它就比登天还难。

*  >  对学习的理解必须是缘起性的。这就是说，它必须追溯到知识的缘起。一个人可以学到的东西，他学习的方法，取决于他现有的思维模型。那他又是怎么获取这些思维模型的呢? 如此说来，所谓“学习的法则”就是新的知识结构如何从现有的知识结构中生长出来，并在这个过程中构建逻辑性和情感联系。

*  >  但是齿轮的作用不仅如此，一方面它和数学知识相连，一方面它和孩童感官动作发展所得的“身体知识”相连。你可以成为一个齿轮，你可以将自己代入到齿轮的运动中，从而理解它的机理。正是这种抽象和具象并存的双重关系，赋予齿轮一种力量，一种让人深深爱上数学的力量。用后续章节将要谈到的一个术语来说，齿轮是一个“移情对象”。

在这个意义上，当孩子使用toio展开创造，当他们使用toio的位置、方向与时间展开思考，toio便成为Seymour Papert所谓的`移情对象`，在这个过程中构建逻辑性和情感联系。

# CodeLab的探索
在CodeLab中我们在用它做什么呢？

我们已经将toio接入到了CodeLab Scratch，它已融入Neverland大家庭，它可以与Neverland空间中的任何事物互动。看一些例子:

### 给我一个toio，我可以转动地球
<video width="300px" src="https://www-old.codelab.club/img/Rotating-the-earth%20.mp4" controls="controls"></video>


### 在你转身之后，岁月黯淡无光
<video width="300px" src="https://www-old.codelab.club/img/toio_neverland_logo_light.mp4" controls="controls"></video>

### 天空没有留下鸟的痕迹，但toio已飞过
<video width="300px" src="https://www-old.codelab.club/img/toio_fly.mp4" controls="controls"></video>


### 复现etoys里的教程
近期在试着复现Alan Kay在[etoys](http://www.squeakland.org)教程里设计的编程入门引导, 也许是目前最好的编程入门引导(毕竟是Alan Kay啊！), 在20分钟的体验里，初学者将接触到所有重要的概念(变量、循环、序列、条件判断、数值计算...而无需被定义之类的东西分散注意力（建构主义比较坚持这一点）

第一个例子，与etoys首页的例子相似。

<video width="300px" src="https://www-old.codelab.club/img/toio-etoys2.mp4" controls="controls"></video>

第二个例子由Neverland体验者构建(第一次编程)，很类似etoys教程里，绘制物体运动轨迹的例子。

<video width="300px" src="https://www-old.codelab.club/img/toio_etoys.mp4" controls="controls"></video>



<!--
# 教育意义
复现etoys
什么是好的玩具

在我眼里有四个

    2019年 挂了很多 cozmo

    索罗斯 人群中的意志 影响他们
    我们看到bret的演讲
    这就是我为何要花一个周末这篇文章

冷凛的美 艺术品
-->

<!--
练习写作 千头万绪 
分布式工作 
像写程序
-->

# 参考
*  [toio.io](https://toio.io/)
*  [toio是什么](https://toio.io/about.html)
*  [开发者访谈](https://toio.io/interview.html)
*  [toio Technology](https://toio.io/platform/technology.html)
 
*  [让人思考的玩具](https://mp.weixin.qq.com/s/Sg7M5tWY5R5hNtCEIhN5Aw)
*  [github.com/toio](https://github.com/toio)
*  [toio lab](https://www.youtube.com/c/toiobySonyJP/)
   <!--创造超越玩具和游戏的新价值-->