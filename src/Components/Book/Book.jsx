import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { MdLocationPin } from "react-icons/md";
import "./Book.css";
import Time from "./Time";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { Contexts } from "../../Api/Context";

const Book = () => {
  const [value, setValue] = useState("hello from Nina");
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const FiAlignJustif = <BsSuitHeart onClick={handleToggle} fontSize={15} />;
  const FaTime = (
    <div>
      <BsSuitHeartFill color="E22727" onClick={handleToggle} fontSize={15} />
    </div>
  );

  const data = [
    { id: 1,
      img:"/shaa.png" ,
      name: 'Joseph Jonah', 
      specialty: 'anatomy',
      icon: 'MdLocationPin',
      location: 'Abuja',
      price: '$1500'
    },

    { id: 2,
      img:'/her.png',
      name: 'Isaac Samuel', 
      specialty: 'Physician',
      icon: 'MdLocationPin',
      location: 'Lagos',
      price: '$1500'
    },

    { id: 3,
      img:"/shaa.png",
      name: 'Joseph Jonah', 
      specialty: 'anatomy',
      icon: 'MdLocationPin',
      location: 'Abuja',
      price: '$1500'
    },

    { id: 4,
      img:'/her.png' ,
      name: 'Isaac Samuel', 
      specialty: 'Physician',
      icon: 'MdLocationPin',
      location: 'Port',
      price: '$1500'
    },
  ];

  return (
    <div className="book">
      <div className="head-img-wrap">
        <img
          onClick={() => navigate("/")}
          className="head-img"
          src="/Morest.png"
        />
      </div>
      <div className="book-wrap">
        <h1 className="book-header">Book an Appointment</h1>
        <div className="calendar-container">
          <Calendar
            onChange={setDate}
            value={date}
            onClickDay={() => setShowTime(true)}
          />
        </div>
           <Time showTime={showTime} date={date}/>
       
        <div className="wrappest">
          {data.map(i => (
            <div className="book-wrap-main" key={i.id}>
              <div className="book-img-wrap">
                <img className="book-img" src={i.img}/>
              </div>
              <div className="book-wrap-main-text">
                <h2 className="book-h">{i.name}</h2>
                <p>{i.specialty}</p>
              </div>
              <div>
               <MdLocationPin fontSize={18} />
              {i.location}
             </div>
             <div className="book-foot">
              <p>{i.price}</p>
             </div>
            </div>
          ))}
        </div>

        <Contexts.Provider value={{ value, setValue }}>
          <button
            onClick={() => navigate("/booking info")}
            className="book-butt"
          >
            Proceed
          </button>
        </Contexts.Provider>
      </div>
    </div>
  );
};

export default Book;
