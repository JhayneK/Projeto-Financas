import { createContext, useContext, useState } from "react";

const TabelaSelectContext = createContext();

export const useTabelaSelectContext = () => {
    return useContext(TabelaSelectContext)
}

export const TabelaSelectProvider = ({ children }) => {
    const [idRow, setIdRow] = useState();

    return(
        <TabelaSelectContext.Provider value={{ idRow, setIdRow }}>
            {children}
        </TabelaSelectContext.Provider>
    )
}
