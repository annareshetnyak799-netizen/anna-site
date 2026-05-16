---
translationKey: "04-long-context-is-not-memory"
locale: en
title: "Long context is not memory"
date: 2026-05-15
excerpt: "Why giving an AI agent more context is not the same thing as giving it memory - and why psychology has been dealing with this distinction for a long time."
tags: [ai research, agents, memory, psychology, evals]
---

There is a very tempting idea in AI right now: if a system can see more of the past, then the memory problem is almost solved.

A bigger context window. More history. More tokens. Then everything is fine.

But long context is not memory.

Memory is not just access to previous information. Memory is the ability to preserve what matters, discard what does not, retrieve the right thing at the right moment, and use past experience in a way that actually changes what happens next.

That distinction matters more and more as we move from chat-style systems to agents.

An agent can be given a long log of everything that happened before. But that still does not mean it understood what mattered in it. It does not mean it separated signal from noise. It does not mean that three steps later it will bring back the exact detail the new task actually needs.

And it definitely does not mean it learned anything.

Psychology has been living inside this problem for a long time.

Human memory is not a storage room. It is not a perfect archive where the right file quietly sits until we come back for it. Memory is active. Memory is selective. Memory is reconstructive. We encode, distort, forget, confuse, overwrite, retrieve, and assemble things again.

That is why memory research in psychology has always been about more than retaining information. It has been about interference, salience, false confidence, and the difference between what is there in principle and what can actually be used at the right moment.

With AI agents, something very similar is happening today.

What many systems call memory is still often closer to extended context: a larger pile of previous interactions, maybe lightly summarized, maybe stored in a vector database, maybe retrieved when needed. Useful, yes. But still not the same thing as memory in the stronger sense.

Because the hard part is not just keeping the past around.

The hard part is deciding what survives.  
The hard part is deciding what gets retrieved.  
The hard part is deciding what changes the next action.

That is why this is not only an engineering question. It is an evaluation question.

If we only look at the final answer, we miss too much. An agent may look competent while relying on brittle workarounds, irrelevant memories, or accidental pattern matching. It may work once and then fall apart as soon as the environment becomes longer, noisier, or more interconnected across steps.

To evaluate agents well, we need to ask not only whether the result was correct, but what the system remembered, what it ignored, what it carried forward, and whether that internal selection was meaningful.

That is where the problem becomes interesting to me.

Because AI research once again arrives at a question psychology has lived with for a very long time: how do we know that a system is not just exposed to the past, but is actually using it in a meaningful way?

Long context may make systems more capable.

But memory is something more demanding.

I suspect that for agents, this difference will matter more and more.
