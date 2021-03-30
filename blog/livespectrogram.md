---
date: "2021-03-30"
title: "使用 Python、Adapter EIM 与 Scratch 绘制流动的音乐频谱"
tags: ["技术文档","Adapter"]
---

所做的事就是使用 Python 实时地读取并分析音频数据，通过 Adapter EIM 插件将结果列表同步给 Scratch，在 Scratch 中利用画笔功能将结果画图呈现出来，最终效果即下方视频所示。代码可见 [github 仓库](https://github.com/CodeLabClub/NeverlandBeats)。

<video width="80%" src="/img/spectrogram_girl.MP4" controls="controls"></video>

因为牵涉的内容很多，难以在一篇文章中全部展开完整写出，因此下面仅列出过程中相对重要的关键点及对应的参考资料和工具，大家如有兴趣之后可以根据自己的需要去了解更多。

以下内容，基本都源自网上各种教程与资料，写作的时候也是根据自己的理解直接陈述的，如有错误之处还请更正指教。

<!--truncate-->

整件事最一开始的想法就是利用灯光和音乐（甚至包括烟雾）为空间渲染气氛，可以想想 Livehouse 的感觉。当时看到了几个非常棒的项目，特别是：

[Party-mode by Mathew Preziotte](https://github.com/preziotte/party-mode)

基于 d3.js 和 web audio api 在浏览器中呈现实时响应音乐的视觉效果

[MusicBeam by Johannes Maron](https://www.musicbeam.org/)

基于 processing，将投影仪用作激光灯，也是实时响应音乐节拍投射多种视觉效果在空间内

受这些项目的感染与影响，尝试基于 Python 与 Scratch 做一些声音与视觉的交互，最想做到的是实时地分析音乐的节拍，然后将灯光、视觉与节拍的时间序列做灵活映射，当前这个项目也是在此过程中完成的。

整件事主要关系到以下四个方面：

## **音乐信息提取（Music Information Retrieval）**

这是一个独立又活跃的研究领域，音乐节拍分析是其中一个非常重要的课题，每年还会围绕多个课题进行算法比赛，具体可见 [mirex 主页](https://www.music-ir.org/mirex/wiki/MIREX_HOME)。如果对音乐信息提取感兴趣，请查看这个 [jupyter notebook](https://musicinformationretrieval.com/)。这里面对每个部分都有清晰地介绍，可以在 GitHub 上 fork 它，跟着讲解与演示，使用 python 分析配套的音频示例，当然也可以下载自己喜欢的音乐进行分析。如果真的这样做了，你会发现，这里面主要依赖 [librosa](https://librosa.org/) 这个库，网上其他很多音乐分析相关的教程也是如此。但其实除此之外，还有一个很棒的库，叫做 [madmom](https://github.com/CPJKU/madmom)！当前项目主要也是用的它。至少在 track the beat 这项任务上，madmom 会是更好的选择。因为它不仅可以对音频文件做离线的节拍分析，同时也支持实时在线的分析，而且它基于机器学习的节拍分析算法多次在 mirex 比赛中位居前二。。

<!--列出节拍分析相关的参考文献，以及 madmom 还有 librosa 发布的文章链接-->


## **数字信号处理（Digital Signal Processing）**

因为手机、电脑中存储和播放的音乐都是数字化了的音频，所以利用计算机对音频信息的收集、处理和分析涉及数字信号处理领域。

### **采样（sampling）与量化（quantization）**

物理世界中由于振动产生的声波是随时间连续变化的，但计算机的世界是离散的，因此只能在连续的声波中有间隔地采集一些点，用这些有限、离散的点去尽可能逼真拟合物理世界中无限、连续的声波，这里主要对应采样（sampling）与量化（quantization）这两个概念，可以参考[这里](https://www.tutorialspoint.com/digital_communication/digital_communication_sampling.htm)理解。因为人耳能够听到的声音频率大致在 20 Hz-20 KHz 之间，依据 Nyquist theorem（即采样率至少要是实际声音构成中最高频率的 2 倍以上），所以音频的采样率多是 44.1 KHz。此外这里还需提一下量化概念下的字节深度（bit depth），即一次采样（sample）对应的振幅大小的取值精度，代码中取的是 2 的 16 次方，即代码中可能会看到的对音频流数据格式的定义，如 numpy.int16 或 pyaudio.paInt16。如果不考虑正负号，也就是说振幅的取值有 2 的 15 次方这么多种可能。很明显，字节深度越大，数字音乐的音质会更好。

### **傅立叶变换（Fourier Transform）**

这既是整件事的核心，也是过程中遇到的最大障碍。困难之处主要体现在以下四个方面：

#### **对它本身含义的理解**

参考：

[But what is the Fourier Transform? A visual introduction](https://www.youtube.com/watch?v=spUNpyF58BY)

[An Interactive Guide To The Fourier Transform](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/)

[(Visual) Understanding the Fourier transform](https://web.archive.org/web/20120418231513/http://www.altdevblogaday.com/2011/05/17/understanding-the-fourier-transform/)


先放上对我最有帮助的三个图形化解释，其实每一个都看了好多遍，同时又看了很多其他的东西，结合代码的运行，才逐渐理解。如此困难的原因可能是因为相比时间还有线性函数关系，至少我自己，对于频率和正余弦函数关系更陌生不顺手。但只要愿意付出时间和努力，还是可以亲近起来的。

傅立叶变换到底是在干什么？常见的一句话解释就是将信号从时域转化到频域。声音是由于振动产生的，在描述振动时，会使用到频率这个概念，即每秒钟振动的次数。每一个声音信号都可以看作是不同频率的振动叠加产生的，傅立叶变换就是要把这些频率成分拆解出来。


#### **离散傅立叶变换（Discrete Fourier Transform，DFT）、快速傅里叶变换（Fast Fourier Transform，FFT）和短时傅立叶变换（Short-time Fourier Transform，STFT）的区分**

这是三个很重要但一开始又容易混淆的概念。先说 DFT，还记得采样率 44.1 KHz 吗，虽然真实物理世界中频率是连续变化的，但数字信号是离散采样的，频率都是离散取整的，所以要用 DFT。再说 FFT，它就是 DFT 的实际算法实现。当把信号的所有频率成分拆解出来之后，如果想看到他们随时间的变化情况，就要用到 STFT，即对信号按固定窗口大小有重叠地做 FFT。所以 STFT 相比 FFT，多了一个时间的维度。视频中所示的项目做的就是 STFT 分析，仓库内另有一个项目做的是 FFT 分析。

可参考下面两篇文章进一步理解：

[Breaking down confusions over Fast Fourier Transform (FFT)](https://medium.com/analytics-vidhya/breaking-down-confusions-over-fast-fourier-transform-fft-1561a029b1ab)

[Simplifying Audio Data: FFT, STFT & MFCC](https://medium.com/analytics-vidhya/simplifying-audio-data-fft-stft-mfcc-for-machine-learning-and-deep-learning-443a2f962e0e)


#### **关于傅立叶变换的代码实现**

其实 FFT 或 STFT 在 Python 库如 Numpy 或 Scipy 中都是一个函数的调用就能完成，但是在从音频流中读取到数据之后、做 FFT 之前，以及 FFT 函数调用之后，不同教程中对数据的处理流程并非完全一致，所以最为标准化、完整的处理流程应该是什么，并不明确。参照 [Maker Portal](https://makersportal.com/) 上几篇音频相关的教程（在我看来最严谨完整的），另查了一些资料之后，最终使用的数据处理流程见仓库内 [online_audiofft.ipynb](https://github.com/CodeLabClub/NeverlandBeats/blob/master/AA_realtime_audiofft.ipynb)。


#### **其他相关概念**

在初期阅读代码、教程及相关材料的过程中，还有许多意义不明的概念也带来很大困扰，所以在这里也稍作简单解释。

**sample**

采样的样，就是指这个，即某一个时间点上声音的振幅，当采样率（sample rate）是 44.1 KHz 时，就是每秒钟采集 441000 个 sample

**frame**

在极个别情况下有看到将 frame 等同于 sample 使用的，但是绝大多数情况下两者是不同的，frame 有些类似于组的意思，将一定数量的 sample 算为一组即一个 frame，然后以 frame 为单位做数据处理和分析（librosa 与 madmom 都是如此）。通常都是取 2 的次方数，如 1024 或 2048 等（见代码中的 frame_size 参数）

**hop size**

前面说过 STFT 是以固定窗口大小做有重叠的 FFT，每次向后推进的不重叠部分的 sample 数即为 hop size

**window**

在做 FFT 之前，先对数据施加一个（代码中是 Hanning）窗口函数，主要是为了使实际抽取的数据更符合 DFT 的假设条件，可参考下面这篇文章：

[Understanding FFTs and Windowing](https://download.ni.com/evaluation/pxi/Understanding%20FFTs%20and%20Windowing.pdf)

**chunk**

类似 frame 的含义，只是在不同语境下使用。STFT 中都是用 frame，当强调从/向音频流（stream）中读/写数据的操作时，很多用 chunk，每个 chunk 一般也包含 2 的次方个 sample，如 1024、2048 等

**buffer**

读取或写入或分析音频流的数据时，都不会一次性整体完成，而是分成一小段一小段地依次重复完成（即上面的 chunk 或 frame）。在此过程中，就需要临时的数据存储，即 buffer

**bin**

可以理解为某一个频率值，如 440 Hz

**band**

一组频率区间，如 0 - 43 Hz。人耳能够听到的频率范围约是 20 Hz - 20 KHz，即使只取整数这之间也包含了太多数值，所以多合并分组（即 band）呈现结果，视频中圆点矩阵有 12 行，就是将频率按对数关系分成了 12 个 band


## **实时分析**

**音频流**

主要依赖 [PyAudio](https://people.csail.mit.edu/hubert/pyaudio/docs/) 这个库来实时读取音频流中的数据并进行分析，它是 [PortAudio](http://portaudio.com/) 的 Python bindings，可以用来播放和录制音频，madmom 也是依赖它。除了 PyAudio，后来发现还有一个 [python-sounddevice](https://github.com/spatialaudio/python-sounddevice)，这个库当前还在活跃维护中，我其实觉得会更好用些，特别是文档中针对不同功能给出的多个[例子](https://python-sounddevice.readthedocs.io/en/0.4.1/examples.html)，是非常好的学习材料。视频中演示的项目依赖 madmom，直接实现了在线分析的功能，底层通过 PyAudio 对音频流实时的操作已被 madmom 完成，仓库内另一个项目是直接使用 PyAudio 对数据做实时 FFT 分析并在 Scratch 中以类似 Bar 图的效果呈现 10 个频率 band 的结果。前面提过的 Maker Portal 的作者还[对麦克风以及噪音做了校正与处理](https://makersportal.com/blog/recording-stereo-audio-on-a-raspberry-pi)，这部分实在超出能力范围且目前对精度也没有那么高的要求，就没有考虑。关于音频流在软硬件之间的流转过程，可以参考下面 [matlab audiotoolbox](https://in.mathworks.com/help/audio/index.html?s_tid=CRUX_lftnav) 的官方文档，里面图文结合有很清晰的解释。

[Audio I/O: Buffering, Latency, and Throughput](https://in.mathworks.com/help/audio/gs/audio-io-buffering-latency-and-throughput.html)


**Adapter EIM**

Python 中分析的结果是以列表的形式通过 [CodeLab Adapter EIM](https://adapter.codelab.club/get_start/gs_install/) 插件快速发送给 Scratch 的，所以运行 Python 和 Scratch 代码前，要先启动 Adapter。

EIM 这一功能的实现可以参看[这里](https://discuss.codelab.club/t/topic/189)。


**Scratch Addons**

Scratch 社区的用户基于自己的使用经验与需求，开发了增强 Scratch 的浏览器插件 [Scratch Addons](https://scratchaddons.com/) 以及兼容 Scratch 且融合 Addons 的 [turbowarp](https://turbowarp.org/)，如视频所示，CodeLab 已将部分插件暂时接入他们作为 beta 版在内部使用起来。相比原 Scratch，显著提升本项目的功能主要有三个：fps=60（frames per second，又见 frame，不过这里指的是图像）、高清画笔、还有自定义舞台大小（可以轻松设置 1920 X 1080）。

## **声音与色彩感知**

### **响度与分贝**

物理世界中音源的振动只有引发空气的振动并传至外耳道引起鼓膜振动，才会被我们感知即听到。所以整个过程的前半段属于物理范畴，关于振动与波；后半段则属于生理心理范畴，关于我们对振动的感知，声音的响度就是一个心理概念，大致对应物理概念振幅。因为人耳能感知的音强范围非常大，通常会按对数关系转化为分贝值，如 20 dB；此外，人耳对声音响度的感知也非线性变化的，我们对低频声音的变化更为敏感，因此也更符合对数关系，例如，20 分贝声音的强度实际是 10 分贝声音的 10 倍（10 的 1 次方），虽然我们人耳听起来是 2 倍的关系，而 30 分贝的声音则是 10 分贝声音强度的 100 倍（ 10 的 2 次方），听起来则是 4 倍，依次类推。因此，在音频数据处理过程中，通常都会把反应振幅大小的原始数值做对数转化。

更多可参考以下文章：

[The Decibel Scale](https://www.noisehelp.com/decibel-scale.html)

[Sound Intensity and Sound Level](https://courses.lumenlearning.com/physics/chapter/17-3-sound-intensity-and-sound-level/)

[Decibels (dB) and Amplitude](https://blog.demofox.org/2015/04/14/decibels-db-and-amplitude/)


### **知觉统一的（perceptually uniform） colormap**

当数据依赖色彩说话时（如数据科学中的结果图表），色彩的选择和使用就是一个很重要的问题，因为会直接影响图表观看者对数据结构与数值大小的理解和判断。类似于声音，我们对色彩的心理感知与其物理属性之间并非严格对应，例如，黄色块与蓝色块，即使他们实际的明度值（lightness）完全一样，但在我们“看来”，黄色块就会比蓝色块“更亮”。即使是同一色调（hue），如不同深浅的蓝色，我们感知到的明度变化同样也与实际明度值的差异不符。所以知觉统一就是指在确定表征数据的颜色时，要把这些因素考虑在内，制作实际看起来等距变化的 colormap，特别是当色彩表征的数据是等距变化时。如果大家去阅读相关材料，就会发现多数论述的靶子都是过去曾经普遍使用的彩虹（rainbow）colormap，即更多依赖色彩的色调（hue）去表征差异，但是有关人类视知觉的研究表明，明度（lightness）差异更能反映图像的高空间频率（high spatial frequency）成分，饱和度（saturation）差异更能反映图像的低空间频率（low spatial frequency）成分。也就是说，在色彩的色调、明度和饱和度这三个维度中，视知觉对色调的依赖恰恰是更少的。还有，考虑到存在色彩知觉和辨别缺陷的人群，选择对他们更为友好的 colormap 也很重要。以上这些色彩感知相关的研究成果与考量已体现在如今主流绘图工具（如 [matplotlib](https://github.com/BIDS/colormap)）对 colormap 的选择中，大家在使用时可以留意。

视频中展示的项目，其实就是在 Scratch 中实时绘制频谱（spectrogram），所以同样使用了知觉统一的 colormap，来自 [cmocean 的 thermal](https://matplotlib.org/cmocean/#thermal)，圆点的色彩表征每个频段在某个时间点上振动的强度（数值做了对数转化）。colormap 中共有 256 种色彩，如上所述视觉上对他们的知觉是等距变化的，从深蓝到明黄，对应数值的等距增大。

关于色彩与 colormap 更多可见：

[Why Should Engineers and Scientists Be Worried About Color?](http://mkweb.bcgsc.ca/brewer/talks/engineers.scientists.color.worry.pdf)

[Subtleties of Color](https://earthobservatory.nasa.gov/blogs/elegantfigures/2013/08/05/subtleties-of-color-part-1-of-6/)

[colormap](https://github.com/BIDS/colormap)

[How To Avoid Equidistant HSV Colors ](https://www.vis4.net/blog/2011/12/avoid-equidistant-hsv-colors/)

[ColorBrewer](https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3)



## **补充参考**

[can someone explaing the computation for double sided and single sided spectrum in fft() example](https://www.mathworks.com/matlabcentral/answers/356376-can-someone-explaing-the-computation-for-double-sided-and-single-sided-spectrum-in-fft-example)

关于 FFT 分析处理流程

[FFT: scaling for correct amplitude](https://ch.mathworks.com/matlabcentral/answers/545066-fft-scaling-for-correct-amplitude)

关于 FFT 分析处理流程