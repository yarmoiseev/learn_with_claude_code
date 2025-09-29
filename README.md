# JavaScript Learning Sandbox 🚀

A hands-on JavaScript learning environment designed for 80% practice and 20% theory, guided by Claude Code as your experienced tutor.

## Quick Start

```bash
# Install dependencies (if any are added later)
npm install

# Start exploring
npm start

# Begin practicing
npm run practice

# Run with auto-reload
npm run practice:watch

# Run tests
npm test
```

## Project Structure

```
js-sandbox-learning/
├── concepts/          # Core JavaScript concepts with examples
├── examples/          # Complete example projects
├── practices/         # Hands-on coding exercises
│   ├── current.js     # Your active practice file
│   └── template.js    # Template for new practice sessions
├── tests/             # Test files for validation
├── utils/             # Helper utilities
└── index.js           # Main entry point
```

## Learning Approach

### 🎯 Practice-First Philosophy
- **80% Hands-On**: Write code, experiment, break things, fix them
- **20% Theory**: Just enough explanation to understand the "why"
- **Immediate Feedback**: Run code instantly with `npm run practice:watch`

### 📚 Learning Path

1. **Start with `/concepts`** - Explore fundamental concepts with interactive examples
2. **Practice in `/practices`** - Copy concepts to current.js and experiment
3. **Build in `/examples`** - Study complete projects
4. **Test yourself** - Validate learning with tests

### 🔄 Learning Cycle

1. **Explore** a concept in `/concepts`
2. **Practice** by modifying code in `practices/current.js`
3. **Experiment** - change values, break code, see what happens
4. **Ask Claude** for guidance, explanations, or new challenges
5. **Test** your understanding
6. **Repeat** with increasing complexity

## Available Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Welcome message and overview |
| `npm run practice` | Run your current practice file |
| `npm run practice:watch` | Auto-reload practice file on changes |
| `npm test` | Run all tests |
| `npm run dev` | Watch main index.js file |

## How to Use This Sandbox

### For Beginners
1. Run `npm start` to see the overview
2. Open `concepts/01-variables-and-types.js`
3. Copy interesting parts to `practices/current.js`
4. Experiment and ask Claude questions

### For Intermediate Learners
1. Browse `/examples` for project inspiration
2. Create new practice files for specific topics
3. Build mini-projects in `/examples`
4. Write tests for your code

### Working with Claude Code

Claude Code serves as your experienced tutor. You can:

- **Ask for explanations**: "Explain closures with examples"
- **Request challenges**: "Give me a practice exercise for array methods"
- **Get code reviews**: "Review my function and suggest improvements"
- **Debug together**: "Help me understand why this code isn't working"
- **Learn best practices**: "What's the modern way to handle async operations?"

## Tips for Effective Learning

### 🧪 Experiment Fearlessly
- Change values and see what happens
- Break code intentionally to understand error messages
- Try different approaches to the same problem

### 🤔 Ask Good Questions
- "What happens if I change this value?"
- "Why does this work differently?"
- "What's the best practice for this scenario?"
- "Can you show me a real-world example?"

### 📝 Keep Notes in Code
```javascript
// My learning note: This is confusing at first
// TODO: Come back and practice this more
// QUESTION: Ask Claude about performance implications
```

### 🎲 Practice Daily
- Set aside 30-60 minutes for hands-on coding
- Focus on one concept at a time
- Build something small every day

## Example Learning Session

```javascript
// In practices/current.js
import logger from '../utils/logger.js';

logger.practice('Array Methods');

const numbers = [1, 2, 3, 4, 5];

// Experiment with map
const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);

// Try different approaches
const tripled = numbers.map(num => {
  const result = num * 3;
  console.log(`${num} * 3 = ${result}`);
  return result;
});

// Ask yourself: What other array methods can I chain here?
// Ask Claude: "Show me more advanced array method patterns"
```

## Next Steps

1. **Start coding immediately** - open `practices/current.js`
2. **Ask Claude for your first challenge** based on your experience level
3. **Set a daily practice goal** (even 15 minutes helps!)
4. **Build something fun** - a small game, calculator, or utility

Remember: The best way to learn JavaScript is to write JavaScript. Start coding and ask questions as you go!

---

**Happy coding!** 🎓 Ask Claude Code anything to begin your learning journey.