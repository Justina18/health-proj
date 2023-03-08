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
              <BsCameraVideo className="body-icons" />
              <MdCall className="body-icons" />
              <hr className="chat-line" />
              <BiSearch className="body-icons" />
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
                    <p>Hi Doc...I suppose you've already read about me from my request and profile. So, let's cut straight to the chase as our time is limited.</p>
                  </div>
              </div>
              </div>

              <div className= "message">
              <div className="content">
                <div >
                  <p>Sure. So when did your migraines start?</p>
                </div>
              </div>
              </div>
              
              <div className= "messenger">
                <div className="content">
                  <div >
                    <p>Earlier this morning Doc.</p>
                  </div>
              </div>
              </div>

              <div className= "message">
              <div className="content">
                <div >
                  <p>Okay...Okay<br/> Do you still have it?</p>
                </div>
              </div>
              </div>
              
              <div className= "messenger">
                <div className="content">
                  <div >
                    <p>Yes Doc...I haven't been able to have as much as a meal cos it hurts as the sides of my head.</p>
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
          <hr className="chat-line" />
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
