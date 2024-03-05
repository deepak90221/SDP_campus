import React, { useState } from 'react';
import openai from 'openai';

const GPT3_API_KEY = 'YOUR_GPT3_API_KEY';

const Assistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleMessageSubmit = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to the conversation
    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    try {
      // Send user message to OpenAI API
      const response = await openai.complete({
        engine: 'davinci',
        prompt: inputMessage,
        maxTokens: 50,
        apiKey: GPT3_API_KEY,
      });

      // Add AI response to the conversation
      const aiMessage = response.data.choices[0].text.trim();
      setMessages([...messages, { text: aiMessage, sender: 'assistant' }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div style={{ height: '400px', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.sender === 'assistant' ? 'left' : 'right', padding: '5px' }}>
            <span style={{ padding: '5px', backgroundColor: message.sender === 'assistant' ? '#efefef' : '#007bff', color: message.sender === 'assistant' ? '#000' : '#fff', borderRadius: '5px' }}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
        <button onClick={handleMessageSubmit}>Send</button>
      </div>
    </div>
  );
};

export default Assistant;
