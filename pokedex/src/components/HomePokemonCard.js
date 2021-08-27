import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyledPokemonCardDiv,
  StyledInternPokemonCard,
} from "../styleds/HomeStyled";

import { GlobalContext } from "../components/GlobalStorage";
import { Link } from "react-router-dom";

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
            <img alt={""} src={front_default} />
            <h1>{name}</h1>
            <StyledInternPokemonCard>
              <button
                onClick={() => {
                  removePokemon(name);
                  setPokemonPokedex([...pokemonPokedex, id]);
                }}
              >
                Add á pokedex
              </button>
              <button onClick={() => setPokemonName(id)}>
                <Link to={"/pokemon"}>Ver Detalhes</Link>
              </button>
            </StyledInternPokemonCard>
          </StyledPokemonCardDiv>
        ))
      : "Sem Pokemons";

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    renderizaPokemon();
  }, [pokemon]);
  return <>{renderizaPokemon()}</>;
}
