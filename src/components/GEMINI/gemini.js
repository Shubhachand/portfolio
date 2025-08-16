// gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load API key from .env (Vite exposes variables with VITE_ prefix)
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error(
    "Gemini API Key is not configured. Please set VITE_GEMINI_API_KEY in your .env file."
  );
}

const genAI = new GoogleGenerativeAI(API_KEY);

// Store chat session across calls
let chat = null;

/**
 * Initializes the chat session with Gemini Pro model.
 * @returns {Promise<ChatSession>} The initialized or existing chat session.
 */
async function initChat() {
  if (!chat) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    chat = await model.startChat({
      history: [],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    });
  }
  return chat;
}

/**
 * Sends a user message to the Gemini API and retrieves the bot's response.
 * @param {string} message The text message from the user.
 * @returns {Promise<string>} The text response from the Gemini model.
 */
export async function askGemini(message) {
  try {
    const chatInstance = await initChat();
    const result = await chatInstance.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("❌ Gemini API error:", error);
    throw new Error(
      "Failed to get response from Gemini. Please check the console for details."
    );
  }
}
