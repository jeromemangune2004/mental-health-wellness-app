import { fallbackMessages } from './fallbackMessages.js';

const API_KEY = "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";

export async function getAiMessage(prompt) {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: "You are a supportive mental health companion." },
          { role: "user", content: prompt }
        ]
      })
    });

    const result = await response.json();

    if (result.choices && result.choices[0]?.message?.content) {
      return result.choices[0].message.content;
    }

    throw new Error("Invalid AI response");

  } catch (error) {
    console.warn("AI API failed, using fallback:", error);
    const random = fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)];
    return random;
  }
}