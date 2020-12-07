import React, {useState, createContext} from "react"

export const ContextProk = createContext()

export const ContextProkProvider = props => {

    const [proker, setProk] = useState([])
    
    const [selectProk, setSelectProk] = useState(null);

    function tambahProk(proker) {
        setProk([...proker, proker]);
    }
    return (
        <ContextProk.Provider value={
        {
        proker, 
        setProk, 
        tambahProk, 
        selectProk, 
        setSelectProk}
        }>
            {props.children}
        </ContextProk.Provider>
    )
}