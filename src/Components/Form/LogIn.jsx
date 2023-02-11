import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import './AllForm.css';
import axios from 'axios';


const LogIn = () => {

    const navigate = useNavigate()
    const [values, setValues] = useState({
      name:"",
      password:"",
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
        name:'password',
        placeholder: 'Password',
        type: 'password',
        required: true,
        errMsg:'There must be at least 8 characters. It must have a capital letter, a number, a special character and small letters',
        pattern:`^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$`
      },
      // {
      //   id:2,
      //   name:'password',
      //   placeholder: 'Confirm Password',
      //   type: 'password',
      //   required: true,
      //   errMsg:'Must match the password',
      //   pattern: values.password
      // },
    ];
    
    const handleLog = (name, password) => {
      const response = axios.post('https://health360-h4ws.onrender.com/api/userlogIn',{
        name,
        password
      })
   
    console.log(response)
   }
    const handleChange= e =>{
      setValues({...values, [e.target.name]: e.target.values});
    }
    
    const receivedValues =(e)=>{
      e.preventDefault()
      console.log(values)
      window.location.reload()
      handleLog();
    } 

  return (
    <div className='apps'>
       <form onSubmit={receivedValues}>
            <h1>Log In</h1>
            <p>*All fields are compulsory</p>
          {inputs.map((i)=>
      <Form key={i.id} {...i} handleChange={handleChange} values={values[i.name]}/>
      )}
            <div className='log-foot'>
              
            <button className='button' type='submit' onClick={()=> navigate('/log in img')}>
                Log In
            </button>
            
            <p className='p'>Don't have an account? <b onClick={()=> navigate('/sign up')} className='b'> Sign Up.</b></p>
            <p className='log-p'>Forgot password? <b onClick={()=> navigate('/forgot')} className='log-b'>Click here</b></p>
            </div>
          </form>
    </div>
  )
}

export default LogIn;