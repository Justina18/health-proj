import React from "react";
import '../Apps.css'
import { BsChatDots } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import {MdOutlineCancel} from 'react-icons/md'

const Header = () => {
  return (
    <div className="Head">
      <div className="head-wrap">
        <h2>Chats</h2>
        <div className="chat-head-icons">
          <BsChatDots />
          <IoIosMore />
        </div>
      </div>

      <div className="chat-inp">
        <input className="input" type="search" name="" id="" />
        <MdOutlineCancel fontSize={16}/>
      </div>

    </div>
  );
};

export default Header;
