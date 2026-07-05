---
layout: post
title: "Escaping the Rat Race: Local Models for Cashflow Decisions"
date: 2025-06-05
description: "Building a local LLM system to play the Cashflow game"
published: false
---

╔════════════════════════════════════════════════════════════════════╗
║     ESCAPING THE RAT RACE: LOCAL MODELS FOR CASHFLOW DECISIONS     ║
║            Authors: Marius Fleischer and Avani Tanna               ║
╚════════════════════════════════════════════════════════════════════╝

Hello dear readers,

────────────────────────────────────────────────────
(Insert ASCII diagram of cashflow game here)
────────────────────────────────────────────────────

“Rich Dad, Poor Dad” book author Robert Kiyosaki’s *Cashflow* game  
(https://www.richdad.com/classic) simulates the financial journey  
from paycheck-to-paycheck survival to financial independence—what  
the game calls escaping the Rat Race.

As part of an exploration into local language model capabilities and  
LLM workflows, we set out to build a system that could play the game  
and make sound financial decisions along the way.  

The goal: use a small local LLM to reason about deals and guide play  
based on real financial metrics and situational context.

───────────────────────────────
First Attempt: Agent-Based Design
───────────────────────────────

Our initial design was agentic: the LLM was equipped with tools  
(like a calculator), formulas (e.g., cash-on-cash return, passive  
income thresholds), and context (game state: income, expenses, deals,  
assets, liabilities).  

We let the model decide when to invoke tools, which formulas to use,  
and ultimately which decisions to make.

This quickly exposed the limitations of small local models. They often:
- Skipped tool usage altogether  
- Used wrong arguments  
- Misapplied formulas  
- Made financially irrational decisions  

The core issue was a mismatch between what small LLMs can do reliably  
and the expectations of open-ended, agent-driven workflows.

──────────────────────────────────────────────
Revised Approach: AI Workflow, No Control Flow
──────────────────────────────────────────────

We restructured the system. No more control flow decisions by the LLM.  

Every turn, the system executes a fixed sequence:
1. Parse game event (e.g., a deal card)  
2. Compute all relevant financial metrics using deterministic code  
3. Summarize current game state and event context  
4. Provide a compact prompt with instructions, context, and the  
   decision to make  
5. Let the LLM reason and pick an option  

By removing branching, tool calling, and memory complexity, the  
model’s reasoning improved drastically. Decisions became more rational  
and aligned with win conditions.  

Notably, this workflow successfully got the model out of the Rat Race— 
something that never happened under the agentic setup.

────────────────
Testing and Evaluation
────────────────

To validate decisions and iterate faster, we decoupled the input source.  

Instead of simulating the game live, we injected hardcoded test scenarios.  
This made it easy to inspect how the system behaves in specific,  
repeatable situations—an essential step when working with LLM workflows,  
which are otherwise hard to test.

────────────────────────────────────────────────────
(Insert ASCII diagram of testing architecture here)
────────────────────────────────────────────────────

─────────────────────────────────────
Comparison: Agentic vs AI Workflow
─────────────────────────────────────

+-------------------+--------------------+------------------------------+
| Feature           | Agentic            | AI Workflow                  |
+-------------------+--------------------+------------------------------+
| Tool calling      | LLM-controlled     | Predefined, external         |
| Control flow      | LLM-decided        | Fully scripted               |
| Reasoning quality | Inconsistent       | Reliable                     |
| Escape Rat Race?  | Never              | Yes                          |
| Testing ease      | Low                | High (with decoupled input)  |
+-------------------+--------------------+------------------------------+

─────────────────────────
Code and Implementation
─────────────────────────

Check out our GitHub [link here]. 
→ Try it, tweak it, extend it — and let us know how it goes.

Got questions? Follow us on https://www.linkedin.com/in/marius-fleischer/
and https://www.linkedin.com/in/avani-tanna/. 
We regularly post projects and content in this space!

────────────
Conclusion
────────────

Agent-based designs are tempting—but with small local models,  
deterministic workflows with delegated reasoning work far better.  

By reducing what the LLM is responsible for (just think, not act),  
we built a reliable system that plays the *Cashflow* game effectively,  
makes smart financial decisions, and escapes the Rat Race.
