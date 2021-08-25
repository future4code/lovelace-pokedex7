import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
    const [pokemonName, setPokemonName] = useState('')
    const [pokemonPokedex,setPokemonPokedex] = useState([])
    const values = {
        pokemonName,
        setPokemonName,
        pokemonPokedex,
        setPokemonPokedex
    }
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}