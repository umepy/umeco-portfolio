# WSLのVSCodeでGitがうまく動作しない

## 概要

WSLでGitを使おうとすると何故かすべてのファイルがmodifiedになってしまい、全く使い物にならなかった。

## 結論

### GitのCRLFの設定かファイルパーミッションの設定を変更する

Githubの[WSLのissue](https://github.com/microsoft/WSL/issues/184#issuecomment-287853688)に解決方法が上がっていました。

```bash
git config --global core.autocrlf true
git config --global core.filemode false
```

自分はWSLのGitで上記コマンドをせっていしたらすぐに解決しました。
どうやらWindows/Linux間での改行コードの違いでGitがうまく動作していなかったようです。