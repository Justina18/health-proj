import React from 'react'
import 'animate.css';
import {HashRouter ,Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import './App.css'
import Inputs from './Components/Form/Inputs'
import Upload from './Components/Form/Upload'
import LogSuccess from './Components/Form/LogSuccess'
import Choose from './Components/Choose/Choose'
import Forgot from './Components/Form/Forgot'
import UserInput from './Components/Form/UserInput'
import UserPass from './Components/Form/UserPass'
import SignSuccess from './Components/Form/SignSuccess'
import Book from './Components/Book/Book'
import Prem from './Components/Prem/Prem'
import About from './Components/About/About'
import More from './Components/More/More'
import Appointment from './Components/Dashboard/Appointment'
import Dashboard from './Components/Dashboard/Dashboard'
import Profile from './Components/Dashboard/Profile'
import Homed from './Components/Homed.jsx/Homed'
import UserDash from './Components/Dashboard/UserDash'
import Notification from './Components/Dashboard/Notification'
import UserUpload from './Components/Form/UserUpload';
import UserSucess from './Components/Form/UserSucess';
import Settings from './Components/Dashboard/Settings';
import Texts from './Components/Dashboard/Texts';
import BookInfo from './Components/Book/BookInfo';
import UserPro from './Components/Dashboard/UserPro';
import Requests from './Components/Dashboard/Requests';
import LogIn from './Components/Form/LogIn';
import Verify from './Components/Form/Verify';
import PassRes from './Components/Form/PassRes';
import Contact from './Components/Contact/Contact';

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
        <HashRouter>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path='/homed' element={ <Homed/>} />
          <Route path='/sign up' element={ <Inputs/> }/>
          <Route path='/upload' element={ <Upload/> }/>
          <Route path='/log in img' element={ <LogSuccess/> }/>
          <Route path='/appointment' element={ <Appointment/> }/>
          <Route path='/dashboard' element={ <Dashboard/> } />
          <Route path='/choice' element={ <Choose/> } />
          <Route path='/forgot' element={ <Forgot/> }/>
          <Route path='/user sign' element={ <UserInput/> } />
          <Route path='/user password' element={ <UserPass/> } />
          <Route path='/sign success' element={ <SignSuccess/> } />
          <Route path='/user success' element={ <UserSucess/> } />
          <Route path='book' element={ <Book/> }/>
          <Route path='premium' element={ <Prem/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/more info' element={ <More/> }/>
          <Route path='/profile' element={ <Profile/> } />
          <Route path='/user dashboard' element={ <UserDash/> } />
          <Route path='/notifications' element={ <Notification/> } />
          <Route path='/user upload' element={ <UserUpload/> }/>
          <Route path='/settings' element={ <Settings/> } />
          <Route path='/texts' element={ <Texts/> }/>
          <Route path='/requests' element={ <Requests/> } />
          <Route path='/booking info' element={ <BookInfo/> }/>
          <Route path='/User Profile' element={ <UserPro/> }/>
          <Route path='/User login' element={ <LogIn/> }/>
          <Route path='/PasswordReset' element={ <PassRes/> } />
          <Route path='/contact us' element={ <Contact/> } />
        </Routes>
 
      </HashRouter>
    </div>
  )
}

export default App