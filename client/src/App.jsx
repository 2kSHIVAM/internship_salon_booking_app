import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services_main from './pages/Services_main';
import Register from './pages/Register';
import LearnMore from './pages/LearnMore';
import Test from './pages/Test';
import Payment from './pages/Payment';
import Completion from './pages/Completion';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services_main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/booking' element={<BookingPage />} />
          <Route path='/services/learn-more' element={<LearnMore />} />
          <Route path='/faq' element={<Test />} />
          <Route path='/completion' element={<Completion />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
