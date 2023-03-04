import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../REDUX/Features";
import Calendar from "react-calendar";
import BookInfo from "./BookInfo";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { useDispatch } from "react-redux";
import "./Book.css";
import Time from "./Time";
import Header from '../Header/Header'
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { Contexts } from "../../Api/Context";


const Book = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [item, setItem] = useState([]);
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
    {
      id: 1,
      img: "/shaa.png",
      name: "Joseph Jonah",
      specialty: "Anatomist",
      icon: "MdLocationPin",
      location: "Abuja",
      price: "$1500",
    },


  ];

  const getDoctors = async () => {
    console.log("clicked");
    try {
      const res = await axios.get(`https://health360-h4ws.onrender.com/api/alldoctors`);
      console.log(res.data.data);
      setItem(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div className="book">
      <Header />
      <br /><br /><br /><br /><br /><br />
      <div className="book-wrap">
        <h1 className="book-header">Choose a Doctor</h1>
        {/* <div className="calendar-container">
          <Calendar
            onChange={setDate}
            value={date}
            onClickDay={() => setShowTime(true)}
          />
        </div>
        <Time showTime={showTime} date={date} /> */}

        <div className="wrappest">
          {item.map((i) => (
            <div key={i._id} className="book-wrap-main">
              <Link to="/docs details" className="book-wrap-maine">
                <div className="book-img-wrap">
                  <img className="book-img" src={'i.img'} />
                </div>
                <div className="book-wrap-main-text">
                  <h3 className="book-h">{i.name}</h3>
                  <p>{i.speciality}</p>
                </div>
                <div>
                  <MdLocationPin fontSize={18} />
                  {i.location}
                </div>
                <div className="book-foot">
                  <p>{i.price}</p>
                </div>
              </Link>
              <button
                 onClick={() => navigate('/bookInputs')}
                className="book-foot-butt"
              >Book Doctor</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
