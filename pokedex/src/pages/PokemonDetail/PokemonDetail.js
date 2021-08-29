import React from "react";
import axios from "axios"; 
import { Wrapper } from "../../styleds/PokemonDetailsStyles"
import { Header } from "../../components/Header";
import { GlobalContext } from "../../components/GlobalStorage";

export default function PokemonDetail() {
  const [pokemonDetails, setPokemonDetails] = React.useState([]);

  const global = React.useContext(GlobalContext);

  const getPokemonDetails = async () => {
    let response;
    try {
      response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${global.pokemonName}`
      );
    } catch (error) {
      response = null;
    } finally {
      setPokemonDetails([response.data]);
    }
  };

  const renderPokemonDetail = () => {
    const detailsMap = pokemonDetails.map(
      ({ sprites: { front_default, back_default }, moves, stats, types }) => {
        const statsPokemon = stats.map(({ base_stat, stat: { name } }) => (
          <li>
            <p>
              {name}: {base_stat}
            </p>
          </li>
        ));

        const typesPokemon = types.map(({ type: { name } }) => (
          <li>
            <p>{name}</p>
          </li>
        ));
        const moveSet = moves.slice(0, 4).map(({ move: { name } }) => (
          <li>
            <p>{name}</p>
          </li>
        ));
        return (
          <Wrapper>
            <div>
              <figure>
                <img src={front_default} />
              </figure>
              <figure>
                <img src={back_default} />
              </figure>
            </div>
            <ul>
              <li>
                <h1>Status</h1>
              </li>
              {statsPokemon}
            </ul>
            <div>
              <ul>
                <li>
                  <h2>Tipo</h2>
                </li>
                {typesPokemon}
              </ul>
              <ul>
                <li>
                  <h1>Principais Ataques</h1>
                </li>
                {moveSet}
              </ul>
            </div>
          </Wrapper>
        );
      }
    );
    return detailsMap;
  };

  React.useEffect(() => {
    getPokemonDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header
        title={""}
        firstPath={"/"}
        firstButtonName={"Voltar"}
        secondPath={"/pokedex"}
        secondButtonName={"Ir para Pokédex"}
      />
      {renderPokemonDetail()}
    </>
  );
}
