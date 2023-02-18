import { createContext, useContext,useState, useEffect } from "react";
import {useSelector} from 'react-redux'


export const Contexts = createContext();

export const ThemeProvider = ({ children }) => {
  
    const [verify, setVerify] = useState(false)

    const login_alert = () => {
        setVerify(true)
        setTimeout(() => {
          setVerify(false)
        }, 10000);
      }
    return (
        <Contexts.Provider value={{ verify, login_alert}}>
            {children}
        </Contexts.Provider>
    )
}