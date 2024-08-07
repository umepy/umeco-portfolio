---
title: "fnmがWindowsのgit bash上でcommand not foundとなる解決法"
date: "2023-04-21T09:00:00+09:00"
tags: ["備忘録"]
header_image: ""
---
# fnmがWindowsのgit bash上でcommand not foundとなる解決法

## 問題の発生

fnmをWindowsのGit Bash上で使おうとすると、fnmのパスは通るがnodeでcommand not foundとなってしまう。  
bashでfnmを使うのに必要なコマンドを`.bashrc`に記載しても解決しない。

```bash
eval "$(fnm env --use-on-cd)"
```

## 原因は何か

`fnm env`で出力される**fnm_multishell**のパスが`/c/...`のようなLinux形式ではなく、`C://...`といったWindows形式なのが問題。  
なのでcygpathでfnm_multishellをLinux形式に変換して挙げればOK。以下の内容を`.bashrc`に記載する。

```bash
eval "$(fnm env --use-on-cd)"
export PATH=$(cygpath $FNM_MULTISHELL_PATH):$PATH
```

## 余談

解決方法としてネット上には

```bash
export PATH=`cygpath -u $PATH`
```

を掲載しているものもあるが、これをすると私の環境では`docker`コマンドが使えなくなってしまったりと、PATHに含まれる他のアプリケーションに影響が出てしまった。詳細な理由は分からないが、原因は`cygpath -u $PATH`でfnm以外の全てのパスを変換していることだと思われる。  
そのため、今回記載した方法であればfnm_multishellのパスのみ変換しているので他のものへの影響がないことが利点である。
