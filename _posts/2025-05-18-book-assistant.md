---
layout: post
title: "Reading Assistant"
date: 2025-05-18
description: "Read books/papers efficiently using LLMs -- powered by Deepseek"
---

Recently, I was inspired by a [video](https://youtu.be/EWvNQjAaOHw?si=MvlB9R8jOL6pjT1B) by Andrej Karpathy, where he showcases how he leverages large language models (LLMs). Around the 55–56 minute mark, he discusses the idea of using LLMs to enhance the reading experience—specifically for books and other long-form materials. Karpathy notes the lack of seamless tools for this purpose and shares how he uses LLMs for summarizing and querying content.

Inspired by this, I built a reading tool that uses openly distributed ebooks from Project Gutenberg (an idea that I borrowed from video as Karpathy showed a book from Project Gutenberg) to help users better engage with books. The tool summarizes chapters and generates flashcards to make learning and retention easier. Future versions could support Retrieval-Augmented Generation (RAG) workflows, enabling question-answering over specific texts or chapters. I've also shared some ideas to expand this tool further below.

#### 🔧 How it Works / Basic Functionality

This project provides:

- **Book Fetching**: Retrieves content and chapter breakdowns from Project Gutenberg (or it can be expanded to other sources).
- **Chapter Summarization**: Offers concise summaries to help users quickly grasp key insights.
- **Flashcard Generation**: Creates customizable flashcards to reinforce knowledge and enhance studying/ make it more engaging.

The tool uses **Deepseek** via **OpenRouter**, which is easy to use and free! Deepseek does a good job of summarization and flashcard creation, but you can also switch to a different model by updating the LLM integration in the code.

#### 💻 Code
You can find the code implementation [here](https://github.com/avanitanna/reading-assistant).

#### 🎬 See It in Action
I recently recorded a  [demo](https://github.com/avanitanna/reading-assistant/blob/main/video-book-assistant.mp4) using a Project Gutenberg ebook titled *"Inventions in the Century."* In this demo, I walk through how to summarize chapters and generate flashcards using the Reading Assistant. It’s a great example of how LLMs can transform your reading and study habits.

#### 🚀 Ideas to Expand It

- **E-Reader Integration**: Sync with Kindle or your favorite e-reader and track progress across sources.
- **Multimodal Input**: Capture images of interesting blurbs or use voice assistance for hands-free interaction.
- **Personalized Flashcards**: Tailor flashcards to your learning style using chapter-level insights.
- **Support for Other Content Types**: Use it with research papers, articles, or any text content.
- **RAG Workflow**: Ask questions directly based on selected chapters or the entire book.

Follow me on LinkedIn for more content and projects in the space!

