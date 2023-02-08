import React,{useState, useEffect} from 'react'
import Form from './Form';
import './AllForm.css';
import { useNavigate } from 'react-router-dom';

const UserPass = () => {

    const navigate = useNavigate()
    const [values, setValues] = useState({
        password: "",
        confirmPassword: "",
      })

      const inputs=[

      {
        id:1,
        name:'password',
        placeholder: 'Password',
        type: 'password',
        required: true,
        errMsg:'There must be at least 8 characters. It must have a capital letter, a number, a special character and small letters',
        pattern:`^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$`
      },
      {
        id:2,
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
    
    const receivedValues =(e)=>{
      e.preventDefault()
      console.log(values)
      window.location.reload()
    }
    return (
        <div className='apps'> 
              <form onSubmit={receivedValues}>
                <h1 className='use-h1'>Sign Up</h1>
              {inputs.map((i)=>
          <Form key={i.id} {...i} handleChange={handleChange} values={values[i.name]}/>
          )}
                <div className='use-foot'>
                <button className='button' type='submit' onClick={()=> navigate('/user upload')}>
                    CREATE ACCOUNT
                </button>
                
                <p className='p'>Already have an account? <b className='b'> Log In.</b></p>
                </div>
              </form>
        </div>
      )
    }
    
    export default UserPass