import React, { useState, useEffect } from 'react';
import './Quiz.css'; 

const CodingExam = () => {
  const [code, setCode] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [language, setLanguage] = useState('javascript');
  const [timeLeft, setTimeLeft] = useState(420); // 7 minutes in seconds
  const [timer, setTimer] = useState(null); // Define timer state variable

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.activeElement.tagName === "BODY") {
        submitExam();
      }
    };

    setTimer(
      setTimeout(() => {
        if (timeLeft > 0 && !submitted) {
          setTimeLeft(timeLeft - 1);
        } else if (!submitted) {
          submitExam();
        }
      }, 1000)
    );

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [timeLeft, submitted, timer]); // Add timer as a dependency

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const submitExam = () => {
    console.log('Submitted code:', code);
    setSubmitted(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const questionText = `
    Coin change problem\n:
    Given an amount and coins of different denominations,\n
    write a function to compute the fewest number of coins\n
    needed to make up that amount. If it's not possible to\n
    make up the amount, return -1.\n
    Example:\n
    Input: amount = 11, coins = [1, 2, 5]\n
    Output: 3 (1 coin of 5, 2 coins of 2)\n
    const coinChange = (amount, coins) => 
  `

  return (
    <div className="coding-exam-container">
      <h2>Coding Exam</h2>
      <div className="question">
        <h3>Question:</h3>
        <p>{questionText}</p>
      </div>
      <div className="editor-container">
        <textarea 
          value={code} 
          onChange={handleChange} 
          placeholder="Write your code here..." 
          className="code-editor"
          readOnly={submitted} // Prevent editing after submission
          onKeyDown={(e) => {if (e.shiftKey && e.keyCode === 9) { e.preventDefault(); if (timer) clearTimeout(timer); submitExam(); } }} // Prevent Shift+Tab and submit exam
        />
      </div>
      <div className="language-dropdown">
        <label htmlFor="language">Select Language:</label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
      </div>
      <div className="timer">
        <p>{submitted ? 'Successfully Submitted!' : `Time Left: ${formatTime(timeLeft)}`}</p>
      </div>
      <button onClick={submitExam} disabled={submitted} className="submit-btn">
        {submitted ? 'Submitted' : 'Submit'}
      </button>
    </div>
  );
}

export default CodingExam;
