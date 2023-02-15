import React,{useState, useEffect, useContext} from 'react'
import Form from './Form';
import './AllForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserInput = () => {

    const [isValid, setValid] = useState(false)
    const navigate = useNavigate()
    const [values, setValues] = useState({
        name: "",
        email: "",
        mobileNo:"",
        location: "",
        password: "",
        confirmPassword: "",
      })
    
      const inputs=[
        {
        id:1,
        name:'name',
        placeholder: 'Name',
        type: 'text',
        required: true,
        errMsg:'All characters must be letters. There should be at least 3 characters ',
        pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
      },
      {
        id:2,
        name:'email',
        placeholder: 'E-mail',
        type: 'email',
        required: true,
        errMsg:'Must be a valid e-mail',
        pattern:`^\S+@\S+$`
      },
      {
        id:3,
        name:'mobileNo',
        placeholder: 'Phone Number',
        type: 'tel',
        required: true,
        errMsg:'Must be a valid phone number',
        pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}"
      },
      {
        id:4,
        name:'location',
        placeholder: 'Location',
        type: 'text',
        required: true,
        errMsg:'Must be a valid phone number',
      },
      {
        id:5,
        name:'password',
        placeholder: 'Password',
        type: 'password',
        required: true,
        errMsg:'There must be at least 8 characters. It must have a capital letter, a number, a special character and small letters',
        pattern:`^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$`
      },
      {
        id:6,
        name:'password',
        placeholder: 'Confirm Password',
        type: 'password',
        required: true,
        errMsg:'Must match the password',
        pattern: values.password
      },
    ];
    
    const handleChange= e =>{
      setValues({...values, [e.target.name]: e.target.values});
    }

    const handleSubmit = async (event) => {
      try {
        event.preventDefault();
        const response = await axios.post("https://health360-h4ws.onrender.com/api/usersignUp", values) ;
        console.log(response);
        // response.status === 201 ? 
        navigate ('/dashboard') 
      } catch (error) {
        console.log(error);
      }
    };

    const validate = () =>{
      return inputs.length;
    }

    // const receivedValues =(e)=>{
    //   console.log(values)
    //   handleSubmit();
    // }
  return (
    <div className='apps'>
          <form onSubmit={handleSubmit}>
            <h1>Create an account</h1>
          {inputs.map((i)=>
      <Form key={i.id} {...i}  handleChange={handleChange} values={values[i.name]} />
      )}
       <div className='custom-select'>
          <select>
          <option value="">Select a Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
            <label></label>
            <input className='date' type="date" id="birthday" name="birthday"></input>
            <div className='foot'>
              <div className='check'>
              <input type="checkbox" name="terms" id="terms" />
            <label className='label'>I have read and agreed to the <b className='b'> Terms and conditions</b></label>
            </div>
            <div>
            <button className='back-button' onClick={()=> navigate('/choice')}>
              Go Back
            </button>
            <button className='button' type='submit' disabled={!validate()} >
                CONTINUE 
            </button>
            </div>
            <p className='use-p'>Already have an account? <b className='b'onClick={()=> navigate('/User Login')} > Log In.</b></p>
            </div>
          </form>
    </div>
  )
}

export default UserInput;