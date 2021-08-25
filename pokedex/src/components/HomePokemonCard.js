import React,{useEffect,useState} from 'react'
import {GlobalContext} from '../components/GlobalStorage'
import axios from 'axios'
import CardPokemon from './CardPokemon'

export default function HomePokemonCard() {
  const [pokemon, setPokemon] = useState([])
  const global = React.useContext(GlobalContext)
  const getPokemon = async () => {
    let response;
    try{
      response = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=19")
    } catch (err) {
      response = null
      console.log(err)
    } finally {
      setPokemon(response.data.results)
    }
  }
  const removePokemon = (pokemonName) => {
    const filtraPokemon = pokemon.filter(({name}) => pokemonName !== name)
    setPokemon(filtraPokemon)
  }

  const renderizaPokemon = () => {

      return <CardPokemon array={pokemon} event01={(url) => global.setPokemonPokedex([...global.pokemonPokedex, url])} event02={(name) => global.setPokemonName(name)} path={'/pokemon'} event03={(name) => removePokemon(name)}/>

  }
  useEffect(() => {getPokemon()},[])
  useEffect(() => {renderizaPokemon()},[pokemon])
  //Pode tirar as chaves.
    return (
      <>{renderizaPokemon()}</>
    )
}