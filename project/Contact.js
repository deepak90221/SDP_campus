import React, { useState } from 'react';
import './Contact.css'; // Import CSS file for styling

const Contact = () => {
  // Dummy data for employees and alumni
  const [employees] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', position: 'UI/UX Designer' },
    // Add more employees as needed
  ]);

  const [alumni] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', position: 'Data Analyst' },
    { id: 2, name: 'Bob Williams', email: 'bob@example.com', position: 'Marketing Manager' },
    // Add more alumni as needed
  ]);

  const handleContact = (email) => {
    // Placeholder for contacting logic
    console.log('Contacting', email);
    // You can implement the contact logic here (e.g., open email client)
  };

  return (
    <div className="contact-container">
      <div className="contact-section">
        <h2>Employees</h2>
        <ul className="contact-list">
          {employees.map(employee => (
            <li key={employee.id} className="contact-item">
              <div>Name: {employee.name}</div>
              <div>Email: {employee.email}</div>
              <div>Position: {employee.position}</div>
              <button className="contact-button" onClick={() => handleContact(employee.email)}>Contact</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-section">
        <h2>Alumni</h2>
        <ul className="contact-list">
          {alumni.map(alumnus => (
            <li key={alumnus.id} className="contact-item">
              <div>Name: {alumnus.name}</div>
              <div>Email: {alumnus.email}</div>
              <div>Position: {alumnus.position}</div>
              <button className="contact-button" onClick={() => handleContact(alumnus.email)}>Contact</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
