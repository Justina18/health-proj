import React from 'react'
import Are from '../Are/Are';
import Footer from '../Foot/Footer';
import Header from '../Header/Header';
import How from '../How/How';
import './Home.css'
import About from '../About/About';
import Homed from '../Homed.jsx/Homed';
import Whys from '../Whys/Whys';
import Hows from '../Hows/Hows';
import Interest from '../Interest/Interest';

const Home = () => {

  return (
    <div className='Home'>
        <Header/>
        <br/>
        <br/>
        <br/>
        <Homed/>
        <br/>
        <br/>
        <br/>
        <Whys/>
        <Hows/>
        <Are/>
        <Interest/>
        <Footer/>
    </div>
  )
}

export default Home;