import React,{useState} from 'react'
import Form from './Form';
import './AllForm.css';
import { useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Forgot = () => {

  const navigate = useNavigate()
  const [values, setValues] = useState({
      email: "",
    })
  
    const inputs=[
    {
      id:1,
      name:'email',
      placeholder: 'E-mail',
      type: 'email',
      required: true,
      errMsg:'Must be a valid e-mail',
      pattern:`^\S+@\S+$`
    },
  ];

     
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
            <h1>Forgot Password?</h1>
            <p>Reset your password here</p>
          {inputs.map((i)=>
      <Form key={i.id} {...i} handleChange={handleChange} values={values[i.name]}/>
      )}
            <div className='forgot-foot'>
            <button className='back-button' onClick={()=> navigate('/sign up')}>
                <AiOutlineArrowLeft/>
              Go Back
            </button>
            <button className='button' type='submit'>
                DONE
            </button>
            </div>
          </form>
    </div>
  )
}

export default Forgot;