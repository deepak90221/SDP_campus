import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StudentPortalContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const JobListings = styled.div`
    width: 45%;
`;

const JobItem = styled.li`
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
`;

const JobDetails = styled.div`
    flex: 1;
`;

const AppliedJobs = styled.div`
    width: 45%;
`;

const AppliedJobItem = styled.li`
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
`;

const AppliedJobDetails = styled.div``;

const ViewStatusButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
`;

const StudentPortal = () => {
    const [jobs, setJobs] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        axios.get('/api/jobs')
            .then(response => {
                setJobs(response.data);
                setFilteredJobs(response.data);
            })
            .catch(error => {
                console.error('Error fetching jobs:', error);
            });

        axios.get('/api/student/appliedJobs')
            .then(response => {
                setAppliedJobs(response.data);
            })
            .catch(error => {
                console.error('Error fetching applied jobs:', error);
            });
    }, []);

    useEffect(() => {
        const filtered = jobs.filter(job => {
            return job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.company.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredJobs(filtered);
    }, [searchTerm, jobs]);

    const viewApplicationStatus = (jobId) => {
        axios.get(`/api/jobs/${jobId}/application`)
            .then(response => {
                alert(`Your application status for Job ID ${jobId}: ${response.data.status}`);
            })
            .catch(error => {
                console.error('Error fetching application status:', error);
            });
    };

    return (
        <StudentPortalContainer>
            <JobListings>
                <h2>Job Listings</h2>
                <input
                    type="text"
                    placeholder="Search jobs"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ul>
                    {filteredJobs.map(job => (
                        <JobItem key={job.id}>
                            <JobDetails>
                                <div>{job.title}</div>
                                <div>{job.company}</div>
                            </JobDetails>
                            <ViewStatusButton onClick={() => viewApplicationStatus(job.id)}>View Application Status</ViewStatusButton>
                        </JobItem>
                    ))}
                </ul>
            </JobListings>
            <AppliedJobs>
                <h2>Applied Jobs</h2>
                <ul>
                    {appliedJobs.map(appliedJob => (
                        <AppliedJobItem key={appliedJob.id}>
                            <AppliedJobDetails>
                                <div>{appliedJob.title}</div>
                                <div>{appliedJob.company}</div>
                                <div>Status: {appliedJob.status}</div>
                            </AppliedJobDetails>
                        </AppliedJobItem>
                    ))}
                </ul>
            </AppliedJobs>
        </StudentPortalContainer>
    );
};

export default StudentPortal;
