---
title: "pyenv updateしたら/usr/bin/env: ‘bash\r’: No such file or directoryになる"
date: "2023-06-12T16:00:00+09:00"
tags: ["備忘録"]
header_image: ""
---

# pyenv updateしたら/usr/bin/env: ‘bash\r’: No such file or directoryになる

## 環境情報

WSL2 Ubuntu 20.04

## 何が起こった？

pyenvのアップデートをしたくなった。コマンド一発でアップデートが出来るという[pyenv-update](https://github.com/pyenv/pyenv-update)は導入していたので

```bash
pyenv update
```

を実行したところ、`/usr/bin/env: ‘bash\r’: No such file or directory`というエラーが出てしまった。

`pyenv`を実行したところ同様のエラーが出てしまい、pyenv関連は完全に壊れてしまった。  
引っ掛かりポイントとしては`/usr/bin/env`が表示されるのでこのファイルが壊れてしまったと勘違いしやすいが、壊れたファイルは`pyenv`のフォルダだった。

## 解決方法

まずpyenvが壊れてしまった原因だが、どうやらpyenv-updateでgit cloneした際にエラー表示に出ているように改行コードがCRLFになってしまったみたい。  
これはgitの設定で改行コードが自動的に変換される設定が悪さをしていたみたいだったので、以下のコマンドでその設定をoffにする。

```bash
git config --global core.autocrlf false
```

次にpyenvをクリーンインストールする。pyenvフォルダを削除した後、git cloneする

```bash
rm -rf ~/.pyenv
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
```

これでクリーンインストール完了。`pyenv`コマンドも通常通り動作した。
