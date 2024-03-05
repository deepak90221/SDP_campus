import React, { useState } from 'react';
import './Ship.css';

const Ship = () => {
  
  const [locationFilter, setLocationFilter] = useState('');
  const [internships, setInternships] = useState([
    {
      id: 1,
      title: 'Sales Consultant',
      company: 'Datasrv Technologies',
      location: 'Noida',
      startDate: 'Immediately',
      duration: '6 Months',
      stipend: '₹ 10,000 /month',
      posted: '3 weeks ago',
      image: 'https://1.bp.blogspot.com/-4y5mLpyNq4M/YFa_9ZEo-NI/AAAAAAAAAhw/fMnZCeXTZKkamlRaUB963q3soEZSv689wCLcBGAsYHQ/s1200/internships-ts-100669679-large.jpg'
    },
    {
      id: 2,
      title: 'Sales Consultant',
      company: 'Prabha Set',
      location: 'Dehradun',
      startDate: 'Immediately',
      duration: '8 months',
      stipend: '₹ 20,000 /month',
      posted: '2 weeks ago',
      image: 'https://1.bp.blogspot.com/-4y5mLpyNq4M/YFa_9ZEo-NI/AAAAAAAAAhw/fMnZCeXTZKkamlRaUB963q3soEZSv689wCLcBGAsYHQ/s1200/internships-ts-100669679-large.jpg'
    },
    // More internship data...
  ]);

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const filteredInternships = internships.filter((internship) =>
    internship.location.toLowerCase().includes(locationFilter.toLowerCase())
  );

  // Divide filtered internships into arrays of 3
  const rows = [];
  for (let i = 0; i < filteredInternships.length; i += 3) {
    rows.push(filteredInternships.slice(i, i + 3));
  }

  return (
    <div className="internship-container">
      <div className="location-search">
        <input
          type="text"
          placeholder="Enter location..."
          value={locationFilter}
          onChange={handleLocationChange}
        />
      </div>
      <div className="internship-cards">
        {rows.map((row, index) => (
          <div className="row" key={index}>
            {row.map((internship) => (
              <div className="internship-card" key={internship.id}>
                <img src={internship.image} alt={internship.title} />
                <div className="internship-details">
                  <h3>{internship.title}</h3>
                  <p><strong>Company:</strong> {internship.company}</p>
                  <p><strong>Location:</strong> {internship.location}</p>
                  <p><strong>Start Date:</strong> {internship.startDate}</p>
                  <p><strong>Duration:</strong> {internship.duration}</p>
                  <p><strong>Stipend:</strong> {internship.stipend}</p>
                  <p>Posted {internship.posted}</p>
                  <button className="view-details-button">
                    <a href="Form">Apply now!!</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ship;
