---
translationKey: "06-first-habr-article"
locale: en
title: "My first Habr article is out"
date: 2026-08-10
excerpt: "My first article on Habr: how I went through several rounds of Sandbox moderation and eventually published a piece on speeding up inference for an encoder-based guard model."
tags: [habr, ml engineering, inference, llm infrastructure, ai research]
---

My first article has been published on Habr.

For me, this is not just a publication. It is an important step: moving from learning and practice into an open professional conversation.

Shortly before that, at the AIRI summer school, I heard a simple phrase from an experienced AI researcher: "If you want to understand a topic more deeply, write an article about it." A colleague later shared a similar thought: writing helps you truly understand the results of your own work, rethink your experiments, honestly examine mistakes, and formulate your conclusions more precisely.

That is exactly what happened for me.

This text did not come together on the first try. I revised the material several times, went through Habr Sandbox moderation, asked more experienced colleagues for feedback and review, and eventually brought the article to publication. For me, it became a valuable lesson in patience, clarity of thought, and the quality of engineering communication.

In the article, I explore how to speed up inference for an encoder-based guard model and compare several approaches: TensorRT, Triton, vLLM, Ray Serve, and a separate track with Flash DeBERTa.

What mattered to me was not simply putting together a set of tools, but honestly showing the mistakes, constraints, results, and conclusions: what actually works, where the bottlenecks appear, and how I would approach this work now.

What also matters to me personally is that this publication became a way to better articulate my own engineering perspective.

I will be glad if the article is useful to people working on ML inference, LLM infrastructure, and production systems.

The article is written in Russian, but I hope it can still resonate with a wider audience, because the questions at its core are universal: how we evaluate tools, think through trade-offs, measure performance, and make engineering decisions within real-world constraints.

Link to the article:

https://habr.com/ru/articles/1067008/
