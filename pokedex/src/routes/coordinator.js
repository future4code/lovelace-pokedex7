import React from 'react';

export const goHome = (history) => {
    history.push("/");
  };

  export const goToPokedex = (history) => {
    history.push("/pokedex");
  };

  export const goToPokemonDetails = (history) => {
    history.push("/pokemon");
  };
