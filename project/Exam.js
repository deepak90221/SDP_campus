import React, { useState } from 'react';

function PlacementExam() {
  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Rome'],
      answer: 'Paris'
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Venus', 'Mercury'],
      answer: 'Mars'
    },
    // Add more questions here
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // You can implement further logic here, such as calculating the score
  };

  return (
    <div>
      <h2>Placement Exam</h2>
      <form>
        {questions.map((question, index) => (
          <div key={question.id}>
            <p>{question.question}</p>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  id={`option-${index}-${optionIndex}`}
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                  disabled={submitted}
                />
                <label htmlFor={`option-${index}-${optionIndex}`}>{option}</label>
              </div>
            ))}
          </div>
        ))}
        {!submitted && (
          <button type="button" onClick={handleSubmit}>Submit</button>
        )}
      </form>
      {submitted && (
        <div>
          <h3>Answers Submitted!</h3>
          {/* You can display further details here, such as score */}
        </div>
      )}
    </div>
  );
}

export default PlacementExam;
