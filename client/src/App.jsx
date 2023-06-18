/* eslint-disable import/first */
import './App.css';
import React from 'react';
// import { Route,Routes } from 'react-router-dom';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom' 
import BookingPage from './pages/BookingPage';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import Services_main from './pages/Services_main';
import Register from './pages/Register';
import LearnMore from './pages/LearnMore';
import Test from './pages/Test'
import Payment from './pages/Payment';
import Completion from './pages/Completion';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/services",
    element:<Services_main/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/booking",
    element:<BookingPage/>
  },
  {
    path:"/services/learn-more",
    element:<LearnMore/>
  },
  // {
  //   path:"/test",
  //   element:<Payment/>
  // },
  {
    path:"/completion",
    element:<Completion/>
  },
  
])
function App() {
  return (
    <div className='App'>
      <Navbar/>
      {/* <Home/> */}
      <RouterProvider router={router}/>
      <Footer/>
      {/* <Modal/> */}
    </div>
      
  );
}
import { Form } from 'react-router-dom';

export default App;
