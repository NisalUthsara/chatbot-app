const OPENROUTER_API_KEY = "YOUR_API_KEY"; // 🔑 Replace with your OpenRouter API key
const MODEL = "stepfun/step-3.5-flash:free";
const SITE_URL = "<YOUR_SITE_URL>";   // Optional
const SITE_NAME = "Simple Chat Bot";  // Optional

// Conversation history (system prompt + all turns)
const conversationHistory = [
  {
    role: "system",
    content: "You are a friendly, helpful, and concise AI assistant. Keep your replies clear and conversational. Use the occasional relevant emoji to keep things warm. Avoid overly long responses unless the user asks for detail.",
  },
];

/**
 * Sends a user message to OpenRouter and returns the AI reply string.
 * Automatically maintains the full conversation history for context.
 * @param {string} userMessage
 * @returns {Promise<string>}
 */
async function sendToAI(userMessage) {
  // Append user turn to history
  conversationHistory.push({ role: "user", content: userMessage });

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "HTTP-Referer": SITE_URL,
      "X-OpenRouter-Title": SITE_NAME,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      messages: conversationHistory,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `API error ${response.status}`);
  }

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content?.trim();

  if (!reply) throw new Error("Empty response from API.");

  // Append assistant turn to history so future messages have full context
  conversationHistory.push({ role: "assistant", content: reply });

  return reply;
}