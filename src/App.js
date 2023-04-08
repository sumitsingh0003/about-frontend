import React, { createContext, useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";  
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login';
import Registration from './components/Registration';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';

import {initialState, reducer} from "./reducer/UseReducer"

export const UserContext = createContext()   


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>

    <UserContext.Provider  value={{state, dispatch}}>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Main />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<ErrorPage />} />      
          </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>    
      
    </>
  );
}

export default App;
