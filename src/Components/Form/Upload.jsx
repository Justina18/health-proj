import React,{useState, useEffect} from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {CiCircleRemove} from 'react-icons/ci'
import './AllForm.css';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const [selectedImage, setSelectedImage] = useState();
    const [image, setImage] =useState(null)
    const navigate = useNavigate();

    useEffect(() => {
      console.log(image)
    },[image])
  
  return (
    <div className='upload'>
      <div className='upload-wrap'>
        <h1>Upload and Display Image</h1>
      {selectedImage && (
        <div className='image-wrap'>
       <img alt="not found"
        className='img'
        src={URL.createObjectURL(selectedImage)} />
        <br />
        <div>
        <button className='buttonss' onClick={()=>setSelectedImage(null)}><CiCircleRemove fontSize={25} color="red"/>Remove</button>
        </div>
        </div>
      )}
      <br />
      <br />
      <label className="buttons">
      <input
        type="file"
        className='file'
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      /> Choose File</label>
      <button className='custom-file-upload' onClick={()=> navigate('/comp')}>
        Go Back
      </button>
      <button className="buttons" onClick={()=> navigate('/sign success')}>
        Finish!
      </button>
    </div>
    </div>
  )
}

export default Upload;