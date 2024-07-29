---
title: "WSLのVSCodeでGitを使うと全てのファイルがmodifiedになる"
date: "2023-04-20T09:00:00+09:00"
tags: ["備忘録"]
header_image: ""
---
# WSLのVSCodeでGitを使うと全てのファイルがmodifiedになる

## 概要

WSLでGitを使おうとすると何故かすべてのファイルがmodifiedになってしまい、全く使い物にならなかった。

## 解決方法

### GitのCRLFの設定かファイルパーミッションの設定を変更する

Githubの[WSLのissue](https://github.com/microsoft/WSL/issues/184#issuecomment-287853688)に解決方法が上がっていました。

```bash
git config --global core.autocrlf true
git config --global core.filemode false
```

自分はWSLのGitで上記コマンドをせっていしたらすぐに解決しました。  
どうやらWindows/Linux間での改行コードの違いでGitがうまく動作していなかったようです。
