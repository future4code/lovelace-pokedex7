import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyledPokemonCardDiv,
  StyledInternPokemonCard,
  StyledPokemonCardButton
} from "../styleds/PokemonCardStyles";

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
      ? pokemon.map(({ name, id, sprites: { front_default }, types}) => (
          <StyledPokemonCardDiv type={types[0].type.name} key={name}>
            <StyledInternPokemonCard>
              <figure>
                <img alt={""} src={front_default} />
              </figure>
              <h2>{name}</h2>
              <p>{types[0].type.name}</p>
              <center>
                <StyledPokemonCardButton type={types[0].type.name}
                  onClick={() => {
                    removePokemon(name);
                    setPokemonPokedex([...pokemonPokedex, id]);
                    console.log(types[0].type.name)
                  }}
                >
                  Adicionar à Pokédex
                </StyledPokemonCardButton>
                <StyledPokemonCardButton type={types[0].type.name} onClick={() => setPokemonName(id)}>
                  <Link to={"/pokemon"}>Detalhes</Link>
                </StyledPokemonCardButton>
              </center>
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
  return <section style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>{renderizaPokemon()}</section>;
}
