---
title: "关于 CodeLab"
author: CodeLab
date: 2020-09-25
tags: ["CodeLab相关"]
---

<img className="img-responsive" src="https://adapter.codelab.club/img/codelab_logo.png" />

> 风雨中抱紧自由

# 是什么?

[CodeLab](https://www.codelab.club/) 是一个非营利组织。

我们的使命是:

> 传递编程的乐趣，鼓励孩子成为数字时代的创作者。

<!--more-->

我们希望与你一起追随热情，制作有趣的项目，寻找志同道合的同伴，一起去表达与创造。

<!--开放、中立、分享、协作，是我们的核心价值观，我们期待更多的创造者、学习者、志愿者加入其中。-->

我们鼓励孩子将编程视为一种生活方式。我们追随约翰·杜威提倡的:

> education as life.

<!--truncate-->

编程这个词听起来有点唬人，有点冰冷，有点不近人情。这个词所勾起的想象，多半是一个木讷的人，黑着眼圈驮着背，盯着黑乎乎的屏幕，屏幕上满是数字、符号和字母。

我们希望打破这种刻板印象，编程也可以平易近人又充满乐趣， 可以是周末聚会时的[击掌奏乐](https://www.codelab.club/projects/)，可以是冬夜里懒得起床用[响指关灯](https://www.codelab.club/projects/), 可以让你儿时的[玩具四驱车变得和动画片里一样智能](https://www.codelab.club/projects/)，可以让你将自己的房间改造成[魔法世界](https://www.codelab.club/projects)。

<!--todo 锚点-->

《理想国》里说:「言语是一种比蜡还容易随意捏造的材料」, 它如此灵活，能够用来与朋友逗乐，用来表达你的思想，用来创造诗歌与小说；编程就像言语，它同样可以用来表达你的想法，用来与朋友逗乐，以及，用来表达和创造。它让你与世间的万物沟通，你可以用它指挥一台飞行器，制作一个[体感游戏](https://www.codelab.club/projects/)。或者在朋友生日那天，在 Ta 进门的一刻，将手中的魔杖一挥，在空中划一个字母 L 的轨迹，瞬间，点亮房间里五彩的灯光。 在 CodeLab，你将轻松做出这样的魔杖，并对周围的世界施以魔法。如果你愿意，可以将 CodeLab 看作霍格沃茨(Hogwarts)。

---

CodeLab 是一个非营利组织， 第一笔捐赠来自罗云先生, 这笔捐赠让我们得以全力以赴做这件事情。有了这笔捐赠之后，我们在广州有了办公室，有了几位全职员工。罗云先生热心于教育事业,给予 CodeLab 多方面的支持,目前也是 CodeLab 的理事之一。

在很多人看来，我们可能有些不切实际，说得好听一点，有些理想主义。我们选择做那些我们认为有意义的事，而不是那些"速效"之事。

虽然我们有些"不切实际"，但在具体执行上，却希望尽可能做到合理、高效，我们阅读[彼得·德鲁克](https://zh.wikipedia.org/zh/%E5%BD%BC%E5%BE%97%C2%B7%E5%BE%B7%E9%B2%81%E5%85%8B)的《非营利组织的管理》、约翰·杜威的《学校与社会》、伯特兰·罗素的《论教育》、伊藤穰一的《爆裂》、米切尔•雷斯尼克的《终生幼儿园》、以及 Y Combinator 的《YC 创业课》。我们去学习[code.org](https://code.org/learn)、[code club](https://www.codeclub.org.uk/)、[microbit](http://microbit.org)、[raspberrypi](https://raspberrypi.org)以及[scratch](https://scratch.mit.edu/)等 优秀的非营利项目的策略。

# 在做什么?

CodeLab 成立于 2018 年底，到 2020 年底，将满 2 周岁。

在过去一年多的时间里，我们追随使命，探索编程教育的各种可能性，我们将大多数的时间花在基础设施的构建上。

## 编程环境

今天的孩子大多是通过 Scratch，或者由它所启发的图形化编程工具，进入计算机世界。 Smalltalk 社区和 MIT Media Lab 在过去十多年里， 对图形化编程做了出色的探索工作。

CodeLab 在基础设施上的工作始于这样一个疑惑: 新的技术不断涌现，从 AI 到物联网，从开源硬件到虚拟现实，计算机比过去有更强的表现力，我们如何将这些表现力释放出来，供孩子们自由表达与创作？ 正如 Scratch 尝试站在「表达媒介(Media)」的角度对 LOGO 做出改进，我们能对 Scratch 做出什么改进呢？

对这个问题的回答，我们主要受到 Smalltalk 社区的影响(我们将 Scratch 视为 Smalltalk 社区文化的一个产物)，目前我们交出的答复是: [CodeLab Adapter](https://adapter.codelab.club/)。

> CodeLab Adapter 是一个由 Python 构建的软件(构建在消息之上(Everything Is a Message))， 致力于连接万物，无论是软件还是硬件，无论是 AI、开源硬件、现实世界的物体、还是虚拟世界的动画角色，接入 CodeLab Adapter，皆可彼此互动。

我们的想法是构建一个开放的消息系统，让一切事物(Object)在系统中自由交流(Talk)。 这主要受到 Alan Kay 的消息/对象模型的影响。

当我们将[CodeLab Adapter](https://adapter.codelab.club/)接入 Scratch 时。 Scratch 得到接入任何事物的能力，如此一来，孩子们便可在创作环境中自由表达，甚至将现实世界作为可编程的材料， 此时孩子仿佛处在一个可编程的大陆中(land)。[CodeLab Adapter](https://adapter.codelab.club/)独立于 Scratch，它可以赋予任何编程语言这种能力。

相比于在美国法语培训班学法语的孩子，在法国学法语的孩子能够更流利地言说法语，因为他处在法语的世界(land)里。

我们也想为孩子们构建一个环境，环境中的事物皆可通过编程与之沟通，在这个可编程环境里，学习编程，就如在法国学习法语。

### 可编程空间

> 后来，他领着我飞到了永无乡(Neverland)，那儿还有仙子，还有海盗，还有印第安人，还有人鱼的礁湖；还有地下的家，还有那间小屋子。 --《小飞侠彼得·潘》

可编程**环境**是一个宽泛的概念，无论是现实世界的物体、还是虚拟世界的动画角色，我们都将其视为**环境**的一部分。

Scratch 构建了精彩的虚拟世界，我们都喜欢在 Scratch 的舞台区表达想法。当我们受 Dynamicland 的影响，将环境的概念延伸至现实世界时，我们便开始了可编程空间之旅: [CodeLab Neverland](https://codelab.club/blog/2020/04/29/%E5%8F%AF%E7%BC%96%E7%A8%8B%E7%A9%BA%E9%97%B4)。

CodeLab Neverland 是一个:

-   可编程
-   可理解
-   可探索
-   可扩展

的**开放**空间。

<video width="80%" src="https://scratch3-files.just4fun.site/CodeLabVideos3_5m.mp4" controls="controls"></video>

Neverland 也是我们的办公室，我们在其中办公，在其中编程，在其中玩乐，在其中做一些有趣的探索和创作。

关于 CodeLab Neverland，这儿有 100 多个[演示视频](https://www.codelab.club/projects)。

视频里的许多案例，是访客来访时与我们一同构建的，他们有的出主意，有的出力气，有的动手画画，有的扮演魔法师。在过去 1 年多的时间里，我们接待了过百位访客，他们中的大多数是孩子、 hacker、资深 geek、科技从业者 和 STEM 领域创业者。

### 社区

![](https://adapter.codelab.club/img/6595d0c70dbcb62dc01e576286279432.png)

近期 CodeLab 开放了高度兼容于 MIT Scratch 的[社区](https://scratch.codelab.club/)(关于兼容性可参考[这儿](https://blog.just4fun.site/post/%E5%B0%91%E5%84%BF%E7%BC%96%E7%A8%8B/scratch3_api_analysis/))，发布不久，已经积累了超过 4000 个项目。

我们希望在国内构建一个开放、中立、由非营利组织推动的社区。

社区面向所有人开放，我们鼓励孩子们在其中探索有趣的项目，寻找志同道合的同伴。

CodeLab 社区才开放不久，还有许多不足。 但如果你偏好开放、中立的社区，喜欢干净、友好的社区氛围，CodeLab 社区或许会是理想的选择。

在 CodeLab 社区，你不是我们的产品，你是目的本身。

我们将「线上社区」也视为**环境**的一部分，我们希望它往多元化方向发展，**连接**有趣的想法和有创造力的人。

## 内容与活动

截至目前，基础设施已经趋于完善。

我们接下来的大多时间，将花在教育内容、活动运营的探索上。近期我们尤其关注线下 club(可编程空间) 的设计和运营。我们正与合作方在全国多个城市，落地可编程空间。我们也计划这个月底给出更完整的空间设计和运营方案。

在 2020 年的暑假里，我们分别探索了线下和线上的两期编程活动，效果令人满意，尤其是孩子表现出来的热情以及创意的多元化。这些实施的材料近期也会开放在官网，供 CodeLab 志愿者在不同地方实施它。

截止到今年年底，我们计划发布 3 门 mooc 课程, 分别围绕 Scratch 入门、Python 入门以及 CodeLab 可编程空间。这三门课程，会有别于市面上的内容，我们希望它足够有趣，让孩子一开始就"玩起来"(`real playing`)。

此外，我们还计划开放 16 个 workshop 的实施方案。 并上线新的[技术文档](https://adapter.codelab.club/)（提升可理解性）。

# 未来计划

<!--
![](https://adapter.codelab.club/img/codelab_plan.png)
-->

![](/img/codelab_branch.png)

我们计划从 2 个角度谈论 CodeLab 在未来计划做的事情:

-   服务
-   产品

## 服务

CodeLab 是一个非营利组织，非营利组织一般会向社会提供某项有价值的服务。

我们对社会提供两项服务:

-   CodeLab 线上社区
-   CodeLab 线下 Club

我们希望 CodeLab 线上社区能成为一个开放、中立、友好、充满想象力的社区。 我们相信非营利组织形态能很好推动这项事业。

此外，我们计划与合作方，在全国各地建设 CodeLab 线下 Club，这些 Club 欢迎孩子们在课后时间随时加入，在其中编程、表达与创作，在其中追随自己的热情，与同伴一同构建富有想象力的项目。

我们希望将这些 Club 建设为孩子们进入充满想象力的编程世界的传送门。

围绕这两项服务，我们会持续完善基础设施并不断推出有趣的内容。

## 产品

我们试着将技术上的探索产品化。目前外部对我们的兴趣，似乎主要集中在我们在技术上的探索。

实际上，在技术方面所展示的想象力绝非我们原创，它们更多来自 Smalltalk 社区在过去几十年的探索和思考。 我们相信这里头有许多真正重要的东西，很可惜，它们逐渐被主流技术社区所遗忘或或忽视。这些想法主要关于计算机的人文属性，关于把计算机看作一种表达媒介，也关于将计算机视为一种环境和代理(Agency)。

如果我们静下心来思考计算机对孩子的意义是什么？上述的意义远比某种算法技巧或者程序语法重要得多。

我们希望大家重视这些技术背后的东西。 推动这些想法进入大众视野，最有力的一种力量可能来自商业。

不断有商业公司希望与我们在技术上达成某种合作，这块我们在未来将不断探索。

我们也希望通过授权产品，探索与商业公司合作的可能性，以获得持续稳定的收入，让我们有更多资源投入到其他重要的事业之中，诸如构建乡村编程俱乐部。

我们计划持续推动以下项目的产品化:

-   CodeLab Adapter
-   CodeLab Neverland
-   CodeLab DynamicTable

# 如何参与

<!-->  那些疯狂到以为自己能够改变世界的人， 才能真正改变世界。 -- 史蒂夫·乔布斯-->

CodeLab 是一个非营利组织，这种组织形态让我们能全力以赴追逐使命。 如果我们不去做，这些值得去做的事情，短期内似乎就不会发生。

如果没有你的参与，我们成功的机会便很渺茫。

有很多种方式参与 CodeLab。

你可以成为志愿者，帮助组织活动; 可以贡献出你的技能，为 CodeLab 设计海报、编写代码、编写剧本、撰写文章、翻译国外优质内容......以及其他你能想到，而我们没想到的。

你也可以全职加入。我们希望你充满热情，热爱分享、热爱科技、热爱教育、热爱创造。对了,我们招聘的硬性要求是，你必须读过《Mindstroms》和《终生幼儿园》这 2 本书 :)

codelab 准备做很多有趣的事，你有任何想法，都欢迎随时联系我们: wuwenjie@codelab.club

也欢迎你将本文分享给你身边可能对此感兴趣的朋友。

Just for fun, just for you :)

# 参考

-   《Mindstorms》
-   《终生幼儿园》
-   [关于 CodeLab(旧版)](https://www.codelab.club/blog/2018/11/08/about-codelab-club)
-   [CodeLab 官网](https://www.codelab.club/)
-   [CodeLab 近况与未来\_02](https://blog.just4fun.site/post/%E5%B0%91%E5%84%BF%E7%BC%96%E7%A8%8B/codelab-recent-situation-and-future/)
-   [CodeLab Adapter](https://adapter.codelab.club/)
-   [CodeLab 可编程空间背后的理念与设计原则](https://codelab.club/blog/2020/04/29/%E5%8F%AF%E7%BC%96%E7%A8%8B%E7%A9%BA%E9%97%B4)
-   [CodeLab DynamicTable: A Seeing World](https://codelab.club/blog/2020/05/31/DynamicTable/)
-   [dynamicland](https://dynamicland.org/)
-   [MIT Scratch](https://scratch.mit.edu/)
