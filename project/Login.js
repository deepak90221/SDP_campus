import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('https://aits-tpt.edu.in/wp-content/uploads/2018/08/tip-for-campus-placements.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const FormContainer = styled.div`
  background-color: #fff;
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
  border: none;
  border-bottom: 2px solid #007bff;
  outline: none;
  background: transparent;
  color: #333;
  transition: border-bottom-color 0.3s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-bottom-color: #0056b3;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMsg = styled.p`
  color: #ff4d4f;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 20px;
`;

const LoginRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [reEnteredPassword, setReEnteredPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!isLogin && (!username || !reEnteredPassword)) {
      setError('Please fill in all fields.');
      return;
    }

    if (!isLogin && password !== reEnteredPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      if (isLogin) {
        // Login
        const response = await axios.post('http://localhost:8000/login', { email, password });
        console.log(response.data);
        setError('');
      } else {
        // Register
        const response = await axios.post('http://localhost:8000/register', { name: username, email, pass: password });
        console.log(response.data);
        setError('');
      }
    } catch (error) {
      setError(error.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <Container>
      <FormContainer>
        <Title>{isLogin ? 'Login' : 'Register'}</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isLogin && (
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <Input
              type="password"
              placeholder="Re-enter password"
              value={reEnteredPassword}
              onChange={(e) => setReEnteredPassword(e.target.value)}
            />
          )}
          {error && <ErrorMsg>{error}</ErrorMsg>}
          <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
        </Form>
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#333' }}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span style={{ marginLeft: '5px', color: '#007bff', cursor: 'pointer' }} onClick={toggleForm}>
            {isLogin ? 'Register here' : 'Login here'}
          </span>
        </p>
      </FormContainer>
    </Container>
  );
};

export default LoginRegister;
