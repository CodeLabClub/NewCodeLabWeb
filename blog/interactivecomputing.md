---
title: CodeLab【交互计算】课程发布
date: 2021-06-01
tags: ["编程学习", "CodeLab 相关"] 
---

## 课程概览

### 什么是【交互计算】？

【交互计算】(Interactive Computing) 是 [CodeLab](https://www.codelab.club/) 设计的一门 Python 编程入门课程。【交互计算】围绕动画、音乐、游戏等主题的创作，在 Scratch 和 JupyterLab 这种交互式编程环境中进行测试、探索、迭代，在和 Scratch 角色、 Python 程序互动的过程中表达自己的想法，实现自己的创意。

<video width='80%' src="https://adapter.codelab.club/video/0-课程介绍.mp4" controls="controls"></video>


<!--truncate-->

【交互计算】包含 10 个单元，课程主题的选择兼顾了趣味性和 Python 基础知识的衔接：

1. 编程准备
2. 数学计算
3. 音乐创作
4. 动画制作
5. 文字游戏
6. 画笔几何
7. 用户界面
8. 游戏设计
9. 聊天机器人
10. 综合应用
### 适合什么人学习？

【交互计算】是一门 Python 编程入门课程。Python 是文本编程语言，这就要求学习者能够比较熟练地操作计算机（如打字），结合课程内容对认知水平的要求，建议学习者年龄在 11 岁以上。这门课程同样使用 Scratch 进行编程，需要学习者有一定的 Scratch 基础。如果没有学过 Scratch，建议先学习[【创意编程】](https://creative-coding.codelab.club/)课程。如果你满足这两个条件，并且满足以下条件中的任意一项，就可以开始学习和探索。

* 想学习 Python 基础知识
* 想创作动画、音乐、游戏等项目
* 对编程感兴趣，想用有趣的方式学习编程
* 想拓展 Scratch 的边界，创作功能更丰富的作品
### 如何学习课程？

【交互计算】的学习材料包含课程讲义、学习讲义、[课程视频](https://www.bilibili.com/video/bv1SN411Z7ek)。课程讲义包含单元引入、项目代码、编程百科，内容按照学习流程进行呈现。学习讲义包含学习目标、编程准备、项目制作和拓展部分。

![image.png](/img/IC1.png)

在学习过程中，你可以按照学习讲义中的流程进行学习，并观看课程视频进行编程创作。课程讲义可作为学习参考，比如回顾编程知识，参考项目最终代码，了解拓展项目和资料。课程中用到的 Scratch 知识如果没有学过，可以查看[【创意编程】](https://creative-coding.codelab.club/)课程的相应章节。【交互计算】课程可自学，如果能找到同伴一起学习，效果会更好。

![image.png](/img/IC2.png)

课程材料以 Jupyter Notebook 的形式内置在了 [CodeLab Adapter](https://adapter.codelab.club/) 软件中，打开 Adapter 即可使用。第一次使用请先按照[第 1 课视频](https://www.bilibili.com/video/BV1SN411Z7ek?p=2)的提示设置好编程环境。如果学习过程中遇到问题，欢迎你来 CodeLab 论坛的[【交互计算】版块](https://discuss.codelab.club/c/22-category/33-category/33)交流。

## 设计原则

### 创意实现

编程是帮助我们实现创意、表达自己的方式，它是比纸笔更灵活的创作工具。掌握 Python 基础知识并不是【交互计算】课程的重点，编程知识就像做菜的食材，最终的目标是做出名为“创意”的美味菜肴，我们希望通过编程能够更好地表达自己的想法。

![image.png](/img/IC3.png)

你可能会有疑问，为什么要结合 Scratch 来做项目呢？这里仍然是围绕创意实现这个原则来设计的。Scratch 自带的动画、声音、舞台等媒体属性是非常合适的表达想法的媒介，但对于数据处理以及和计算机系统打交道，Scratch 并不擅长。此时，Python 就成为增强 Scratch 的工具。少儿编程课程的学习路径很多是从 Scratch 开始，然后再过渡到 Python，但在这个过程中，这两种编程语言是割裂的，无法进行很好地协作，而通过 CodeLab Adapter 的连接，它们可以顺畅地沟通和互动，发挥各自的优势，拓展了创作和表达的边界。

### 交互式编程

创作是一个不断迭代的过程，我们往往是有了一个初步的想法，制作 Demo 进行测试，然后不断迭代。如果创作环境足够灵活和开放，方便测试和迭代想法，那么更多的创意就有可能实现。在 Scratch 中，你可以点击积木，测试它的作用，先制作一个作品 Demo，看看效果，然后不断修改。在这个过程中，你和 Scratch 角色互动，观察他们的反应，你可能会发现有趣的现象，产生新想法，然后不断重复这个过程。《Mindstorms》用认识人的过程来类比知识的认知过程，对一个人的认识来自不断的互动交流，在和知识不断互动的过程中，更深入的理解也得以发生。在 Scratch 这种交互式编程环境下，你和具体角色互动，探索各种可能，新想法也不断产生，及时反馈带来创作的乐趣。

![image.png](/img/IC4.png)

近年来，[JupyterLab](https://jupyter.org/) 正逐渐成为一种交互计算的开放标准。在 Python 编程中，使用 JupyterLab 进行数据分析和制作 AI 项目已成为一种主流的选择，这得益于 JupyterLab 交互式的编程环境。数据分析和 AI 领域经常要和数据互动，你可以在 JupyterLab 的单元格中编写小段代码进行测试，将结果可视化，实时观察参数变化带来的影响。它还支持插入文字、图片、音频、视频、网页，这种富媒体属性决定它可以成为一种记录思考和探索过程的动态媒介，在这个过程中，想法和实践得以动态呈现，思考变得更流畅。【交互计算】课程通过 Adapter 将 Scratch 和 JupyterLab 这两种交互式编程环境进行结合，为编程创作提供了更友好的环境。

### 可理解

为了增加 Python 知识的可理解性，Python 编程课程经常以海龟画图或游戏设计作为课程主题，因为图形天然比单纯的文本更直观，和图形互动可以带来更多乐趣。【交互计算】结合 Scratch 进行编程也是基于此，Scratch 舞台成为动画、音乐、游戏的发生地，学习者以舞台导演的视角和 Scratch 角色互动，编程概念变得可理解和有意义。在呈现 Python 知识时，将它和 Scratch 对比，和学习者已有的概念建立连接。在【交互计算】课程中，Scratch 和 Python 是如何协作的呢？Scratch 负责视觉呈现或 UI，Python 负责数据处理，发挥各自的优势。

![image.png](/img/IC5.png)

### 学习社区

虽然这是一门可以自学的课程，但在设计课程的时候，同伴仍是我们重视的一个部分，为此，我们构建了在线学习社区。每个单元会设置作品工作室，我们鼓励你将作品分享到 [CodeLab 社区](https://create.codelab.club/)和工作室。在 CodeLab 论坛也开设了[【交互计算】讨论区](https://discuss.codelab.club/c/22-category/33-category/33)，我们希望你和同伴产生连接，在和作品、人的互动中获得更多乐趣。

![image.png](/img/IC6.png)

## 致谢

课程讲义中编程百科的设计参考了《Head First Python》，使用图文结合来呈现编程知识。课程主题、工作室、改编机制的设计受到了[《Creative Computing》](http://scratched.gse.harvard.edu/guide/)课程的启发，在此表示感谢。课程视频的录制和制作也得到了[英荔教育](https://www.eliteu.cn/)的大力支持，特别感谢 @Kenny 剪辑课程视频并协助视频录制，感谢 @leeyve 安排人员和场地。

## 使用协议

本课程以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 协议发布。

