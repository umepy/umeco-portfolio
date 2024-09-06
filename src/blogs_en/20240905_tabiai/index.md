---
title: "Can Current AI Create Enjoyable Travel Plans?"
date: "2024-09-05T22:00:00+09:00"
tags: ["アプリ"]
header_image: "/blog_header/beach_girl.png"
---

# Can Current AI Create Enjoyable Travel Plans?

## Conclusion: Yes, It Can

Sorry for getting to the point so quickly in a blog post! While I've already given the conclusion, today I'd like to share my thoughts on the question, "Can current AI create travel plans at a level enjoyable by people?" based on my experience developing an app called Tabiai.

By the way, I'm participating in the Gemini Developer Competition, so I’d appreciate your votes!!

[Tabiai Voting Page](https://ai.google.dev/competition/projects/tabiai)

## How do you plan your trips?

Traveling is one of the most popular hobbies for many people. Whether it's a heavy trip overseas for a few months or a light day trip to a hot spring, the contents vary widely. Even visiting a popular café a short train ride away or going to the local park could be considered travel. In this sense, travel is an enjoyable hobby that most people can partake in.

To enjoy travel, planning a trip is essential. Generally, people can be categorized into the following types:

| Type |  Advantages | Disadvantages |
| --- | --- | --- |
| 1.  Research and plan thoroughly by yourself | Can plan according to your preferences | Researching is bothersome |
| 2. Ask friends (e.g., on Instagram) for recommended places | Can go to recommended places | Limited by how much you can ask, and it can be bothersome to ask every time |
| 3. Join a travel agency tour or consult an advisor | Can go on classic tours | Limited in the places you can visit |
| 4. Go without planning |  Relaxed as there are no fixed plans |  Nothing is decided on what to do |

Type 4 is quite a rare category, but types 1-3 end up with a travel plan in hand. Seeing the benefits and drawbacks, it's clear there's a trade-off between **(effort and time) <==> (quality and flexibility of the travel plan)** .

## Challenges in Planning a Trip

When planning a trip, there are several challenges to consider:

1. Not knowing where to go and being unaware of good spots.
2. Difficulty in creating a good plan within budget and time constraints.
3. The hassle of planning a trip in the first place.

I believe the most crucial point is number 1. Without knowledge of destinations or spots, it's challenging to create a good travel plan. Hence, many people nowadays refer to Instagram or YouTube for popular spots and use those references to plan their trips. Before the widespread use of the internet, buying travel guidebooks or listening to travel agency salespeople were the common methods.

## Can AI Solve This?

It's now 2024, the era of generative AI. AI can learn human knowledge and perform various tasks on behalf of humans. Therefore, it's natural to think that creating an AI akin to a trip advisor can solve the challenges in planning a trip.

As an experiment, I tried to create a travel plan using ChatGPT, which yielded the following result:

![chatgpt_result](/blogs/20240905_tabiai/chatgpt_result_en.png)

How is it? Honestly, I'd rate it around 30 points out of 100. Although it suggests some seemingly relevant regions, it lacks details like where to go in Karuizawa, how long to stay, and what transport to use.

Of course, ChatGPT is a generic model, so this result is pretty good for what it is. This piqued my interest in seeing how well an AI specialized in creating travel plans could perform.

## Travel Plans, Made by AI

Driven by this interest, I developed an app called Tabiai during the recent Gemini Developer Competition. Using the same information I input into ChatGPT, here are the results provided by Tabiai:

<div style="display: flex; justify-content:space-around;">
  <img src="/blogs/20240905_tabiai/tabiai_example1_en.png" alt="Image 1" style="width: 200px; margin-right: 10px;">
  <img src="/blogs/20240905_tabiai/tabiai_example2_en.png" alt="Image 2" style="width: 200px; margin-right: 10px;">
  <img src="/blogs/20240905_tabiai/tabiai_example3_en.png" alt="Image 2" style="width: 200px; margin-right: 10px;">
</div>

The AI suggested visiting a waterfall in Karuizawa, including information on stay duration and transportation. It responded to the vague request to "feel coolness" by suggesting that a waterfall visit would satisfy that need, which I found impressive.

Given that it can provide such detailed information, it's safe to say that AI can indeed create travel plans. Of course, this app still has room for improvement (it was hastily put together in about a month).

## The Future of Tabiai

My current goal is to create ultra-high-precision AI-generated travel plans! By utilizing information such as:

The traveler's preferences and interests
The traveler's constraints (budget, time, transportation, etc.)
Knowledge of the destination and spots
Information on actual transportation and accommodations
I believe we can create more personalized travel plans. Eventually, if the AI can support not only planning but also assist during trips and provide feedback afterward, it could revolutionize the travel industry! I'm currently developing Tabiai alone, so if you're interested, please feel free to reach out.
