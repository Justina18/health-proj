import React,{useState, useEffect} from 'react'
import Form from './Form';
import './AllForm.css';
import { useNavigate } from 'react-router-dom';

const Inputs = () => {

    const [isValid, setValid] = useState(false)
    const navigate = useNavigate()
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone:"",
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
        name:'phone',
        placeholder: 'Phone Number',
        type: 'tel',
        required: true,
        errMsg:'Must be a valid phone number',
        pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}"
      },
 
    ];

    const handleSubmit = async (event) => {
      try {
        event.preventDefault();
      console.log("Created")
        const response = await axios.post("https://health360-h4ws.onrender.com/", {firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, location: location, email: email, password:  password});
        console.log(response);
      } catch (error) {
    
      }
    };
    
    useEffect(()=>{
    }, [values])
    const handleChange= e =>{
      setValues({...values, [e.target.name]: e.target.values});
    }
     
    const validate = () =>{
      return inputs.length;
    }

    const receivedValues =(e)=>{
      e.preventDefault()
      console.log(values)
      window.location.reload()
    }
  return (
    <div className='apps'>
          <form onSubmit={receivedValues}>
            <h1>Create an account</h1>
          {inputs.map((i)=>
      <Form key={i.id} {...i} handleChange={handleChange} values={values[i.name]} />
      )}
       <div className='custom-select'>
          <select>
          <option value="" selected disabled hidden>Select a Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <form  action="/action_page.php">
            <label for="birthday"></label>
            <input className='date' type="date" id="birthday" name="birthday"/>
          </form>
            <div className='foot'>
              <div className='check'>
              <input  className='check-box' type="checkbox" name="terms" id="terms" />
            <label className='label' for="terms">I have read and agreed to the <b className='b'> Terms and conditions</b></label>
            </div>
            <div>
            <button className='back-button' onClick={()=> navigate('/choice')}>
              Go Back
            </button>
            <button className='button' type='submit'
            onClick={handleSubmit}
            //  onClick={()=> navigate('/comp')}
             disabled={!validate()} >
                CONTINUE
            </button>
            </div>
            <p className='p'>Already have an account? <b className='b'onClick={()=> navigate('/log in')} > Log In.</b></p>
            </div>
          </form>
    </div>
  )
}

export default Inputs