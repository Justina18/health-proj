import React, { useState } from "react";
import BookForm from "./BookForm";
import './Book.css'

const BookInput = () => {
  const [appointmentType, setAppointmentType] = useState("");
  const [valued, setValued] = useState({
    date: "",
    time: "",
  });

  const { date, time } = valued;
  const valuedData = { date, time,appointmentType };

  const inputs = [
    {
      id: 1,
      name: "appointmentDate",
      type: "date",
      required: true,
     },

    {
      id: 1,
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
    console.log(valuedData);
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://health360-h4ws.onrender.com/api/id/bookappointment" , valuedData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="BookInp">
    <form onSubmit={handleSubmit} className="BookInpForm">
      <h1>Talk to us</h1>
      <p>Select a date, time and the specialty of the doctor you require</p>
      {inputs.map((i) => (
        <BookForm
          key={i.id}
          {...i}
          handleChange={handleChange}
          value={valued[i.name]}
        />
      ))}
      <div className="custom-select">
        <select onChange={(e) => setAppointmentType(e.target.value)}>
          <option value="">Specialty</option>
          <option value="Allergy and immunology">Allergy and immunology</option>
          <option value="Anesthesiology">Anesthesiology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Diagnostic radiology">Diagnostic radiology</option>
          <option value="Emergency medicine">Emergency medicine</option>
          <option value="Family medicine">Family medicine</option>
          <option value="Internal medicine">Internal medicine</option>
          <option value="Medical genetics">Medical genetics</option>
          <option value="Neurology">Neurology</option>
          <option value="Nuclear medicine">Nuclear medicine</option>
          <option value="Obstetrics and gynecology">
            Obstetrics and gynecology
          </option>
          <option value="Ophthalmology">Ophthalmology</option>
          <option value="Pathology">Pathology</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Physical medicine and rehabilitation">
            Physical medicine and rehabilitation
          </option>
          <option value="Preventive medicine">Preventive medicine</option>
          <option value="Psychiatry">Psychiatry</option>
          <option value="Radiation oncology">Radiation oncology</option>
          <option value="Surgery">Surgery</option>
          <option value="Urology">Urology</option>
        </select>
      </div>
      <button className="button" type="submit">
              Proceed to payments
            </button>
      </form>
    </div>
  );
};

export default BookInput;
