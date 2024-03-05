import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [address, setAddress] = useState('');
  const [skills, setSkills] = useState('');
  const [marks10th, setMarks10th] = useState('');
  const [marks12th, setMarks12th] = useState('');
  const [moreDetails, setMoreDetails] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted!');
    // You can send form data to server or perform any other action
  };

  return (
    <Container>
      <FormContainer>
        <Title>Student Registration</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Input
            type="text"
            placeholder="ID Number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Home Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <Input
            type="text"
            placeholder="10th Grade Marks (%)"
            value={marks10th}
            onChange={(e) => setMarks10th(e.target.value)}
          />
          <Input
            type="text"
            placeholder="12th Grade Marks (%)"
            value={marks12th}
            onChange={(e) => setMarks12th(e.target.value)}
          />
          <Input
            type="text"
            placeholder="More Details"
            value={moreDetails}
            onChange={(e) => setMoreDetails(e.target.value)}
          />
          <Button type="submit">Register</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default RegistrationForm;
