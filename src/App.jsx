import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/loginPage';
import ForgetPage from './components/forgetPage';
import SignUpPage from './components/signPage';

const App = () => {
  return (
    <div className={`bg-gradient-to-r from-orange-100`}>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element = {<LoginForm/>}/>
        <Route path="/forget"  element = {<ForgetPage/>}/>
        <Route path="/signup"  element = {<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App