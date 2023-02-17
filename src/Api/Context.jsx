import { createContext, useContext, useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import {  } from "react";


export const Contexts = createContext();

export const ThemeProvider=({children})=>{
    const [verify, setVerify] = useState(false)

    const login_alert = () => {
        setVerify(true)
        setTimeout(() => {
          setVerify(false)
        }, 10000);
      }
    // const totalAmount = useSelector((state) => state.commerce.total);
    return (
        <Contexts.Provider value={{totalAmount, verify, login_alert}}>
            {children}
        </Contexts.Provider>
    )
}