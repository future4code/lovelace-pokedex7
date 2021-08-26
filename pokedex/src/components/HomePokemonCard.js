import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { GlobalContext } from '../components/GlobalStorage';
import { Link } from 'react-router-dom';

// import CardPokemon from './CardPokemon';

const StyledPokemonCardDiv = styled.div`
  border: 2px solid black;
  width: 20vw;
  height: 40vh;
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
  gap: 30px;
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
    text-decoration: none;
  }
`;
const StyledPokemonCardName = styled.h2`
  margin: 10px 0;
`;
const StyledPokemonCardImage = styled.img`
  width: 100%;
  height: 50%;
`;

export default function HomePokemonCard() {
  const [pokemon, setPokemon] = useState([]);

  const { setPokemonName, setPokemonPokedex, pokemonPokedex } =
    React.useContext(GlobalContext);

  const pokemonNumbers = Array.from({ length: 20 }, (_, index) => ++index);

  const getPokemon = async () => {
    const PokemonPromises = pokemonNumbers.map(async (pokemonId) => {
      let response;
      try {
        response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        );
      } catch (err) {
        response = null;
      } finally {
        return response.data;
      }
    });

    const finallyPokemons = await Promise.all(PokemonPromises);

    setPokemon(finallyPokemons);
  };

  const removePokemon = (pokemonName) => {
    const filtraPokemon = pokemon.filter(({ name }) => pokemonName !== name);
    setPokemon(filtraPokemon);
  };

  const renderizaPokemon = () =>
    pokemon.length
      ? pokemon.map(({ name, id, sprites: { front_default } }) => (
          <StyledPokemonCardDiv key={name}>
            <StyledPokemonCardImage alt={''} src={front_default} />
            <StyledPokemonCardName>{name}</StyledPokemonCardName>
            <StyledInternPokemonCard>
              <StyledPokemonCardButton
                onClick={() => {
                  removePokemon(name);
                  setPokemonPokedex([...pokemonPokedex, id]);
                }}
              >
                Add á pokedex
              </StyledPokemonCardButton>
              <StyledPokemonCardButton onClick={() => setPokemonName(id)}>
                <Link to={'/pokemon'}>Ver Detalhes</Link>
              </StyledPokemonCardButton>
            </StyledInternPokemonCard>
          </StyledPokemonCardDiv>
        ))
      : 'Sem Pokemons';

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    renderizaPokemon();
  }, [pokemon]);
  //Pode tirar as chaves.
  return <>{renderizaPokemon()}</>;
}
