import React, { useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://www.gsjobpoint.com/wp-content/uploads/2020/08/wallpaper.jpg');
  background-size: cover;
`;

const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 400px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  color: #333;
  transition: background-color 0.3s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
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

const Greeting = styled.p`
  margin-top: 20px;
  font-size: 20px;
`;

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can implement your authentication logic
    // For simplicity, let's assume admin credentials are hardcoded
    const adminCredentials = { email: 'hr@company.com', password: 'admin123' };

    if (email !== adminCredentials.email || password !== adminCredentials.password) {
      setError('Invalid email or password.');
      return;
    }

    // If authentication succeeds, clear error and set isLoggedIn to true
    setError('');
    setIsLoggedIn(true);
  };

  return (
    <Container>
      <FormContainer>
        <Title>HR Admin Login</Title>
        {!isLoggedIn ? (
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <>{error}</>}
            <Button type="submit">
            <a href="Adminlog" >Login</a>
            </Button>
          </Form>
        ) : (
          <Greeting>Hello, HR</Greeting>
        )}
      </FormContainer>
    </Container>
  );
};

export default AdminLogin;
