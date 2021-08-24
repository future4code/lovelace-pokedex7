import React, { createContext } from 'react' 
import React, { useState } from 'react' 

export const GlobalContext = createContext() 

export const GlobalStorage = ({ children }) => {
    const [details, setDetails] = useState({}) 
    const values = { 
        details, 
        setDetails
    }

    return ( 
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}