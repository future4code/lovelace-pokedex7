import React from "react";
import { PokemonHeader } from "../../components/Header";
import { GlobalContext } from "../../components/GlobalStorage";
import axios from "axios";

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
        const detailsMap = pokemonDetails.map((detail) => {
            return (
                <div>
                    {detail.name}
                </div>
            )
        })  
        return detailsMap
    }

React.useEffect(() => {
    getPokemonDetails();
}, []);

  return (
    <>
    <PokemonHeader /> 
    {renderPokemonDetail()}
    </>
  );
}
