import React from 'react';
import { Header } from '../../components/Header';
import styled from 'styled-components';
import HomePokemonCard from '../../components/HomePokemonCard';

const StyledPokemonCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
  flex: 1;
  justify-content: center;
  overflow-y: hidden;
`;

export default function Home() {
  return (
    <main>
      <Header
        title={'Lista de Pokémons'}
        firstPath={'/pokedex'}
        firstButtonName={'Ir para Pokédex'}
      />
      <StyledPokemonCard>
        <HomePokemonCard />
      </StyledPokemonCard>
    </main>
  );
}
