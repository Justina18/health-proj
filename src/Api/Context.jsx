import { createContext } from "react";
import {useSelector} from 'react-redux'

export const Contexts = createContext();

export const ThemeProvider=({children})=>{
    const totalAmount = useSelector((state) => state.commerce.total);
    return (
        <Contexts.Provider value={{totalAmount}}>
            {children}
        </Contexts.Provider>
    )
}