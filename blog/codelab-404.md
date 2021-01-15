---
title: "CodeLab无法访问的解决方案"
date: 2020-12-28
tags: ["CodeLab"]
Slug: codelab-404
---


大家好，根据 **相关法律法规** 要求，CodeLab需要更新备案信息，我们目前正在提交新的备案，需要大约为期2周的审核时间.

在此期间，与CodeLab域名(codelab.club)有关的项目都会受到影响。大家只能暂时通过IP访问。

以下是备用方案:

*  CodeLab 主页:  
    *  https://codelabclub.github.io/
    *  国内: http://118.31.62.99:10000
*  CodeLab 社区:  http://39.108.54.56:8000
*  CodeLab 论坛（还在调整中）:  http://39.108.54.56:9000
*  CodeLab Scratch-beta: 
    *  https://codelabclub.github.io/scratch-beta (需要与`Adapter>=4.2.0`)
    *  国内: https://118.31.62.99:9000 （需要`Adapter>=4.0.0`）
    *  如果无法连接Adapter，请使用离线版本
*  CodeLab Adapter 文档:
    *  https://codelabclub.github.io/codelab-adapter-docs/
    *  国内: http://118.31.62.99:7000

codelab-adapter由于解析到`127.0.0.1`, 目前不受影响。如果遇到问题，请访问 `https://127.0.0.1:12358` 。或者添加host: `127.0.0.1 codelab-adapter.codelab.club`