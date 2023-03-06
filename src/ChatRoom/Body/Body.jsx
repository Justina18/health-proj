import React, {useRef} from "react";
import "./Body.css";
import { BsCameraVideo } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlinePaperClip } from "react-icons/ai";
import { io } from "socket.io-client";
import { useSelector } from "react-redux"
import axios from "axios"

const Body = () => {
  const scrollRef = useRef();
  const user = useSelector((state)=> state.commerce.users[0]._id);
  console.log(user)
  const getFunction = async()=>{
    const data = await JSON.parse(
      localStorage.getItem()
    );
    const response = await axios.post(recieveMessageRoute, {
      from: data._id,
      to: currentChat._id,
    });
    setMessages(response.data);
  }
  return (
    <div className="Body">
      <div className="body-wrap">
        <div className="body-head-wrap">
          <div className="body-head">
            <div className="img-name-wrap">
              {" "}
              <img className="body-head-img" src="/chat.webp" alt="" />
              Mary Law
            </div>

            <div className="body-icon">
              <BsCameraVideo />
              <MdCall />
              <hr />
              <BiSearch />
            </div>
          </div>
        </div>

        <div className="main-body">
          <div className="message-name-wrap">
            {/* <img className="messages-head-img" src="/chat.webp" alt="" /> */}
            
              <div className= "message">
              <div className="content">
                <div >
                  <p>Hello</p>
                </div>
              </div>
              </div>
              
              <div className= "messenger">
                <div className="content">
                  <div >
                    <p>Hi</p>
                  </div>
              </div>
              </div>
          </div>
        </div>

        <div className="body-inp">
          <div className="body-icons">
            <CiFaceSmile />{" "}
          </div>
          <div className="body-icons">
            <AiOutlinePaperClip />
          </div>
          <input
            className="body-lower-inp"
            type="text"
            name=""
            id=""
            placeholder="Type a message"
          />
          <div className="body-icons">
            <MdKeyboardVoice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
