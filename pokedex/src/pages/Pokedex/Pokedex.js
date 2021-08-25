import React from 'react'
import { PokedexHeader } from '../../components/Header'
import { GlobalContext } from '../../components/GlobalStorage'
import axios from 'axios'
import CardPokemon from '../../components/CardPokemon'

export default function Pokedex() {
    const [pokedex, setPokedex] = React.useState([])
    const global = React.useContext(GlobalContext)

    const addPokemonToPokedex = () => {

        global.pokemonPokedex.length && global.pokemonPokedex.forEach(async (url) => {
            let response
            try {
                response = await axios.get(url)
            } catch (err) {
                console.log(err)
            } finally {
                setPokedex([...pokedex, response.data])
            }
            console.log(pokedex)
        })
    }

    const showPokemon = () => <CardPokemon array={pokedex} event01={()=>{}} event02={()=>{}} event03={()=>{}}/>

    React.useEffect(() => {
        addPokemonToPokedex()
    }, [global.setPokemonPokedex()])

    return (
        <div>
            <PokedexHeader />
            {showPokemon()}
        </div>
    )
}