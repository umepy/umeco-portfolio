---
title: "WindowsのDockerでgpusオプションを付けると反応しなくなる"
date: "2023-05-08T21:46:00+09:00"
tags: ["備忘録"]
header_image: ""
---

# WindowsのDockerでgpusオプションを付けると反応しなくなる

## 何が起こった？

```bash
docker run --gpus all　
```

でコマンドをいつも通り打ったところ、反応が全くない状況が発生しました。ctrl+Cも聞かないのでターミナルを落とすしか出来ない。  
`docker log`を使ってログを見ようと思っても、コマンドを打つと何も反応が返ってこなくなってしまう。

## 解決方法

[StackoverFlowに解決方法がありました](https://stackoverflow.com/questions/75809278/running-docker-desktop-containers-with-gpus-tag-hangs-without-any-response-in)

単にバージョンアップをすればいいとのこと。Docker Desktopのcheck updateを押すとアップデートのお知らせが出るのでアップデートします。  
私の環境ではDocker desktopはv4.17でした。アップデートでv4.19になり、再度試したところ正常に動作しました。どうやらv4.17でのバグだったようです。

フィードバックのないバグが一番困りますね。。
