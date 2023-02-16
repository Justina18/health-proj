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

const Home = () => {

  return (
    <div className='Home'>
        <Header/>
        <Homed/>
        {/* <About/> */}
        <Whys/>
        <Hows/>
        <How/>
        <Are/>
        <Footer/>
    </div>
  )
}

export default Home;