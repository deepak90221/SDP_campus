import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Companies from './components/Companies';
import StudentPortal from './components/StudentPortal';
import Exam from './components/Exam';
import Ship from './components/Ship';
import Admin from './components/Admin';
import Form from './components/Form';
import Jobform from './components/Jobform';
import AdminLogin from './components/Adminlog';
import Ai from './components/Ai';
import Exams from './components/Exams';
import Quiz from './components/Quiz';
import Register from './components/Register';
import Logout from './components/Logout';
import Contact from './components/Contact';
import Certificate from './components/Certificate';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/student" element={<StudentPortal />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/ship" element={<Ship />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Jobform" element={<Jobform />} />
          <Route path="/Adminlog" element={<AdminLogin />} />
          <Route path="/Ai" element={<Ai />} />
          <Route path="/Exams" element={<Exams />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Certificate" element={<Certificate />} />












        </Routes>
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
