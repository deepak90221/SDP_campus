import React from 'react';

const ResourcePage = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const sectionStyle = {
    marginBottom: '40px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const listItemStyle = {
    marginBottom: '10px',
    textAlign: 'left',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
    display: 'block',
    margin: '0 auto',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <h2>Recommended Books</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>JavaScript: The Good Parts by Douglas Crockford</li>
          <li style={listItemStyle}>Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin</li>
          <li style={listItemStyle}>Python Crash Course by Eric Matthes</li>
          {/* Add more recommended books */}
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2>Programming Languages to Learn</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>JavaScript</li>
          <li style={listItemStyle}>Python</li>
          <li style={listItemStyle}>Java</li>
          {/* Add more programming languages */}
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2>Certifications</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>JavaScript Developer Certification (JSDev)</li>
          <li style={listItemStyle}>Python Institute Certified Associate in Python Programming (PCAP)</li>
          <li style={listItemStyle}>Oracle Certified Professional, Java SE Programmer (OCPJP)</li>
          {/* Add more certifications */}
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2>Online Courses</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>React - The Complete Guide (Udemy)</li>
          <li style={listItemStyle}>Machine Learning A-Z™: Hands-On Python & R In Data Science (Udemy)</li>
          {/* Add more online courses */}
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2>Webinars and Workshops</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>Advanced JavaScript Concepts (Frontend Masters)</li>
          <li style={listItemStyle}>Data Science and Machine Learning Bootcamp (DataCamp)</li>
          {/* Add more webinars and workshops */}
        </ul>
      </section>
      
      <button style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'} onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}>View All Resources</button>
    </div>
  );
};

export default ResourcePage;
