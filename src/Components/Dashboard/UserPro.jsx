import React, { useEffect, useState } from "react";
import "./User.css";
import { CiFolderOn } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import axios from "axios";
const UserPro = () => {
  const [doc, setDoc] = useState()
  const user = useSelector((state) => state.commerce.users[0]?.data.data)



  const getDoc = async () => {
    try {
      const res = await axios.get(`https://health360-h4ws.onrender.com/api/doctor/${user._id}`)
      console.log(res.data.data)
      setDoc(res.data.data)
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    getDoc()
    // console.log(user)
  }, [])






  return (
    <div className="UserPro">
      <div className="UserPro-wrap">
        <div className="UserPro-wrap-upper">
          <div className="UserPro-img-wrap">
            <img className="UserPro-img" src="/profiled.png" />
          </div>
          <div className="UserPro-txt-wrap">
            <h2>{doc?.name}</h2>
            <button className="UserPro-doc-butt">
              {" "}
              <CiFolderOn fontSize={25} /> Documents{" "}
            </button>
            <div className="UserPro-icon-wrap">
              {" "}
              <MdLocationOn fontSize={20} color="#006edc" />
            {doc?.location}
            </div>
          </div>
        </div>
        <div className="UserPro-wrap-lower-icon">
          <h3>About </h3> <BsQuestionCircle />
        </div>
        <div className="UserPro-wrap-lower">
          <div className="UserPro-wrap-lower-text-upper">
            <div className="UserPro-wrap-lower-text">
              <h4>Name:</h4>
              <p>{doc?.name}</p>
            </div>

            <div className="UserPro-wrap-lower-text">
              <h4>Email: </h4>
              <p>{doc?.email}</p>
            </div>

            <div className="UserPro-wrap-lower-text">
              <h4>Phone:</h4>
              <p>{doc?.mobileNo}</p>
            </div>
          </div>

          <div className="UserPro-wrap-lower-text-lower">
            <div className="UserPro-wrap-lower-text">
              <h4>Gender:</h4>
              <p>{doc?.gender}</p>
            </div>

            <div className="UserPro-wrap-lower-text">
              <h4>Birthday:</h4>
              <p>{doc?.birthDate}</p>
            </div>

            <div className="UserPro-wrap-lower-text">
              <h4>More Info:</h4>
              <p className="info-inp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default UserPro;
