import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { GlobalContext } from '../components/GlobalStorage';
import {
  StyledPokemonCardDiv,
  StyledInternPokemonCard,
  StyledPokemonCardButton,
} from '../styleds/PokemonCardStyles';

const HomePokemonCard = () => {
  const [pokemon, setPokemon] = React.useState([]);

  const { setPokemonName, setPokemonPokedex } = React.useContext(GlobalContext);

  const pokemonNumbers = Array.from({ length: 20 }, (_, index) => ++index);

  const getPokemon = React.useCallback(async () => {
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
  }, [pokemonNumbers]);

  const removePokemon = React.useCallback(
    (pokemonName) => {
      const filtraPokemon = pokemon.filter(({ name }) => pokemonName !== name);
      setPokemon(filtraPokemon);
    },
    [pokemon]
  );

  const renderizaPokemon = React.useCallback(
    () =>
      pokemon?.map(({ name, id, sprites: { front_default }, types }) => (
        <StyledPokemonCardDiv type={types[0].type.name} key={name}>
          <StyledInternPokemonCard>
            <figure>
              <img alt={''} src={front_default} />
            </figure>
            <h2>{name}</h2>
            <p>{types[0].type.name}</p>
            <center>
              <StyledPokemonCardButton
                type={types[0].type.name}
                onClick={() => {
                  removePokemon(name);
                  setPokemonPokedex((pokemonPokedex = []) => [
                    ...pokemonPokedex,
                    id,
                  ]);
                }}
              >
                Adicionar à Pokédex
              </StyledPokemonCardButton>
              <StyledPokemonCardButton
                type={types[0].type.name}
                onClick={() => setPokemonName(id)}
              >
                <Link to={'/pokemon'}>Detalhes</Link>
              </StyledPokemonCardButton>
            </center>
          </StyledInternPokemonCard>
        </StyledPokemonCardDiv>
      )),
    [pokemon, removePokemon, setPokemonName, setPokemonPokedex]
  );

  React.useEffect(() => {
    getPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    renderizaPokemon();
  }, [pokemon, renderizaPokemon]);

  return (
    <section
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {renderizaPokemon()}
    </section>
  );
};

export default HomePokemonCard;
