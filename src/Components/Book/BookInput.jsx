import React, { useState, useEffect } from "react";
import BookForm from "./BookForm";
import './Book.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const BookInput = () => {
  const { id, speciality } = useParams()
  const [appointmentType, setAppointmentType] = useState("");
  const user = useSelector((state) => state.commerce.users[0]?.data.data)
  // console.log(user)


  const [valued, setValued] = useState({
    appointmentDate: "",
    appointmentTime: "",
    appointmentType: speciality,
    bookDoctor: id,
  });

  const inputs = [
    {
      id: 1,
      name: "appointmentDate",
      type: "date",
      required: true,
    },

    {
      id: 2,
      name: "appointmentTime",
      type: "time",
      required: true,
    },
  ];

  const handleChange = (e) => {
    setValued({ ...valued, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(valued);
    try {
      event.preventDefault();
      const response = await axios.post(`https://health360-h4ws.onrender.com/api/${user._id}/bookappointment`, valued);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="BookInp">

      <form onSubmit={handleSubmit} className="BookInpForm">
        <h1>Talk to us</h1>
        <p>Select a date and the time you wish your appointment be.</p>
        {inputs.map((i) => (
          <BookForm
            key={i.id}
            {...i}
            handleChange={handleChange}
            value={valued[i.name]}
          />
        ))}

        <button className="button" type="submit">
          Proceed to payments
        </button>

      </form>
    </div>
  );
};

export default BookInput;
