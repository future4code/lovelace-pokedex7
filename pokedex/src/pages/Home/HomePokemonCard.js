import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledPokemonCardDiv = styled.div`
  border: 2px solid black;
  width: 20vw;
  height: 40vh;;
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
  gap:30px;
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
    text-decoration:none;
  }
`;
const StyledPokemonCardName= styled.h2`
  margin: 10px 0;
`;
const StyledPokemonCardImage = styled.img`
  width: 100%;
  height: 250px;
`;

export default function HomePokemonCard() {
    return (
      <StyledPokemonCardDiv>
      <StyledPokemonCardImage alt={'IS-3 Shiny'} src={'https://cdni.rbth.com/rbthmedia/images/2019.07/original/5d1c6da115e9f96f6c7c6c60.jpg'} />
      <StyledPokemonCardName>IS-3</StyledPokemonCardName>
      <StyledInternPokemonCard>
        <StyledPokemonCardButton>
          <Link to={'/pokedex'}>Adicionar na Pokédex</Link>
        </StyledPokemonCardButton>
        <StyledPokemonCardButton>
          <Link to={'/pokemon'}>Ver Detalhes</Link>
        </StyledPokemonCardButton>
      </StyledInternPokemonCard>
      </StyledPokemonCardDiv>
    )
}