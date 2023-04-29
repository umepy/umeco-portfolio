---
title: "umeco's portfolioをアップデートしました"
date: "20230418"
tags: ["プログラミング"]
---

# umeco's portfolioをアップデートしました

## アップデートの背景

以前の自分のポートフォリオサイトは[BootStrap Studio](https://bootstrapstudio.io)というGUIツールを使ってまして、
基本的にはそれで特に不便もなく運用/改善できていました。

ただ、個人的にフロントエンドの技術もある程度のレベルで持っていたいという考えから、ポートフォリオサイトを題材に勉強しようと一念発起しました。
以前の経験からReact/Typescriptはある程度触れていたのでその方針で進めようと思っていましたが、社内での雑談で最近はNextjsとTailwindCSSがおすすめという情報を聞き、
Nextjs + TailwindCSSを使って開発しました。デプロイはNextjsと相性の良いVercelを使っています。

## Nextjsの良かった点

まず一番いいな、と思ったところが1ページ1エンドポイントとして扱う規則です。Reactを使っていた時はルーティングなどを頑張って設定していたのですが、
Nextjsだとそこはファイルの作成で出来てしまうのでとても楽ちんです。後はNext/Image等を使うと最適化をしてくれるところもとてもありがたいです。

そしてびっくりしたのがVercelの使いやすさです。今まではReactを書く、Githubにpush、Github Actionsでビルド&デプロイ、Firebaseでホスティング、という流れでした。
Vercelだと、Nextjsを書く、Githubにpush、Github ActionsでCI、Vercelが検知してビルド&デプロイ&ホスティングです。あまり変わらないように感じるかもしれませんが、
GithubとVercelを連携してしまえば、push検知->ビルド->デプロイを全部Vercelがやってくれるんです。Firebaseだと、デプロイ用の認証ファイル置いて、Github Actionsで読み込み
をするワークロードを定義しないといけなかったので必要な労力がかなり減っています。しかも無料。