---
title: "Repository Setup for Agents"
description: "Agents - for now - still need a way to quickly get context in a repository"
pubDate: "March 13 2026"
---

I've been using agents for awhile now; I used this for [Cash Register](https://github.com/julwrites/cash-register), [llm-nvim](https://github.com/julwrites/llm-nvim) and [NFC Tag Admin](https://github.com/julwrites/nfc-flutter). 

This really helped me to build up some intuition about what a LLM in agent mode could do, and where the common failings would be. It was also useful to build up some intuition around what system helped it to succeed. 

One of the key observations I - and many others - had was that models really needed the right context. In early iterations using a LLM for coding, I found the model was really strong at one-shotting something if I gave it the right context. In fact, this showed up a lot in prompt engineering discussions.

And so initially, there was a need for me - the human with the context - to provide that context to the model. 

I realized that if I wanted an agent to work on longer-term goals, I had to give it a system of information to work within. Even more so, if I wanted multiple agents working at the same time.

## Like Beads, but not just for Claude

I was originally inspired by Steve Yegge's work on [Beads](https://www.steveyegge.com/beads/). But as I wanted to be able to use this at work as well as at home, I wanted a system that could be adopted and adapted into *any* repository, regardless of the model provider. I'm also a great fan of no external dependencies. 

The first intuition: I should just move documentation and task systems into the repository itself. 

This would give agents context which was always accessible, up to date, and version controlled. 

## Letting agents bootstrap themselves

The next problem was; how can I onboard repositories to this? I would need to accommodate both existing as well as new repositories, and I wanted it to work out of the box. 

The second intuition: An agent could bootstrap the system onto any repository.

This would allow any agent, any model provider, to take an existing repository and with minimal instruction, integrate only relevant portions of this system into the repository. 

And for new repositories, it could be configured to prompt the user to talk through their intentions, and then bootstrap the system accordingly.

In fact, the agent could also use this to update itself in a repository.

## How well does this work?

It's not perfect, but this gave me quite a lot of leverage, especially when working with autonomous agents. I could spend synchronous time working on a plan together with the agent, and reviewing it, and then this would be saved in the repository itself. Then I could just dispatch tasks repeatedly. 

This became the absolute lifeline for building the **[Discipleship Journal](https://github.com/julwrites/discipleship-journal)**. I used Jules to develop 90% of that project from scratch. 80% of that was probably just me re-sending the same prompt over and over again, but with the harness, Jules was able to keep track of what had been done, and what needed to be done. 

Since then I've used it for so many things. In fact, all my active repositories at work and at home are now bootstrapped with this harness. 

## The Harness

So, what does this harness have and do?

At its core, **agent-harness** is a lightweight, self-contained system that lives *inside* your repository. It provides three essential capabilities that transform how agents interact with your codebase:

### 1. **Task Documentation System**

The harness introduces a structured task tracking system using Markdown files with YAML frontmatter. Tasks are organized into categories like `foundation/`, `infrastructure/`, `domain/`, `features/`, and `testing/`.

```
docs/tasks/
├── foundation/     # Core architecture and setup
├── infrastructure/ # Services, adapters, platform code  
├── domain/         # Use cases, repositories, business logic
├── presentation/   # UI, state management
├── features/       # End-to-end feature implementation
└── testing/        # Test infrastructure
```

Each task file captures not just *what* needs to be done, but *why* it was done, *how* it was approached, and what problems were encountered. This creates a permanent, searchable record of the project's evolution.

Agents use `./scripts/tasks.py` to:
- **Create tasks**: `scripts/tasks.py create features "Implement user authentication"`
- **List pending work**: `scripts/tasks.py list`
- **Find next task**: `scripts/tasks.py next`
- **Update status**: `scripts/tasks.py update [TASK_ID] in_progress`
- **Track context**: `scripts/tasks.py context` shows active tasks

### 2. **Memory System**

Long-term knowledge is stored in `docs/memories/` as structured entities. Unlike tasks (which are transient), memories persist across sessions and sprints. They capture:

- Architectural decisions and their rationale
- Domain knowledge and business rules
- Security considerations and risk assessments
- Entity definitions and relationships

Agents use `./scripts/memory.py` to recall relevant context before starting work, ensuring they don't reinvent the wheel or forget critical constraints.

### 3. **Agent Instructions (AGENTS.md)**

Every repository bootstrapped with the harness includes an `AGENTS.md` file. This serves as the "system prompt" extension for AI agents, encoding:

- **Workflow rules**: "If it's not documented in `docs/tasks/`, it didn't happen"
- **Quality gates**: Run tests before requesting review
- **Security protocols**: Check risk levels before using dangerous tools
- **Multi-agent coordination**: How to communicate via the file-based message bus

The philosophy is simple: agents should be able to pick up any task and understand *exactly* how to work within this repository's conventions without guessing.

### Why This Matters

The harness doesn't just help agents work—it helps them work *autonomously*. When I dispatch a task to Jules (or Claude, or any other agent), I don't need to re-explain the project structure, the testing requirements, or the security boundaries. All of that is encoded in the repository itself.

This means I can:
- **Work asynchronously**: Plan with me, then execute while I sleep
- **Scale to multiple agents**: Different agents can pick up different tasks without stepping on each other
- **Maintain continuity**: A task started by Jules can be continued by Claude, or by me, without loss of context
- **Preserve institutional knowledge**: The repository becomes self-documenting

The harness turns a codebase from a pile of files into a **living system** that understands its own history, constraints, and goals. And because it's just Markdown, YAML, and Python scripts, it works with any model provider—no vendor lock-in, no external dependencies.

This is what made building the [Discipleship Journal](https://github.com/julwrites/discipleship-journal) possible. Not because the agent was perfect, but because the system around the agent was robust enough to handle imperfection.