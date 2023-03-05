import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DocVer = () => {
    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate()
    const [state, setState] = useState(false)
  
      const handleSubmit = async () => {
          const response = await axios.post(`https://health360-h4ws.onrender.com/api/docVerify/${id}`)
          console.log(response)
          setState(true)
          setTimeout(() => {
            navigate("/User Login")
          }, 3000);
      }
      useEffect(() => {
  
        handleSubmit()
      }, [])
  
  
      const style = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
      }
    return (
      <div style={style} className='verify'>
      {!state ? <h1>Waiting.....</h1> :
        <h1>Your verification was sucessful</h1>}
    </div >
    )
  }

export default DocVer