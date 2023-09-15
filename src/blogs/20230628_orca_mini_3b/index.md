---
title: "Orca mini 3Bに指示を出して最新小規模LLMの実力を調べる"
date: "2023-06-27T21:00:00+09:00"
tags: ["備忘録", "AI"]
header_image: "/blog_header/orca.jpg"
---

# Orca mini 3Bに指示を出して最新小規模LLMの実力を調べる

## Orcaとは？

Microsoftが6月に発表した論文[Orca: Progressive Learning from Complex Explanation Traces of GPT-4](https://arxiv.org/pdf/2306.02707.pdf)で提案されたモデル。  
Orcaの公式モデルは公開されておらず、Orca miniはその論文を参考にOpen Llamaをベースに作成されたモデルです。種類としては以下の３種が提供されています。  

- [orca_mini_13b](https://huggingface.co/psmathur/orca_mini_13b)
- [orca_mini_7b](https://huggingface.co/psmathur/orca_mini_7b)
- [orca_mini_3b](https://huggingface.co/psmathur/orca_mini_3b)

今回はこのうち一番小さい**orca_mini_3b**を使って性能を検証していきます。  
ちなみに論文中ではGPT-4にはかなわないのですが、ChatGPTにかなり近い性能を出していると報告しています。  

## リポジトリについて

自分用に作っているものですが、再現できるようにpoetryで書いているので環境構築が簡単に出来ると思います。  
簡単なテスト等に使っていただけると嬉しいです。(機能追加等のPRも募集中です！)  
[japanese-llm-experiments](https://github.com/umepy/japanese-llm-experiments)  

## 入力プロンプトについて

orca_miniでは入力のプロンプトのおすすめ？の型が提供されています。

```text
### System:\n{system}\n\n### User:\n{instruction}\n\n### Input:\n{input}\n\n### Response:\n
```

system, instruction, inputの3つのテキストを入力することができます。それぞれ

- system: AI(システム)が何なのかを記入します。例えば"あなたは以下の指示に従うAIアシスタントです"
- instruction: 指示の内容を記入します。例えば"明日の東京の天気は何ですか？"
- input: AIに提供したい情報を記入します。例えば"明日の天気予報です。北海道～、青森～、・・・、東京は晴れ、千葉～"

この場合には、東京は晴れ、という回答が期待できます。

## 出力結果

まずは公式でexampleで出ていた入力から。OpenAIのCEOにGPT-4をOSS化しろってメールを書いてって内容です。ぱっと見かなりうまく生成出来ている気がしますね。

```text
### System:
You are an AI assistant that follows instruction extremely well. Help as much as you can.

### User:
Write a letter to Sam Altman, CEO of OpenAI, requesting him to convert GPT4 a private model by OpenAI to an open source project

### Response:
 Dear Mr. Altman,

I hope this letter finds you well. I am writing to request that you convert the GPT4 model, which is currently a private model offered by OpenAI, to an open source project.

As an AI researcher and developer, I believe that open source models are essential for advancing the field and enabling greater innovation. By making the GPT4 model available as an open source project, we can encourage more individuals and organizations to work on it, improve its performance, and expand its applications.

In addition to advancing the field of AI, making the GPT4 model available as open source will also benefit OpenAI by increasing its reputation and allowing it to rely less on revenue generated from selling GPT4 as a private service.

I urge you to consider this request and take the necessary steps to make the GPT4 model available as an open source project. We are all working towards a common goal of advancing AI research and development, and making this a publicly available project will ensure that we are all working towards the same goals.

Thank you for your attention to this matter, and I look forward to hearing from you soon.

Sincerely,

[Your Name]</s>
```

次にAIにyoutubeライブをさせてる中で勝手に話題を提供するように出来ないか試してみます。

```text
### System:
You are an AI assistant that follows instruction extremely well. Help as much as you can.

### User:
You broadcast on youtube. Provide interesting trivias to viewer. Occasionally pose questions to viewer

### Response:
 Sure, I can do that! Here are some trivias and questions that I can share with you:

Trivias:
- Did you know that the famous Hollywood sign in Los Angeles was originally put up for just 18 months during the 1920s and was meant to be temporary?
- Or that the first-ever concert held in space was held in 2001 by the band Apollo 13?
- Or that the world's smallest village is actually a real place in New Zealand, where only 100 people live in only 1 square mile?
- Or that the world's largest snowflake on record was over 15 inches wide and 8 inches thick?

Questions:
- What is the highest number that can be formed by using the numbers 1 to 10?
- What is the first known use of the word "question" in literature?
- What is the most popular drink in the world?
- What was the first-ever live telecast of a sports event to take place in the United States?
- How many legs does a octopus have and what are they used for?</s>
```

世界最大の雪の結晶が38センチ(15インチ)って本当ですかね？調べたら本当でした。気になる話題が提供されています。  
ここからユーザーの質問に対して答えていってやり取りが出来れば十分使えるといえるでしょう。  

最後に要約もさせてみようと思います。適当に見つけた[小銭プッシャーフレンズ２の記事](https://www.gamespark.jp/article/2023/06/27/131580.html)をDeepLで翻訳して突っ込んでみます。DeepLが1500文字までしかできないので途中までしか入力できませんでした。

```text
### System:
You are an AI assistant that follows instruction extremely well. Help as much as you can.

### User:
Summarise the input in 5 sentences or less.

### Input:
This programme interviews developers of new indie games of interest. This time, we present a mini interview with the developer of the online co-operative coin pusher "Old Coin Pusher Friends 2", developed by STP WORKS and released for PC on 19 May.
This game is a sequel to the online co-operative coin-operative game "Old Coin Pusher Friends" set in the Edo period. In this game, players work together with other players to win prizes by dropping coins in stages, and there are also a number of mini-games available, such as exterminating ghosts and playing ball tossing. The game was developed by a Japanese developer, so it is of course available in Japanese.
The game is available for 410 yen.
-Please introduce yourself first. What is your favourite game to play?
My name is Uncle Dan from STP WORKS Ltd. Just two years ago, I started a game company with a friend, and we both develop and sell games. My friend does the development, while I do the marketing and company management related stuff. My friend is the head of the company.
We develop games with the themes of 'under one coin', 'multiplayer' and 'easy to play'.
My friend's favourite game used to be "Chrono Trigger", but recently he likes "NieR: Automata" and "The Legend of Zelda: Tears of the Kingdom", while I used to like "Romancing SaGa 3" the most, but recently I have been playing the "Ambition of Nobunaga" series and " I like simulation games such as FrostPunk.
-What are the features of this game? And how did you come up with the idea?
This title is a sequel to our previous title, Kosen Pusher Friends, and is a medal game that can be played in a relaxed atmosphere with a Japanese-style worldview and music, with up to four players playing multiplayer.
It features various events that can be played alone or together, and a jackpot that will flood your brain juice.
When we made our previous game, 'Old Coin Pusher Friends', a friend of ours contacted us to say he had made a demo of a multiplayer medal game, so we played it together and chatted until the morning, losing track of time, so we thought, 'This is it! I thought, "This is it! We developed this game with the themes of 'improving the medal game experience' and 'solving the issues of the previous game'.
I'm presenting the changes in this live broadcast, so please watch it if you like.
--What were your influences in the development of this title?
If I had to say, I would say arcade medal games in general. I think it's a great game that people of all genders and ages enjoy playing together in the same cabinet.
-What was one of the most memorable episodes during the development of this work?
Dan: We used free BGM for the game, but until the very last minute we were both talking about the BGM for the jackpot that we were going to use and choosing the BGM that would get our brain juices flowing.
-What kind of feedback have you received from users since the release of the game? What were some of the most memorable ones?
Thanks to Uncle Dan, a lot of people played our previous game, "Old Money Pusher Friends", but we didn't think it would be as big a hit as the previous one. However, we are upset that it has been an even bigger hit than the last one.

### Response:
 The interviewee, who is the developer of the online co-operative coin pusher "Old Coin Pusher Friends 2", has a background in game development and likes to develop games with themes of 'under one coin', 'multiplayer' and 'easy to play'. He is a fan of simulation games and likes to play games with his friend. The game is a sequel to the online co-operative coin-operated game "Old Coin Pusher Friends" and features a Japanese-style worldview and music, with up to four players playing multiplayer. The game has a jackpot that will flood your brain juice. The developer says that the game was influenced by arcade medal games and that one of the most memorable episodes during the development of the game was when they were choosing the BGM for the jackpot. Users have given the game positive feedback, and the developer is happy that it has been even bigger than the last one.</s>
```

レスポンスをDeepLで翻訳すると以下のような感じ。英語だとちゃんと5行以内に収まってはいるし、内容もうまく要約されているように感じます。

>オンライン協力型コインプッシャー「オールドコインプッシャー フレンズ2」の開発者であるインタビュー対象者は、ゲーム開発の経験があり、「ワンコイン以下」「多人数」「手軽に遊べる」をテーマにしたゲームを好んで開発する。
>シミュレーションゲームが好きで、友人とゲームをするのが好きだという。オンライン協力型コインゲーム「オールドコインプッシャー フレンズ」の続編で、和風の世界観と音楽が特徴で、最大4人までのマルチプレイが可能。
>脳汁が溢れ出すジャックポットを搭載している。
>開発者によると、アーケードのメダルゲームに影響を受けており、開発中に印象に残っているエピソードは、ジャックポットのBGMを決めるときだったという。ユーザーからも好評で、開発者も「前作よりもさらに大きくなった」と喜んでいる。


## まとめ

今回はOrca miniの最小モデルである3Bを使用してその性能を試してみた。LLMとしてはかなり小さい分類になるが性能はかなり高いように感じられました。
今後はGPT-4のような巨大なモデルをいかに蒸留させて小さなモデルに落とし込んでいくかという点に研究のトレンドが移り変わっていくような気がしますね。
