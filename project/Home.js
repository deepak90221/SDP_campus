import React from 'react';
import styled from 'styled-components';

const Home = () => {
  const Container = styled.div`
    max-width: 100%;
    height: 100vh;
    padding: 2rem;
    background-image: url('https://news.blr.com/app/uploads/sites/6/2018/09/Recruitment-chalkboard.jpg'); /* Add your background image URL */
    background-size: cover;
    background-position: center;
    color: #fff; /* Change text color to contrast with background */
    opacity: 0.8; /* Set opacity for the background image */
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const HeroSection = styled.div`
    text-align: center;
    margin-bottom: 2rem;
  `;

  const FeaturesSection = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
  `;

  const Feature = styled.div`
    flex: 1;
    padding: 2rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7); /* Set dark background color */
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  `;

  const CtaSection = styled.div`
    text-align: center;
  `;

  const CtaButton = styled.button`
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  `;

  const LogoSlider = styled.div`
    /* Add styling for your logo slider here */
  `;

  return (
    <Container>
      <HeroSection>
        <h1>Welcome to Campus Recruitment</h1>
        <p>Empower your future with us. Find exciting opportunities, connect with top employers, and prepare for success.</p>
      </HeroSection>
      <FeaturesSection>
        <Feature>
          <h2>Find Opportunities</h2>
          <p>Explore job and internship opportunities from top companies.</p>
        </Feature>
        <Feature>
          <h2>Connect with Employers</h2>
          <a href="/Contact"><p>Connect with employers and recruiters to kickstart your career.</p></a>
        </Feature>
        <Feature>
          <h2>Prepare for Success</h2>
          <a href="/Certificate"><p>Access resources and tools to help you prepare for interviews and assessments.</p></a>
        </Feature>
      </FeaturesSection>
      <CtaSection>
        <CtaButton><a href="Login">Get Started</a></CtaButton>
      </CtaSection>
      <LogoSlider>
        {/* Render your company logo slider component here */}
      </LogoSlider>
    </Container>
  );
};

export default Home;
