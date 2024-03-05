import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://teresas.ac.in/wp-content/uploads/2018/04/placement-services.png');
`;

const FormContainer = styled.div`
  background-size: cover;
  background-position: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 400px;
  opacity: 0.9; /* Adjust opacity */
  background-color: rgba(0, 0, 0, 0.7); /* Darken the background color */
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #fff; /* Change text color to white */
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #fff; /* Change text color to white */
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const JobApplicationForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, age, email, phone, resume });
  };

  return (
    <Container>
      <FormContainer>
        <Title>Job Application Form</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Label>Age:</Label>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Label>Phone:</Label>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <Label>Upload Resume:</Label>
          <Input
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />

          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default JobApplicationForm;
