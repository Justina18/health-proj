import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Payment.css"
import { useDispatch, useSelector } from 'react-redux'
import { addPayment } from '../../Redux/Features'

import PaymentApi from './PaymentApi'
const Payment = () => {
  const dispatch = useDispatch()
  const [amountPay, setAmountPay] = useState("")
  const [Payment, setPayment] = useState({
    // quantity: cart.length,
    studentName: "",
    phoneNumber: "",
    studentClass: "",
    studentEmail: "",
    regNumber: "",
    pay: true

  })

  const Field = [
    {
      id: 1,
      name: "studentName",
      type: "text",
      placeholder: "Student Name",
      required: true,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Payer Number",
      required: true,
    }, {
      id: 3,
      name: "regNumber",
      type: "number",
      placeholder: "Reg Number",
      required: true,
    },
    {
      id: 4,
      name: "studentEmail",
      type: "text",
      placeholder: "Email",
      required: true,
    }
  ]
  const allclass = useSelector((state) => state.Commerce.allclass)

  const setAmount = (i) => {
    const classes = i.slice(0, 3)
    console.log(classes)
    if (classes === "SS1") {
      setAmountPay(18000)
      console.log("clicked1")
    } else if (classes === "SS2") {
      setAmountPay(20000)
      console.log("clicked2")
    } else if (classes === "SS3") {
      setAmountPay(25000)
      console.log("clicked3")
    }else if (classes === "JSS1") {
      setAmountPay(12000)
      console.log("clicked3")
    }else if (classes === "JSS2") {
      setAmountPay(13000)
      console.log("clicked3")
    }else if (classes === "JSS3") {
      setAmountPay(14000)
      console.log("clicked3")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked")

    let key = `key${Math.random()}`
    window.Korapay.initialize({
      key: 'pk_test_N87ZLKAVcU2K6XicN7L1nyrQvcrvmco9tK87CaFY',
      reference: key,
      amount: amountPay,
      currency: "NGN",
      customer: {
        name: "John Doe",
        email: "john@doe.com"
      },
      onClose: function () {
        // Handle when modal is closed
      },
      onSuccess: function (data) {
        data.reference === key ? dispatch(addPayment(Payment)) : null
        console.log(data)
        // console.log(key)
      },
      onFailed: function (data) {
        // console.log(data)
      }
    });
  };
  const handleChange = (e) => {

    setPayment({ ...Payment, [e.target.name]: e.target.value });
    // console.log(e.target.value)
  }
  return (
    <div className='StudentPayment_Main'>
      <div className='StudentPayment_Main_Wrap'>
        <form className='StudentPayment_Main_Form' onSubmit={handleSubmit}>
          {Field.map((i) => (
            <label key={i.id}>
              <input
                className='Student_Payment_Input'
                placeholder={i.placeholder}
                type={i.type}
                name={i.name}
                onChange={handleChange}
              />
            </label>
          ))}
          <select className="Student_Payment_Input" onChange={(e) => {
            setAmount(e.target.value)
            setPayment({ ...Payment, studentClass: e.target.value });
            // console.log(e.target.value)
          }}>
            <option value="">Select a Class</option>
            {allclass.map((i) => (
              <option placeholder="Select Class" value={`${i.nameOfClass} ${i.classBranch}`}> Class- {i.nameOfClass} {i.classBranch}</option>
            ))
            }
          </select>
          <button className='Payment_Button' > Proceed To Payment</button>
        </form>
      </div>
    </div>
  )
}

export default Payment