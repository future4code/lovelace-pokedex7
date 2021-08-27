import React from "react";
import { PokedexHeader } from "../../components/Header";
import { GlobalContext } from "../../components/GlobalStorage";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  StyledPokemonCardDiv,
  StyledInternPokemonCard,
  StyledPokemonCardButton,
} from "../../styleds/PokemonCardStyles";

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

  const removePokemonPokedex = (pokedexId) => {
    const filterPokemon = pokedex.filter(({ id }) => id !== pokedexId);
    setPokedex(filterPokemon);
  };

  const showPokemon = () => {
    const map = pokedex.length
      ? pokedex.map(({ name, id, sprites: { front_default }, types }) => (
          <StyledPokemonCardDiv type={types[0].type.name} key={name}>
            <StyledInternPokemonCard>
              <figure>
                <img alt={""} src={front_default} />
              </figure>
              <h2>{name}</h2>
              <p>{types[0].type.name}</p>
              <center>
                <StyledPokemonCardButton
                  type={types[0].type.name}
                  onClick={() => removePokemonPokedex(id)}
                >
                  Remover da pokedex
                </StyledPokemonCardButton>
                <StyledPokemonCardButton
                  type={types[0].type.name}
                  onClick={() => setPokemonName(id)}
                >
                  <Link to={"/pokemon"}>Detalhes</Link>
                </StyledPokemonCardButton>
              </center>
            </StyledInternPokemonCard>
          </StyledPokemonCardDiv>
        ))
      : "Sem pokemons";
    return map;
  };

  React.useEffect(() => {
    addPokemonToPokedex();
  }, [setPokemonPokedex()]);

  return (
    <section>
      <PokedexHeader />
      <center style={{justifyContent: 'center', alignItems: 'center',display: 'flex', flexWrap:'wrap'}}>
        {showPokemon()}
      </center>
    </section>
  );
}
