import React from 'react';
import './Exams.css'; 

class ExamDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examDate: '2024-03-15',
      examTime: '10:00 AM - 12:00 PM',
      examDuration: '2 hours',
      instructions: [
        'Please ensure a stable internet connection.',
        'Make sure your device camera and microphone are working properly.',
        'Do not navigate away from the exam page during the duration of the exam.',
        'Follow the instructions carefully for each question.',
        'Ensure you submit your answers before the end of the exam.',
        'If you encounter any technical issues, raise your hand and notify the proctor immediately.',
        'You are not allowed to access any external resources or communication tools during the exam.',
        'Read each question carefully and double-check your answers before submission.'
      ],
      markingScheme: {
        green: '+1',
        red: '-1',
        orange: '0'
      }
    };
  }

  startExam = () => {
    // Logic to start the exam can be added here
    alert('Exam started!');
  };

  acceptAll = () => {
    // Logic to accept all details can be added here
    alert('All details accepted!');
  };

  render() {
    return (
      <div className="exam-details-container">
        <h2>Online Exam Details</h2>
        <div className="details">
          <p><strong>Date:</strong> {this.state.examDate}</p>
          <p><strong>Time:</strong> {this.state.examTime}</p>
          <p><strong>Duration:</strong> {this.state.examDuration}</p>
        </div>
        <div className="instructions">
          <h3>Instructions:</h3>
          <ul>
            {this.state.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
        <div className="marking-scheme">
          <h3>Marking Scheme:</h3>
          <ul>
            {Object.entries(this.state.markingScheme).map(([color, score]) => (
              <li key={color} style={{ color }}>
                {color}: {score}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={this.startExam} className="start-exam-btn">
        <a href="Quiz" >Start Exam</a>

        </button>
        <button onClick={this.acceptAll} className="accept-all-btn">Accept All</button>
      </div>
    );
  }
}

export default ExamDetails;
