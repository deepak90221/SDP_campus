import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://news.blr.com/app/uploads/sites/6/2018/09/Recruitment-chalkboard.jpg'); /* Replace 'your-image-url.jpg' with the URL of your image */
  background-size: cover;
  background-position: center;
  opacity: 0.9;
`;

const FormContainer = styled.div`
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AdvancedForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [pdf, setPdf] = useState('');
  const [batchYear, setBatchYear] = useState('');
  const [branch, setBranch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { name, age, contact, email, pdf, batchYear, branch });
  };

  return (
    <Container>
      <FormContainer>
        <Title>Form</Title>
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

          <Label>Contact:</Label>
          <Input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Label>Upload PDF:</Label>
          <Input
            type="file"
            onChange={(e) => setPdf(e.target.files[0])}
            required
          />

          <Label>Batch Year:</Label>
          <Input
            type="number"
            value={batchYear}
            onChange={(e) => setBatchYear(e.target.value)}
            required
          />

          <Label>Branch:</Label>
          <Select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          >
            <option value="">Select Branch</option>
            <option value="CSE">Computer Science</option>
            <option value="IT">Information Technology</option>
            <option value="ECE">Electronics and Communication</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="CE">Civil Engineering</option>
          </Select>

          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AdvancedForm;
