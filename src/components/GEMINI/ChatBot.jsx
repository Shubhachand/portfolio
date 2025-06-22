import React, { useState, useRef, useEffect } from "react";
import resumeText from "../../assets/resume.txt?raw";
import { GoogleGenerativeAI } from "@google/generative-ai";

const RESUME_CONTEXT = resumeText;
export default function App() {
  const [showChat, setShowChat] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const chatMessagesRef = useRef(null);

  // Load API key from .env (VITE_GEMINI_API_KEY)
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  if (!API_KEY) {
    throw new Error(
      "Gemini API Key is not configured. Please set VITE_GEMINI_API_KEY in your .env file."
    );
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const chatInstanceRef = useRef(null);

  // Initialize Gemini chat session
  const initGeminiChat = async () => {
    if (!chatInstanceRef.current) {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        chatInstanceRef.current = await model.startChat({
          history: [],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
          },
        });
        console.log("Gemini chat model initialized.");
      } catch (error) {
        console.error("❌ Error initializing Gemini chat model:", error);
        throw new Error(
          "Failed to initialize chat model. Check your API key and network connection."
        );
      }
    }
    return chatInstanceRef.current;
  };

  // Send message to Gemini API
 // 3. Modify your askGemini function to include the resume context in every prompt

const askGemini = async (message) => {
  try {
    const chat = await initGeminiChat();
    // 3a. Combine the resume context and user message in the prompt
    const prompt = `
You are an AI assistant that answers questions about the following person based on their resume.

Resume:
${RESUME_CONTEXT}

User question: ${message}

If the answer is not in the resume, say "Sorry, I don't have that information."
`;
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("❌ Gemini API error:", error);
    throw new Error("Failed to get response from Gemini. Please check the console for details.");
  }
};


  // Send user message
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;
    const newUserMessage = { role: "user", text: inputMessage };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage("");
    setIsLoading(true);
    try {
      const botReplyText = await askGemini(newUserMessage.text);
      setMessages((prev) => [...prev, { role: "bot", text: botReplyText }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: `Error: ${error.message}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Suggest next question
  const handleSuggestNextQuestion = async () => {
    if (isSuggesting || isLoading || isSummarizing) return;
    setIsSuggesting(true);
    try {
      const currentChatHistory = messages
        .map((msg) => `${msg.role === "user" ? "You" : "Bot"}: ${msg.text}`)
        .join("\n");
      const prompt = `Based on the following conversation, suggest a relevant follow-up question. Be concise and provide only the question:\n\n${currentChatHistory}\n\nSuggested question:`;
      const suggestedQuestion = await askGemini(prompt);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: `✨ Here's a suggested question: "${suggestedQuestion}"`,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: `Error suggesting question: ${error.message}` },
      ]);
    } finally {
      setIsSuggesting(false);
    }
  };

  // Summarize chat
  const handleSummarizeChat = async () => {
    if (isSummarizing || isLoading || isSuggesting) return;
    setIsSummarizing(true);
    try {
      const currentChatHistory = messages
        .map((msg) => `${msg.role === "user" ? "You" : "Bot"}: ${msg.text}`)
        .join("\n");
      const prompt = `Summarize the following chat conversation concisely:\n\n${currentChatHistory}\n\nSummary:`;
      const summary = await askGemini(prompt);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: `✨ Chat Summary: ${summary}` },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: `Error summarizing chat: ${error.message}` },
      ]);
    } finally {
      setIsSummarizing(false);
    }
  };

  // Scroll to bottom on new messages
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages, isLoading, isSuggesting, isSummarizing]);

  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Floating Chat Button */}
      <div
        className="fixed bottom-4 right-4 p-4 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-lg cursor-pointer z-50 transition-transform hover:scale-110"
        onClick={() => setShowChat(!showChat)}
      >
        <span role="img" aria-label="chat bubble" className="text-2xl">
          💬
        </span>
      </div>

      {/* Chatbot Window */}
      {showChat && (
        <div className="fixed bottom-20 right-4 w-80 max-w-[calc(100vw-32px)] h-[70vh] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-t-xl shadow-md flex items-center justify-between">
            <span className="flex items-center">
              <span role="img" aria-label="robot" className="mr-2">
                🤖
              </span>{" "}
              Chat with Shubhachand
            </span>
            <button
              onClick={() => setShowChat(false)}
              className="text-white hover:text-gray-100 transition-colors p-1 rounded-full hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>
          {/* Chat Messages Area */}
          <div
            ref={chatMessagesRef}
            className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-xl shadow-sm break-words ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-900 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {(isLoading || isSuggesting || isSummarizing) && (
              <div className="flex justify-start">
                <div className="max-w-[75%] px-4 py-2 rounded-xl shadow-sm bg-gray-200 text-gray-900 animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Chat Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white shadow-inner">
            <div className="flex mb-2">
              <button
                onClick={handleSuggestNextQuestion}
                className="flex-1 mr-1 bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                disabled={isSuggesting || isLoading || isSummarizing}
              >
                {isSuggesting ? "Suggesting..." : "Suggest next question ✨"}
              </button>
              <button
                onClick={handleSummarizeChat}
                className="flex-1 ml-1 bg-green-600 text-white px-2 py-1 rounded-lg hover:bg-green-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                disabled={isSummarizing || isLoading || isSuggesting}
              >
                {isSummarizing ? "Summarizing..." : "Summarize Chat ✨"}
              </button>
            </div>
            <div className="flex">
              <input
                type="text"
                className="flex-1 border text-white border-gray-300 px-4 py-2 rounded-lg mr-2 outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                placeholder={
                  isLoading || isSuggesting || isSummarizing
                    ? "Please wait..."
                    : "Type your message..."
                }
                disabled={isLoading || isSuggesting || isSummarizing}
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || isSuggesting || isSummarizing}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
