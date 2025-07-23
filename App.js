import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const faqBot = (question) => {
    const q = question.toLowerCase();

    if (q.includes('refund')) return "Refunds take 5–7 days after request approval.";
    if (q.includes('delivery')) return "Delivery usually takes 3–5 business days.";
    if (q.includes('login')) return "Try resetting your password if you can't log in.";
    if (q.includes('signup') || q.includes('register')) return "You can sign up using your email on the signup page.";
    if (q.includes('payment') || q.includes('pay')) return "We accept UPI, credit/debit cards, and net banking.";
    if (q.includes('cancel')) return "You can cancel your order within 24 hours of placing it.";
    if (q.includes('support') || q.includes('help')) return "Our support team is available 24/7 via chat and email.";
    if (q.includes('track')) return "You can track your order in the 'My Orders' section.";
    if (q.includes('update') && q.includes('profile')) return "Go to your profile page to update your details.";
    if (q.includes('contact')) return "You can contact us at support@example.com.";

    return "Sorry, I don’t know that yet. Please try asking differently.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'You', text: input };
    const botMsg = { sender: 'Bot', text: faqBot(input) };

    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>🤖 FAQ Chatbot</h1>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender === 'You' ? 'user' : 'bot'}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
