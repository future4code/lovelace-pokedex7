import React,{useEffect,useState} from 'react'
import {GlobalContext} from '../components/GlobalStorage'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyledPokemonCardDiv = styled.div`
  border: 2px solid black;
  width: 20vw;
  height: 40vh;;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
const StyledInternPokemonCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
  padding: 10px;
  width: 15vw;
  gap:30px;
`;
const StyledPokemonCardButton = styled.button`
  a {
    text-decoration: none;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.15);
    transition-duration: 1s;
    z-index: 1;
  }
  :active {
    text-decoration:none;
  }
`;
const StyledPokemonCardName= styled.h2`
  margin: 10px 0;
`;
const StyledPokemonCardImage = styled.img`
  width: 100%;
  height: 50%;
`;

export default function HomePokemonCard() {
  const [pokemon,setPokemon] = useState([])
  const global = React.useContext(GlobalContext)
  const getPokemon = async () => {
    let response;
    try{
      response = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
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
    const mapDePokemon = pokemon.map(({name,url}) => (
      <StyledPokemonCardDiv>
      <StyledPokemonCardImage alt={''} src={'https://s3.castbox.fm/df/d1/29/fc87f74bd488f136f63374b0bf.jpg'} />
      <StyledPokemonCardName>{name}</StyledPokemonCardName>
      <StyledInternPokemonCard>
        <StyledPokemonCardButton onClick={()=> {
          removePokemon(name)
          global.setPokemonPokedex([...global.pokemonPokedex, url])
        }}>
          Adicionar na Pokédex
        </StyledPokemonCardButton>
        <StyledPokemonCardButton onClick={()=> global.setPokemonPokedex(name)}>
          <Link to={'/pokemon'}>Ver Detalhes</Link>
        </StyledPokemonCardButton>
      </StyledInternPokemonCard>
      </StyledPokemonCardDiv>
    ))
    return mapDePokemon
  }
  useEffect(() => {getPokemon()},[])
  useEffect(() => {renderizaPokemon()
    console.log(global.pokemonPokedex)},[pokemon])
  //Pode tirar a chaves.
    return (
      <>{renderizaPokemon()}</>
    )
}