import React from 'react';
import { PokedexHeader } from '../../components/Header';
import { GlobalContext } from '../../components/GlobalStorage';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import CardPokemon from '../../components/CardPokemon';

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

export default function Pokedex() {
  const [pokedex, setPokedex] = React.useState([]);

  const { pokemonPokedex, setPokemonPokedex, setPokemonName } =
    React.useContext(GlobalContext);

  const addPokemonToPokedex = async () => {
    const pokedexPromises = pokemonPokedex.map(async (pokemonId) => {
      let response;
      try {
        response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        );
      } catch (err) {
        console.log(err);
      } finally {
        return response.data;
      }
    });
    const finalPokedex = await Promise.all(pokedexPromises);
    setPokedex(finalPokedex);
  };

  const romovePokemonPokedex = (pokedexId) => {
    const filterPokemon = pokedex.filter(({ id }) => id !== pokedexId);
    setPokedex(filterPokemon);
  };

  const showPokemon = () => {
    const map = pokedex.length
      ? pokedex.map(({ name, id, sprites: { front_default } }) => {
          return (
            <StyledPokemonCardDiv key={name}>
              <StyledPokemonCardImage alt={''} src={front_default} />
              <StyledPokemonCardName>{name}</StyledPokemonCardName>
              <StyledInternPokemonCard>
                <StyledPokemonCardButton
                  onClick={() => romovePokemonPokedex(id)}
                >
                  remover da pokedex
                </StyledPokemonCardButton>
                <StyledPokemonCardButton onClick={() => setPokemonName(id)}>
                  <Link to={'/pokemon'}>Ver Detalhes</Link>
                </StyledPokemonCardButton>
              </StyledInternPokemonCard>
            </StyledPokemonCardDiv>
          );
        })
      : 'Sem pokemons';

    return map;
  };

  React.useEffect(() => {
    addPokemonToPokedex();
  }, [setPokemonPokedex()]);

  return (
    <div>
      <PokedexHeader />
      {showPokemon()}
    </div>
  );
}
