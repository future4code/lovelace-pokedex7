import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

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
const StyledPokemonCardName = styled.h2`
  margin: 10px 0;
`;
const StyledPokemonCardImage = styled.img`
  width: 100%;
  height: 50%;
`;

const CardPokemon = ({ event01, event02, event03, path, array }) => {

  const mapDePokemon = array.map(({ name, url }) => (
    array.length ? (
      <StyledPokemonCardDiv key={name}>
        <StyledPokemonCardImage alt={''} src={""} />
        <StyledPokemonCardName>{name}</StyledPokemonCardName>
        <StyledInternPokemonCard>
          <StyledPokemonCardButton onClick={() => {
            event01(url) && event01(url)
            event03(name) && event03(name)
          }}>
            Adicionar na Pokédex
          </StyledPokemonCardButton>
          <StyledPokemonCardButton onClick={event02(name)}>
            <Link to={path}>Ver Detalhes</Link>
          </StyledPokemonCardButton>
        </StyledInternPokemonCard>
      </StyledPokemonCardDiv>
    ) : "Sem pokemon"
  ))

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {mapDePokemon}
    </div>
  )
}

export default CardPokemon


