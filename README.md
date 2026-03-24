# 🤖 Simple Chat Bot

A modern, minimal AI-powered chatbot interface built with plain HTML, CSS, and JavaScript — no frameworks or build tools required. Powered by [OpenRouter](https://openrouter.ai/) using various free models.

---

## ✨ Features

- 💬 Real AI responses via OpenRouter API
- 🌗 Dark / Light mode toggle
- 🧠 Full conversation memory (context-aware multi-turn chat)
- ⌨️ Abilitiy to change the AI model
- 🎨 Smooth message animations and micro-interactions
- 📱 Responsive layout — works on desktop and mobile
- ⚡ Quick-start suggestion chips on the empty state
- 🕐 Timestamps on every message

---

## 🗂️ Project Structure

```
simple-chat-bot/
├── chatbot.html       # Main UI — all markup, styles, and chat logic
├── openrouter.js      # OpenRouter API integration + conversation history
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NisalUthsara/chatbot-app.git
```

### 2. Add your OpenRouter API key

Open `openrouter.js` and replace the placeholder at the top:

```js
const OPENROUTER_API_KEY = "<YOUR_API_KEY>"; // 🔑 Replace this
```

Get a free API key at [openrouter.ai/keys](https://openrouter.ai/keys).

### 3. Serve the project locally

Because the HTML file loads `openrouter.js` as a script and makes API requests, you need to run it over a local server (not `file://`).

**Option A — Node.js**
```bash
npx serve .
```

**Option B — Python**
```bash
python -m http.server 8000
```

**Option C — VS Code**
Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, right-click `chatbot.html` → *Open with Live Server*.

Then open your browser at `http://localhost:8000` (or the port shown in your terminal).

---

## 🛠️ Built With

- **HTML5 / CSS3 / Vanilla JS** — zero dependencies
- **[Tailwind CSS](https://tailwindcss.com/)** (via CDN) — utility classes
- **[DM Sans](https://fonts.google.com/specimen/DM+Sans)** — Google Fonts
- **[OpenRouter API](https://openrouter.ai/)** — AI model gateway

---
