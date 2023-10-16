---
title: "WSL2でNo disk space left on deviceが出た時の対処法"
date: "2023-10-16T22:00:00+09:00"
tags: ["備忘録"]
header_image: "/blog_header/girl_study.png"
---

# WSL2 で No disk space left on device が出た時の対処法

## 問題

WSL2 で python スクリプトを動作させていたところ、突然以下のエラーが出てしまった。

```bash
No space left on device
```

ひとまず`df -h`でディスクの使用量を確認すると、以下のようになっていた。(値は例です)

```bash
Filesystem      Size  Used Avail Use% Mounted on
/dev/sdb        250G  250G     0 100% /
...
```

Windows の容量は十分余裕があったが、WSL2 のディスク容量は Winsows のものとは切り離されており、250GB しかありませんでした。
この容量は増加させることもできるのですが、何が原因か気になったのでそれを調査しました。

## 原因

コマンドで容量を調べていってもいいのですが、GUI の方が分かりやすいと思ったのでエクスプローラーで確認していきます。

まず、エクスプローラーのアドレスバーに以下のように入力します。Ubuntu の部分は各自の Distro 名に置き換えてください。

```bash
\\wsl.localhost\Ubuntu
```

その後、適当な範囲でフォルダを右クリしてファイル容量を調べます。適当に２分探索しました。
すると、どうやら`.cache`フォルダが原因のようでした。その中の`huggingface`フォルダが大半の容量を占めていることが分かりました。

ここまでついてやっと原因が分かりました。huggingface で様々なモデルをダウンロードしていたのですが、そのモデルの容量が大きすぎてディスク容量を圧迫していたようです。（例えば MPT-30 は 50GB ぐらいある）

無事このモデルを削除したところ、ディスク容量が解放されました。
