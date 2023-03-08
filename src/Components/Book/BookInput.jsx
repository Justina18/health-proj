import React, { useState, useEffect } from "react";
import BookForm from "./BookForm";
import './Book.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const BookInput = () => {
  const { id, speciality } = useParams()
  const [appointmentType, setAppointmentType] = useState("");
  const user = useSelector((state) => state.commerce.users[0])
  // console.log(user)


  const [valued, setValued] = useState({
    appointmentDate: "",
    appointmentTime: "",
  });

  let originalDate = "2022-04-3";
  let parts = valued.appointmentDate.split("-");
  let newDate = parts[2] + "-" + ("0" + parts[1]).slice(-2) + "-" + parts[0];

  let { appointmentTime } = valued
  const value = {
    appointmentTime,
    appointmentType: speciality,
    appointmentDate: newDate,
  }
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
    // console.log(valued.appointmentDate)
    console.log(newDate)
    console.log(value)
    event.preventDefault();
    // console.log(valued);
    console.log(id)
    try {
      event.preventDefault();
      const response = await axios.post(`https://health360-h4ws.onrender.com/api/${user._id}/${id}/bookappointment`, valued);
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

        <button onClick={() =>
            Swal.fire({
              title: "You have successfully booked an appointment!",
              text: "Over to your dashboard",
              icon: 'success',
              confirmButtonText: "Cool",
              
            })
          } className="button" type="submit">
         Confirm Appointment
        </button>

      </form>
    </div>
  );
};

export default BookInput;
