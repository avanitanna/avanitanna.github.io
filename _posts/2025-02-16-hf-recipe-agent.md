---
layout: post
title: "Recipe Finder Agent using smolagents"
date: 2025-02-16
description: "Recipe recommendation"
#tags: [tag1, tag2]
#categories: [category1]
---

As an AI enthusiast and home cook, I built a Recipe Finder Agent using Hugging Face’s smolagents framework. This agent is designed to solve a common problem: figuring out what to cook with the ingredients you already have, while respecting dietary restrictions and cuisine preferences. The agent articularly focus on the crucial "thought-action-observation" cycle that drives its behavior. [Smolagents](https://github.com/huggingface/smolagents) is a library that focuses on `codeAgent`, a kind of agent that performs “Actions” through code blocks, and then “Observes” results by executing the code. 

#### What makes an Agent "Agentic"?
Before diving into implementation details, let's clarify what we mean by an "agentic workflow." Unlike traditional software that follows predefined paths, an agentic system:

- Perceives its environment through data inputs
- Thinks and decides on appropriate actions through reasoning
- Acts using available tools
- Observes and learns from the results of those actions

#### Project Overview: The Recipe Finder Agent
The Recipe Finder Agent is designed to solve a common household problem: What can I cook with what I have? By combining LLM capabilities with domain-specific tools, this agent helps you discover recipes based on:

- Ingredients you have available
- Dietary restrictions 
- Cuisine type preferences

Thought-Action-Observation cycle: 
The agent works by leveraging the ReAct approach through which the agent is able to "think" step by step in order to generate a plan before jumping to the final answer. Thoughts represent the Agent’s internal reasoning and planning processes to solve the task and are responsible for accessing current observations and decide what the next action(s) should be. Actions are the concrete steps the AI agent takes to interact with its environment. For example, a code agent writes a code block that is interpreted externally. Observations are how an Agent perceives the consequences of its actions. The information provided by observations feeds back into the agent and improves its thought process and guides future actions.

#### Component Architecture and Implementation 
The agent setup combines and consists of several key components:

- A language model (Qwen2.5-Coder-32B)
- Specialized tools for web search (using duckduckgo search), and webpage visiting, 
- A recipe-finding tool that leverages these lower-level tools and considers user's preferences (e.g., available ingredients, dietary restrictions and cuisine type)
- Custom prompt templates that define the agent's reasoning process

At the heart of an effective agent lies its prompting strategy - check out `prompts.yml` to look at the critical Thought-Action-Observation cycle. 

The power of the recipe finder agent comes from the specialized `AdvancedRecipeFinderTool` that orchestrates lower-level tools. The recipe finding tool demonstrates a crucial principle: `composability`. It leverages lower-level tools (web search and webpage parsing) to create a higher-level capability (recipe finding). This composability is what allows the agent to tackle increasingly complex tasks.

Another critical aspect of the agent implementation is the planning process. The prompt templates include specialized sections for initial planning and plan updates. Planning is what:
- Forces the agent to think ahead rather than react impulsively
- Helps the agent decompose complex problems into manageable steps
- Provides a framework for handling unexpected results by updating the plan

The system also uses a clever fact-tracking mechanism to maintain context. 

Check out this [repo](https://huggingface.co/spaces/vntnn/First_agent_template/tree/main) for implementation details. 

#### [Recommended] How to run the codeAgent (more securely):

Note that you'll have to set your HF token first in an `.env` file if you choose to use dotenv. 

It is recommended to run a code agent using a docker container, e.g., `docker run -it ubuntu:latest bin/bash`. 

[Warning!] Once you run `python3 app.py`, it spawns a public URL that is linked to your container. HF claims that it runs using a secure local Python Interpretor https://smolagents.org/docs/secure-code-execution-of-smolagents/. 

#### Building your own agentic workflows
Here are some key principles for effective agentic workflows:
- Structure the Thought-Action-Observation Cycle
The explicit cycle of thinking, acting, and observing is what separates agents from simple LLM calls. Also ensure that your prompts enforce this cycle.
- Take advantage of Tool Composability
Design tools that can be combined in flexible ways. The power of agents comes from composing simple tools to solve complex problems.
- Implement Explicit Planning
Force the agent to create and update plans. This makes the agent more strategic and helps it recover from failures.
- Track Facts Systematically
Implement a system for the agent to track what it knows, what it has learned, and what it still needs to discover. This helps it make better decisions. 