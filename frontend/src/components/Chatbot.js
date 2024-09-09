import React, { useState } from "react";
import axios from "axios";
import "../chatbot.css"; // Import the CSS file

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo", // change to the correct model you have access to
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            Authorization:
              "Bearer sk-proj-aKX7gF7cFLQR2Kod2aDRT3BlbkFJaKZXygFqXtiQ4dhCPYIt",
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = {
        sender: "bot",
        text: response.data.choices[0].message.content,
      };
      setMessages([...messages, userMessage, botMessage]);
      setInput("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="chat-container">
        <h1>Ask anything</h1>
        <div className="chat-window">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? sendMessage() : null)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
