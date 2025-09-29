// Simple logging utility for learning sessions

export const logger = {
  info: (message) => console.log(`ℹ️  ${message}`),
  success: (message) => console.log(`✅ ${message}`),
  warning: (message) => console.log(`⚠️  ${message}`),
  error: (message) => console.log(`❌ ${message}`),

  section: (title) => {
    console.log('');
    console.log(`🔸 ${title}`);
    console.log('─'.repeat(title.length + 3));
  },

  practice: (topic) => {
    console.log('');
    console.log(`🎯 Practicing: ${topic}`);
    console.log('═'.repeat(topic.length + 14));
  }
};

export default logger;