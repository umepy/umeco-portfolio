---
title: "fnmがgit bash上で正常に動作しない"
date: "20230101"
tags: ["タグ1"]
---
# fnmがgit bash上で正常に動作しない

## 現象

fnmをWindowsのGit Bash上で使おうとすると、fnmのパスは通るがnodeでcommand not foundとなってしまう。

bashでfnmを使うのに必要なコマンドを`.bashrc`に記載しても解決しない。
```bash
eval "$(fnm env --use-on-cd)"
```

## 原因

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
を掲載しているものもあるが、これをすると筆者環境では`docker`コマンドが使えなくなってしまったりと、$PATHに含まれる他のアプリケーションに影響が出てしまった。詳細な理由は分からないが、原因は`cygpath -u $PATH`で全てのパスを変換していることだと思われる。

そのため、今回記載した方法であればfnm_multishellのパスのみ変換しているので他のものへの影響がないことが利点である。