---
name: learn-x
description: This commands accepts the topic and starts learning session
category: general
version: 1.0.0
author: Yaroslav
created: 2025-09-29
updated: 2025-09-29
---

# Command Name

## Overview

This commands accepts the topic and starts learning session, by creating topic-specific concept file, providing examples, and practice files covered by tests.

## Usage

```
/learn-x [arguments]
```

## Arguments

- `argument1` (required): Starts the learning session on [argument1] topic
- `argument2` (optional): Boolean. Continue previous session? (true/false)

## Behavior

Describe the expected behavior and what Claude Code should do when this command is executed:

1. Read @README.md (reminder of the project's purpose)
2. If [argument2] is 'false' > setup environment, accroding to specified in [argument1] topic
3. If [argument2] is 'true' > check specified in [argument1] lesson files and continue the session 

