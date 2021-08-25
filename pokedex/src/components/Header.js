import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 10vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;
const StyledFirstButton = styled.button`
  position: absolute;
  left: 10px;
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
    text-decoration:none;
  }
`;
const StyledSecondButton = styled.button`
  position: absolute;
  right: 10px;
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
    text-decoration:none;
  }
`;

export function HomeHeader() {
  return (
    <StyledHeader>
      <header>
      Lista de Pokémons
        <StyledFirstButton>
          <Link to={'/pokedex'}>
            Ir para Pokédex
          </Link>
        </StyledFirstButton>
      </header>
    </StyledHeader>
  )
}
export function PokedexHeader() {
  return (
    <StyledHeader>
      <header>
      Pokédex
        <StyledFirstButton>
          <Link to={'/'}>
            Voltar para a lista de Pokémons
          </Link>
        </StyledFirstButton>
      </header>
    </StyledHeader>
  )
}
export function PokemonHeader() {
  return (
    <StyledHeader>
      <header>
      Pokédex
        <StyledFirstButton>
          <Link to={'/'}>
            Voltar
          </Link>
        </StyledFirstButton>
        <StyledSecondButton>
          <Link to={'/pokedex'}>
          Ir para Pokédex
          </Link>
        </StyledSecondButton>
      </header>
    </StyledHeader>
  )
}