// app/_components/ChatWidget.tsx
"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

type Role = "user" | "assistant";

type ChatMessage = {
  role: Role;
  content: string;
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I’m the CeremonyVerse assistant. I can help with Indian & fusion wedding planning, cultural shopping questions, and how our services work. What are you planning?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: input.trim(),
    };

    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch reply");
      }

      const data = await res.json();
      const assistantMessage = data.message as { role: string; content: string };

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            assistantMessage?.content ??
            "I’m sorry, I couldn’t respond. Please try again or use WhatsApp/contact form.",
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. You can always reach out via WhatsApp or the contact form for help.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-lg transition hover:shadow-xl"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <span className="text-xl">&times;</span>
        ) : (
          <span className="text-lg">💬</span>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 flex w-80 flex-col rounded-2xl border bg-white shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b px-3 py-2">
            <div>
              <div className="text-sm font-semibold">CeremonyVerse Assistant</div>
              <div className="text-xs text-neutral-500">
                Indian &amp; fusion wedding help
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-lg leading-none text-neutral-500 hover:text-neutral-800"
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex max-h-80 flex-col gap-2 overflow-y-auto px-3 py-3 text-sm">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-emerald-600 text-white" // swap to your sage color later
                      : "bg-neutral-100 text-neutral-900"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-neutral-100 px-3 py-2 text-neutral-600">
                  Typing…
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t px-3 py-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your wedding..."
              className="h-9 flex-1 rounded-full border px-3 text-sm outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="h-9 rounded-full px-3 text-xs font-medium text-white disabled:opacity-50"
              style={{ backgroundColor: "#047857" }}
            >
              Send
            </button>
          </form>

          {/* Disclaimer */}
          <div className="border-t px-3 py-2 text-[10px] text-neutral-400">
            This chat is for general guidance. For exact pricing &amp; availability,
            please use the contact form.
          </div>
        </div>
      )}
    </>
  );
}
