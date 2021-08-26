import React, { useEffect, useState } from 'react';
import { GlobalContext } from '../components/GlobalStorage';
import axios from 'axios';
import CardPokemon from './CardPokemon';

export default function HomePokemonCard() {
  const [pokemon, setPokemon] = useState([]);

  const global = React.useContext(GlobalContext);

  const pokemonNumbers = Array.from({ length: 20 }, (_, index) => ++index);

  const getPokemon = async () => {
    const PokemonPromisses = pokemonNumbers.map(async (pokemonId) => {
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

    const finallyPokemons = await Promise.all(PokemonPromisses);

    setPokemon(finallyPokemons);
  };

  const removePokemon = (pokemonName) => {
    const filtraPokemon = pokemon.filter(({ name }) => pokemonName !== name);
    setPokemon(filtraPokemon);
  };

  const renderizaPokemon = () => {
    return (
      <CardPokemon
        array={pokemon}
        event01={(id) =>
          global.setPokemonPokedex([...global.pokemonPokedex, id])
        }
        event02={(name) => global.setPokemonName(name)}
        path={'/pokemon'}
        event03={(name) => removePokemon(name)}
      />
    );
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    renderizaPokemon();
  }, [pokemon]);
  //Pode tirar as chaves.
  return <>{renderizaPokemon()}</>;
}
