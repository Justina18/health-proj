// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// import Form from './Form';
// import './AllForm.css';
// import axios from 'axios';

    
// const navigate = useNavigate()

// const [values, setValues] = useState({
//     email:"",
//     password:"",
// })

//   const inputs=[
    
//   {
//     id:1,
//     name:'email',
//     placeholder: 'E-mail',
//     type: 'email',
//     required: true,
//     errMsg:'Must be a valid e-mail',
//     pattern:`^\S+@\S+$`
//   },
//   {
//     id:2,
//     name:'password',
//     placeholder: 'Password',
//     type: 'password',
//     required: true,
//     errMsg:'There must be at least 8 characters. It must have a capital letter, a number, a special character and small letters',
//     pattern:`^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$`
//   },
// ];

// // const handleLog = (name, password) => {
// //   const response = axios.post('https://health360-h4ws.onrender.com/api/userlogIn',{
// //    values
// //   })
// // console.log(response)
// // }
// const handleChange= e =>{
//   setValues({...values, [e.target.name]: e.target.values});
// }

// const handleLogin = (e) => {
//     setLoad(true)
//     e.preventDefault();
//     axios.post('https://health360-h4ws.onrender.com/api/doctorlogin', valueData)
//         .then(function (res) {
//             console.log(res.data)
//             console.log(res.data.message)
//             res.data.data.email === values.email ? dispatch(userData(res)) : null
//             res.data.data.email === values.email ? navigate('/user dashboard') : null
//         }).catch((e) => {
//             console.log(e)
//         })
// }
// const UserLogin = () => {
//   return (
//     <div className='apps'>
//       <div className='logIn-head'>
//       <h1 className='logIn-head-h1'>Welcome Back</h1>
//       <p>Login to have access to your account</p>
//       </div>
//        <form onSubmit={handleLogin}>
//             <p className='logIn-head-p'>*All fields are compulsory</p>
//           {inputs.map((i)=>
//       <Form key={i.id} {...i} handleChange={handleChange} values={values[i.name]}/>
//       )}
//             <div className='log-foot'>
              
//             <button className='button' type='submit' onClick={()=> navigate('/log in img')}>
//                 Log In
//             </button>
            
//             <p className='p'>Don't have an account? <b onClick={()=> navigate('/sign up')} className='b'> Sign Up.</b></p>
//             <p className='log-p'>Forgot password? <b onClick={()=> navigate('/forgot')} className='log-b'>Click here</b></p>
//             </div>
//           </form>
//           </div>
//   )
// }

// export default UserLogin;