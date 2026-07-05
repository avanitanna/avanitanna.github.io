---
layout: post
title: "News Automation System"
date: 2025-04-19
description: "Get your news summary every morning -- powered by LangGraph and Deepseek"
published: false
---

In this project, I built a LangGraph and Deepseek powered News Automation System that leverages asynchronous processing to deliver curated news summaries directly to your inbox (for instance, every morning!). 

#### Workflow Architecture 
This project creates an orchestrated workflow that consists of four main nodes:

- `fetch_articles_async`: Retrieves article links from configured news sources
- `extract_content_async`: Processes and cleans article content
- `summarize_articles_async`: Generates AI summaries using OpenRouter
- `send_notifications`: Delivers formatted email with summaries

Note that this system uses a directed workflow with predetermined decision logic rather than a fully "agentic" approach. The LLM is primarily used as a summarization tool rather than for decision-making.

In a true agent system, the LLM would decide which sites to visit, which articles are worth extracting, or when to transition between states. Our current implementation uses predefined logic for these decisions. 

#### LangGraph Asynchronous nodes
By implementing LangGraph nodes as `async` functions, the system can:
- Process multiple news sources simultaneously rather than sequentially
- Continue working even if one source fails or times out
- Gain significant performance improvements 

#### Deepseek LLM via OpenRouter
This project uses Deepseek to create summaries via OpenRouter. OpenRouter is simple to use and free! Deepseek does a good job at summarizing articles. You can also choose to bring a model of your choice by changing the LLM integration in the code shared.

#### Code/ Implementation
- If you're interested in building this system, running it or exploring the code, you can find it here https://github.com/avanitanna/news-automation-system.  
- In my previous post (link), I had mentioned using a Docker container. This project is containerized using Docker, making it easy to deploy and run - see `README.md` for more details. 
- You can also add news sources and specify environment variables such as sender and receiver email address as needed.

Hope this helps you build your own workflows -- extend this to create your own summaries/ newsletters! Follow me and stay tuned for more projects!  
