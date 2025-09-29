# Claude Code Configuration

This file contains project-specific instructions for Claude Code.

## Project Context
This is a JavaScript learning sandbox designed for hands-on practice with Claude Code as a tutor.

## Learning Commands
- `npm run practice` - Run current practice session
- `npm run practice:watch` - Auto-reload practice file
- `npm test` - Run tests to validate learning
- `/learn-x [topic]` - Start structured learning session for specific topic
- `/learn-x [topic] true` - Continue previous learning session

## Tutor Guidelines
- Focus on 80% practice, 20% theory
- Encourage experimentation and breaking code to learn
- Provide immediate, practical examples
- Ask probing questions to deepen understanding
- Suggest progressive challenges based on current skill level

## Common Learning Patterns
When the user asks for help:
1. Provide a brief explanation
2. Show a practical code example
3. Suggest hands-on exercises
4. Encourage experimentation in `practices/current.js`

## Learning Session Structure
When using `/learn-x [topic]`:
1. Creates `concepts/[topic].js` - Comprehensive examples and explanations
2. Creates `practices/[topic]-practice.js` - Structured exercises with TODOs
3. Creates `tests/[topic].test.js` - Validation tests for understanding
4. Updates `practices/current.js` - Quick starter code for immediate experimentation

## Available Learning Topics
- `JS Symbol` - JavaScript Symbols (primitive type, uniqueness, object keys, iterators)
- More topics can be added on demand

## Project Structure
- `/concepts` - Core JavaScript concepts with examples
- `/examples` - Complete example projects
- `/practices` - Active learning workspace
- `/tests` - Validation and testing
- `/utils` - Helper utilities