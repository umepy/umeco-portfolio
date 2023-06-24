---
title: "MPT-30Bの4bit量子版をローカルRTX4090で動作させる"
date: "2023-06-23T21:00:00+09:00"
tags: ["備忘録"]
header_image: "/blog/mpt30b.jpg"
---

# MPT-30Bの4bit量子版をローカルRTX4090で動作させる

## 環境情報

WSL2 Ubuntu 20.04  
GPU:RTX 4090 24GB  
CUDA: 11.8  

## MPT-30B

mosaicMLが6/22に発表した約300億パラメータのLLMです。ベースモデル、Instructionモデル、Chatモデルの３種類が提供されています。

- [mpt-30b](https://huggingface.co/mosaicml/mpt-30b): ベースモデル。入力後に続くと推測される文章を生成する。
- [mpt-30b-instruct](https://huggingface.co/mosaicml/mpt-30b-instruct): Instructionモデル。入力の指示に従ってタスクを実行する文章を生成する。
- [mpt-30b-chat](https://huggingface.co/mosaicml/mpt-30b-chat): Chatモデル。ChatGPTのように会話形式で返答を生成する。

## リポジトリについて

自分用に作っているものですが、再現できるようにpoetryで書いているので環境構築が簡単に出来ると思います。  
簡単なテスト等に使っていただけると嬉しいです。(機能追加等のPRも募集中です！)  
[japanese-llm-experiments](https://github.com/umepy/japanese-llm-experiments)  

## ソースコード

MPT-30Bのbaseモデルを動作させます。

```Python
import torch
from transformers import AutoConfig, AutoModelForCausalLM, AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("mosaicml/mpt-30b")
model = AutoModelForCausalLM.from_pretrained(
            "mosaicml/mpt-30b",
            trust_remote_code=True,
            load_in_4bit=True,
            device_map="auto",
        )

prompt = "Q:Vtuberってなんですか？\nA:"

token_ids = tokenizer.encode(prompt, add_special_tokens=False, return_tensors="pt")
with torch.no_grad():
    output_ids = model.generate(
        token_ids.to(model.device),
        max_new_tokens=256,
        do_sample=True,
        temperature=0.7,
    )

    output = self.tokenizer.decode(output_ids.tolist()[0])

print(output)
```

## 出力結果

まずは英語入力の結果から。入力は「Q: Whats Vtuber?\nA: 」というQA方式にしました。  

```text
Q:What's Vtuber? 
A: A Vtuber is a virtual YouTuber. They use a virtual character to create videos (usually on YouTube) and interact with their fans. These characters are often designed to look like the YouTuber themselves, but can also be completely different.

Q:What is Nijisanji?
A: Nijisanji (ニジサンジ) is a Vtuber management company based in Japan that was founded in April 2016. It is the largest Vtuber management company in the world and has over 300 Vtubers under its management.

Q:What is the difference between VTuber and Vtuber?
A: There is no difference between VTuber and Vtuber. They are both terms used to refer to virtual YouTubers.
```

次に日本語入力の結果。入力は「Q: Vtuberって何?\nA: 」です。  

```text
Q:Vtuberってなんですか? 
A:Vtuberとは、YouTuberとして活動する主に女性が多い視聴者を集めるYouTuberのことです。
このカテゴリには、YouTuberとして主に女性が多い視聴者を集めているYouTuberを含むことに注意してください。

Q:Vtuberがあるのはなぜですか?
A:YouTuberをしたいという人が多いのですが、実際に目に見えたところのYouTuberは多くないため、Vtuberを通してYouTuberを始めることができます。

Q:Vtuberは、どうして初めてYouTubeに参加しましたか?
A:Vtuberは、多くの場合、YouTuberを始めたいと思っていたとき以前からVtuberを見ていたため、最初からYouTubeに参加したいと思っていました。
```

日本語もいけるみたいですが、あまり出力結果は良くない感じでした。  
まだ簡単なテストしかしてないので、今後の活用方法に期待ですね。

## 実行時のエラー

環境構築した時に下記のようなエラーが出る可能性があります。このときはbitsandbytesの**_cpu.so**ファイルを**_cuda118.so**で上書きすればOKです。(別のCUDAバージョンの場合はそれに対応するsoファイルをコピーしてください)  

`AttributeError: japanese-llm-experiments/.venv/lib/python3.10/site-packages/bitsandbytes/libbitsandbytes_cpu.so: undefined symbol: cget_col_row_stats`

コマンド例  

```bash
cd japanese-llm-experiments/.venv/lib/python3.10/site-packages/bitsandbytes
cp libbitsandbytes_cuda118.so libbitsandbytes_cpu.so
```
