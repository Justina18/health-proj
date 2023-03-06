import React from 'react'
import 'animate.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import './App.css'

import Upload from './Components/Form/Upload'
import LogSuccess from './Components/Form/LogSuccess'
import Choose from './Components/Choose/Choose'
import Forgot from './Components/Form/Forgot'

import UserPass from './Components/Form/UserPass'
import SignSuccess from './Components/Form/SignSuccess'
import Book from './Components/Book/Book'
import Prem from './Components/Prem/Prem'
import About from './Components/About/About'
import More from './Components/More/More'
import Appointment from './Components/Dashboard/Appointment'
import Dashboard from './Components/Dashboard/User_dashboard'
import Profile from './Components/Dashboard/Profile'
import Homed from './Components/Homed.jsx/Homed'
import UserDash from './Components/Dashboard/Doctor_dashboard'
import Notification from './Components/Dashboard/Notification'
import UserUpload from './Components/Form/UserUpload';
import UserSucess from './Components/Form/UserSucess';
import Settings from './Components/Dashboard/Settings';
import Texts from './Components/Dashboard/Texts';
import BookInfo from './Components/Book/BookInfo';
import UserPro from './Components/Dashboard/UserPro';
import Requests from './Components/Dashboard/Requests';

import User_Signup from './Components/Form/User_Signup'
import Verify from './Components/Form/Verify';
import PassRes from './Components/Form/PassRes';
import Contact from './Components/Contact/Contact';
import BookInput from './Components/Book/BookInput';
import DocVer from './Components/Form/DocVer';

import Admin_Signup from './Components/Form/Admin_Signup'
import User_LogIn from './Components/Form/User_LogIn';
import Admin_Login from './Components/Form/Admin_LogIn'
import Apps from './ChatRoom/Apps';


const App = () => {


  //   const arr=[]
  // const obj={
  //     name:"bola"
  // }
  // const ARR= [{...obj}]
  // console.log(ARR)
  // const obj2={
  //     status:"Doctor"
  // }

  // console.log([{...ARR[0],...obj2}])
  return (

    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/homed' element={<Homed />} />

          <Route path='/upload' element={<Upload />} />
          <Route path='/log in img' element={<LogSuccess />} />
          <Route path='/appointment' element={<Appointment />} />

          <Route path='/choice' element={<Choose />} />
          <Route path='/forgot' element={<Forgot />} />

          <Route path='/user password' element={<UserPass />} />
          <Route path='/sign success' element={<SignSuccess />} />
          <Route path='/user success' element={<UserSucess />} />
          <Route path='book' element={<Book />} />
          <Route path='premium' element={<Prem />} />
          <Route path='/about' element={<About />} />
          <Route path='/more info' element={<More />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='/user_dashboard' element={<Dashboard />} />
          <Route path='/doctor_dashboard' element={<UserDash />} />

          <Route path='/notifications' element={<Notification />} />
          <Route path='/user upload' element={<UserUpload />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/texts' element={<Texts />} />
          <Route path='/requests' element={<Requests />} />
          <Route path='/docs details/:id' element={<BookInfo />} />
          <Route path='/User Profile' element={<UserPro />} />

          <Route path='/usersign' element={<User_Signup />} />
          <Route path='/adminsignup' element={<Admin_Signup />} />
          <Route path='/User login' element={<User_LogIn />} />
          <Route path='/admin_login' element={<Admin_Login />} />

          <Route path='/PasswordReset' element={<PassRes />} />
          <Route path='/contact us' element={<Contact />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/doc verify' element={<DocVer />} />
          <Route path='/bookInputs/:id/:speciality' element={<BookInput />} />
          <Route path='/ChatRoom' element={ <Apps/> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App