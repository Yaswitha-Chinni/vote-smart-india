import React, { useState, useRef, useEffect } from 'react';
import { electionSteps } from '../data/electionData';

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    { text: "Namaste! I am your Election Assistant. How can I help you understand the Indian election process today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate bot thinking
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  const generateResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes("age") || q.includes("vote")) {
      return "To vote in India, you must be a citizen of India and at least 18 years old on January 1st of the year the electoral roll is prepared.";
    }
    if (q.includes("evm")) {
      return "Electronic Voting Machines (EVMs) are used to record votes. They are tamper-proof and have been used in all general and state assembly elections in India since 2004.";
    }
    if (q.includes("vvpat")) {
      return "VVPAT (Voter Verifiable Paper Audit Trail) allows you to verify your vote. A slip showing your choice is visible for 7 seconds before falling into a secure box.";
    }
    if (q.includes("mcc") || q.includes("code of conduct")) {
      return "The Model Code of Conduct is a set of guidelines for political parties and candidates during elections, ensuring fairness and preventing misuse of power.";
    }
    if (q.includes("step") || q.includes("process")) {
      return "The election process has 9 main steps: Delimitation, Electoral Rolls, Schedule Announcement, Nominations, Campaigning, Polling, VVPAT Verification, Counting, and Results.";
    }
    
    return "That's a great question! I'm still learning, but you can find more about that in the 'Election Steps' or 'Flashcards' sections. Would you like to know about Polling or EVMs?";
  };

  return (
    <div className="chat-container animate-slide-up">
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
            <div className="message-bubble">{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chat-input-area">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about age, EVM, VVPAT, or the process..."
        />
        <button className="btn-primary" onClick={handleSend}>Send</button>
      </div>

      <style jsx="true">{`
        .chat-container {
          height: 500px;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 24px;
          border: 1px solid var(--border);
          overflow: hidden;
        }
        .chat-messages {
          flex: 1;
          padding: 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .message {
          display: flex;
          width: 100%;
        }
        .message.user {
          justify-content: flex-end;
        }
        .message-bubble {
          max-width: 80%;
          padding: 1rem 1.25rem;
          border-radius: 20px;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .bot .message-bubble {
          background: var(--glass);
          color: var(--white);
          border-bottom-left-radius: 4px;
          border: 1px solid var(--border);
        }
        .user .message-bubble {
          background: var(--accent-gradient);
          color: white;
          border-bottom-right-radius: 4px;
        }
        .chat-input-area {
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          gap: 0.75rem;
          border-top: 1px solid var(--border);
        }
        .chat-input-area input {
          flex: 1;
          background: var(--bg-dark);
          border: 1px solid var(--border);
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          color: white;
          outline: none;
        }
        .chat-input-area input:focus {
          border-color: var(--saffron);
        }
      `}</style>
    </div>
  );
};

export default ChatAssistant;
