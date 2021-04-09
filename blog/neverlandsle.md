---
title: "NeverlandBeats"
date: "2021-04-08"
tags: ["Neverland"]
---

## **Let's track the beat!**

上一篇文档中已经提过，目前所有工作都源自最开始想要通过声音和视觉（包括平面和灯光）为空间渲染气氛这一简单想法，使用 Python、CodeLab Adapter 和 Scratch 做一些交互。出于对音乐节奏的个人偏好与兴趣，所以当下最关心的问题是实时节拍分析及应用，以下呈现的 Demo 是已做的一些尝试供与大家讨论交流之用。

<!--truncate-->

### **Demo 0: 最初的尝试**

![01 消息 1](/img/01light.png)

![01 消息 2](/img/01light2.png)

![CodeLab Neon Screen](/img/neonscreen.png)

以上三个项目关于编码与拼写，前两个受[《编码》](https://book.douban.com/subject/4822685/)这本书的影响，利用灯泡的明灭对应 1 和 0，进而通过 8 个灯泡的明灭表达 26 个英文字母，由此可以来发送消息，如 CodeLab（可以区分大小写）。[第一个项目](https://create.codelab.club/projects/4676/)是展示性的，[第二个项目](https://create.codelab.club/projects/4674/)是交互性的，可以拖拽字母到中间发送区域，如果接入房间内的智能灯泡，就可以用实物表达，就像《编码》最开始举的通过手电与邻居小朋友黑夜隔空交流的例子。

第三个项目（[CodeLab Neon Screen](https://create.codelab.club/projects/5250/)）以类似荧光屏与像素风格的效果动态呈现用户输入的英文单词，借助 Adapter 可以支持区分字母大小写以及基本的标点符号，当时也有试过通过 NetworkZero 插件实现单词在两个 Scratch 舞台上的接续打印。

<br></br>

<video width="80%" src="https://adapter.codelab.club/video/1608519188336306.mp4" controls="controls"></video>

音乐来自 How Did I Get Here by ODESZA

这个非常简单，只是利用 Scratch 与投影在房间内做了一点效果。

<br></br>

<video width="80%" src="https://adapter.codelab.club/video/1608519188329664.mp4" controls="controls"></video>

音乐来自 Soldier by Fleurie

<video width="80%" src="https://adapter.codelab.club/video/1608024789501962.mp4" controls="controls"></video>

音乐来自 Memories That You Call (feat.Monsoonsiren) by ODESZA & Golden Features VIP Remix

以上两个视频所示的操作也非常简单，直接使用了 [MusicBeam](https://www.musicbeam.org/) 这个基于 Processing 的软件。MusicBeam 使用投影仪投影做出了类似射灯的效果，视频中类似白色雪花或是移动的彩色横线等效果其实都是平面的。棒的是，这个软件会实时分析音乐节拍，使视觉效果与其呼应。我非常喜欢这个软件，后面一些工作也受了它的影响。

既然讲到了 MusicBeam，就把前期看到的其他几个项目在此也一并列出，他们的效果、风格、选用的音乐都很棒，所以想要参照他们在这个方向上做一些尝试，后面的部分工作也受了他们的影响。

<br></br>

有两个 web 项目，分别是 [Party-mode by Mathew Preziotte](https://preziotte.com/partymode/)，如下方视频所示，作者设计了数种不同样式（抽象几何图形风格）、不同配色的音频视效，应用内有作者的默认歌单，也支持网络曲库或本机麦克风音频。

<video width="80%" src="/img/partymode.MP4" controls="controls"></video>

音乐是 Forgot About Me by Mononome

以及 [Drivey by Rezmason](https://rezmason.github.io/drivey/)，如下图所示，项目主要是围绕驾驶的多种视觉效果（也配置了一个 Spotify 歌单），风格太赞，隧道、道路行驶应该也是计算机图形学中的基本项目，想在 Scratch 中学做，官方社区里也已有很多很棒的项目。

![drivey](/img/drivey.png)

<br></br>

最后还有一款 VR 节奏游戏，叫做 [Beat Saber](https://store.steampowered.com/app/620980/Beat_Saber/)，游戏没有玩过，感兴趣的是音乐节拍分析在体感游戏中的应用。因为游戏官方曲库内的歌曲数量有限，玩家社区就自己做了很多 song mapper，其中就涉及音乐信息提取与分析，可以参看以下两篇教程：

[Introduction to music information retrieval with LibROSA and Beat Saber](https://towardsdatascience.com/introduction-to-music-information-retrieval-with-librosa-and-beat-saber-48daedb8653e)

[BeatMapSynth: An automatic song mapper for Beat Saber](https://medium.com/swlh/beatmapsynth-an-automatic-song-mapper-for-beat-saber-aa9e59f093f8)

![beatsaber](/img/beatsaber.JPG)

<br></br>

### **Demo 1: Neverland BigBang**

<video width="80%" src="https://adapter.codelab.club/video/eb22d4aeaf623afe259f30bd1aaefd.MP4" controls="controls"></video>

音乐来自 Your Love Will Set You Free by Caribou

视频中所做的事：使用 Python [Pydub](http://pydub.com/) 库切割已下载到本地的某音乐，然后使用 [Librosa](https://librosa.org/) 库离线分析音乐片段的节拍，拿到该段音乐的 BPM 值（beats per minute）以及 beats 时间序列（具体操作可参考[这里](https://musicinformationretrieval.com/beat_tracking.html)），然后分别使用 Python 控制房间内的智能彩灯、使用 Scratch 播放本地音乐及制作平面视觉内容，通过 CodeLab Adapter Linda 实现 Python 与 Scratch 的联动。因视频中可见的智能彩灯不能追上节拍的时间序列快速闪动，所以使用其内置的 Disco 模式，按照该段音乐的 BPM 闪烁。在 Scratch 中，图形的变化可以精准踩在节拍的时间序列上，即所见的彩色关键词与烟花效果的出现。视频对应的 Scratch 项目在[这里](https://create.codelab.club/projects/9088/)，切割音乐、离线分析节拍以及控制彩灯的 Python 部分代码如有需要还需再整理。

<br></br>

### **Demo 2: 关于响度**

Scratch 自带监测声音响度的积木，如果选用，火狐浏览器就会自动弹出麦克风选择窗口（chrome 浏览器没找到这个功能），其实就是选择音源输入设备，基于此做了如下小项目。

#### 2.1 使用 Scratch 画笔动态绘制音频声波图

Scratch 项目[在此](https://create.codelab.club/projects/9086/)

![soundwave](/img/soundwave.png)

#### 2.2 用声音点亮灯光

如果选择电脑的内置麦克风，就可以监测环境中的声音，如果同时接入了智能灯光设备，就可以用灯光色彩或明暗的变化来反应空间内声音响度的变化。下面这个项目就是年前在英荔汇景空间活动时使用的开场项目，通过鼓掌制造声音，逐渐调亮空间内智能灯的明度，同时 Scratch 舞台上人物的数量也逐渐曾加，项目[见此](https://create.codelab.club/projects/9087/)。

![声音点亮灯光](/img/lightsup.png)

<br></br>

### **Demo 3： Neverland 声音盒子与播放器**

<video width="80%" src="/img/soundbox.MP4" controls="controls"></video>

音乐是 Forgot About Me by Mononome；new dawn. by Sirch；Start Shootin'(Little People's Americana remix) by Little People

这也是年前围绕声音的响度做的一个小项目，用到了两个 Scratch 项目，项目之间通过 Adapter Python 插件互发消息。左侧声音盒子项目负责存储和播放音乐以及控制音量大小，右侧声音播放器项目负责呈现控制按钮（播放/停止、下/上一首、音量增大/减小等）以及视觉效果。当时之所以分两个 Scratch  项目是因为不能在一个项目中同时实现播放音乐和侦测音乐的响度（意味着 Scratch 不支持 full-duplex？）。如果接入雷达，可以利用投影把右侧声音播放器项目投射在地面上，配合音乐呈现各种视觉效果的同时，用脚踩按钮来控制各项功能。如右下角灯泡图标所示，还能接入空间内的智能彩灯（如射灯等）来营造更为整体的效果。记得年前也在汇景空间接入雷达实验过，是可行的。现在回头看很多部分还是做得简单粗糙的，特别是视觉效果，接下来可以根据当前的进展再做优化。

声音播放器项目[在此](https://create.codelab.club/projects/9100/)，声音盒子项目[在此](https://create.codelab.club/projects/9099/)。

<br></br>

### **Demo 4：流动绘制音频频谱**

<video width="80%" src="/img/intro.MP4" controls="controls"></video>

音乐来自 Intro by The xx

<video width="80%" src="/img/spectrogram_girl.MP4" controls="controls"></video>

音乐来自 Girl by Jamie xx

这两个项目都是使用 Python 对音频做实时分析，通过 Adapter EIM 将结果同步给 Scratch，然后在 Scratch 内实时绘图，[前一篇文档](https://codelab.club/blog/2021/03/30/livespectrogram)还有[仓库主页](https://github.com/CodeLabClub/NeverlandBeats)都有详细说明，这里不再重复。

<br></br>

### **Demo 5：Drop the beat!**

<video width="80%" src="/img/dropthebeats.MP4" controls="controls"></video>

音乐来自 Sleep Sound by Jamie xx

基于 Python [Madmom](https://madmom.readthedocs.io/en/latest/) 库对音乐做实时节拍分析，通过 Adapter EIM 将结果同步给 Scratch，画面中背景颜色的变化以及灰色小球的下落映射节拍时间序列。[向这个项目（When Marbles Falling onto Piano Keys Happen to Play Music）学习](https://delu.medium.com/when-marbles-falling-onto-piano-keys-happen-to-play-music-af7c9d0934a6)，使用 [CodeLab Scratch](https://create.codelab.club/) 内置 Box2D 插件，模拟小球的自由落体与碰撞。

这个项目还需优化，先放出来供与大家讨论交流之用。目前发现的问题：节拍分析代码还需调试；在 Scratch 中生成大量克隆体并同时使用 Box2D 时，可能会明显卡顿，使用 AddOn 内的一些配置也不能解决；颜色变化需要优化；使用 [SimpleScreenRecorder](https://www.maartenbaert.be/simplescreenrecorder/) 录屏时好像也会对 Scratch 有影响，会有一点延迟？




