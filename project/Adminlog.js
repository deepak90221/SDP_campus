import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const Th = styled.th`
  padding: 12px;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border-top: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-right: 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const AdminPortal = () => {
  const [applicants, setApplicants] = useState([]);
  const [filteredApplicants, setFilteredApplicants] = useState([]);
  const [acceptedApplicants, setAcceptedApplicants] = useState([]);
  const [rejectedApplicants, setRejectedApplicants] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);

  useEffect(() => {
    loadApplicants();
  }, []);

  const loadApplicants = async () => {
    // Simulated data fetching (replace with actual API call)
    const data = await ApplicantService.getApplicants();
    setApplicants(data);
    setFilteredApplicants(data);
    setAcceptedApplicants(data.filter(applicant => applicant.status === 'Accepted'));
    setRejectedApplicants(data.filter(applicant => applicant.status === 'Rejected'));
  };

  const updateStatus = async (id, status) => {
    // Simulated update (replace with actual update logic)
    await ApplicantService.updateStatus(id, status);
    // Update the status of the applicant in the state
    const updatedApplicants = applicants.map(applicant =>
      applicant.id === id ? { ...applicant, status: status } : applicant
    );
    setApplicants(updatedApplicants);
    // Update accepted and rejected applicants based on the new status
    setAcceptedApplicants(updatedApplicants.filter(applicant => applicant.status === 'Accepted'));
    setRejectedApplicants(updatedApplicants.filter(applicant => applicant.status === 'Rejected'));
  };

  const handleFilterChange = e => {
    const status = e.target.value;
    setStatusFilter(status);
    if (status === 'All') {
      setFilteredApplicants(applicants);
    } else {
      const filtered = applicants.filter(applicant => applicant.status === status);
      setFilteredApplicants(filtered);
    }
  };

  const handleSortChange = e => {
    setSortBy(e.target.value);
  };

  const handleSortOrderChange = e => {
    setSortOrder(e.target.value);
  };

  const handlePageChange = pageNumber => {
    setPage(pageNumber);
  };

  const sortApplicants = (a, b) => {
    const factor = sortOrder === 'asc' ? 1 : -1;
    if (a[sortBy] < b[sortBy]) {
      return -1 * factor;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1 * factor;
    }
    return 0;
  };

  const sortedApplicants = filteredApplicants.sort(sortApplicants);
  const paginatedApplicants = sortedApplicants.slice((page - 1) * perPage, page * perPage);

  return (
    <Container>
      <Header>Admin Portal</Header>
      <FilterContainer>
        <FilterLabel>
          Filter by Status:
          <Select value={statusFilter} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </Select>
        </FilterLabel>
        <div>
          <FilterLabel>
            Sort by:
            <Select value={sortBy} onChange={handleSortChange}>
              <option value="name">Name</option>
              <option value="position">Position</option>
              <option value="status">Status</option>
            </Select>
          </FilterLabel>
          <FilterLabel>
            <input
              type="radio"
              value="asc"
              checked={sortOrder === 'asc'}
              onChange={handleSortOrderChange}
            />
            Ascending
          </FilterLabel>
          <FilterLabel>
            <input
              type="radio"
              value="desc"
              checked={sortOrder === 'desc'}
              onChange={handleSortOrderChange}
            />
            Descending
          </FilterLabel>
        </div>
      </FilterContainer>
      <Table>
        <TableHead>
          <tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Position</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </TableHead>
        <tbody>
          {paginatedApplicants.map(applicant => (
            <tr key={applicant.id}>
              <Td>{applicant.id}</Td>
              <Td>{applicant.name}</Td>
              <Td>{applicant.position}</Td>
              <Td>{applicant.status}</Td>
              <Td>
                {applicant.status === 'Pending' && (
                  <>
                    <Button onClick={() => updateStatus(applicant.id, 'Accepted')}>
                      Accept
                    </Button>
                    <Button onClick={() => updateStatus(applicant.id, 'Rejected')}>
                      Reject
                    </Button>
                  </>
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
          Previous Page
        </Button>
        <Button
          disabled={page * perPage >= filteredApplicants.length}
          onClick={() => handlePageChange(page + 1)}
        >
          Next Page
        </Button>
      </div>
      <div>
        <Header>Accepted Applicants</Header>
        <Table>
          <TableHead>
            <tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Position</Th>
              <Th>Status</Th>
            </tr>
          </TableHead>
          <tbody>
            {acceptedApplicants.map(applicant => (
              <tr key={applicant.id}>
                <Td>{applicant.id}</Td>
                <Td>{applicant.name}</Td>
                <Td>{applicant.position}</Td>
                <Td>{applicant.status}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <Header>Rejected Applicants</Header>
        <Table>
          <TableHead>
            <tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Position</Th>
              <Th>Status</Th>
            </tr>
          </TableHead>
          <tbody>
            {rejectedApplicants.map(applicant => (
              <tr key={applicant.id}>
                <Td>{applicant.id}</Td>
                <Td>{applicant.name}</Td>
                <Td>{applicant.position}</Td>
                <Td>{applicant.status}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

// Mock ApplicantService for demonstration (replace with actual service)
const ApplicantService = {
  getApplicants: async () => {
    // Simulated data fetching
    return [
      { id: 1, name: 'John Doe', position: 'Software Engineer', status: 'Pending' },
      { id: 2, name: 'Jane Smith', position: 'Data Scientist', status: 'Accepted' },
      { id: 3, name: 'Alex Johnson', position: 'UI/UX Designer', status: 'Rejected' },
      { id: 4, name: 'Emily Brown', position: 'Project Manager', status: 'Pending' },
      { id: 5, name: 'Michael Clark', position: 'Frontend Developer', status: 'Accepted' },
      { id: 6, name: 'Sophia Lee', position: 'Backend Developer', status: 'Rejected' },
      { id: 7, name: 'William Taylor', position: 'Graphic Designer', status: 'Pending' },
      { id: 8, name: 'Ava Martinez', position: 'UI/UX Designer', status: 'Accepted' },
      { id: 9, name: 'Ethan Anderson', position: 'Data Analyst', status: 'Rejected' },
      { id: 10, name: 'Olivia Hernandez', position: 'Software Engineer', status: 'Pending' },
    ];
  },
  updateStatus: async (id, status) => {
    // Simulated update
    console.log(`Applicant ${id} status updated to ${status}`);
    // Here you would typically make an API call to update the status in your backend
  },
};

export default AdminPortal;
