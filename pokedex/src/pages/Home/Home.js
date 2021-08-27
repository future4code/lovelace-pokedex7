import React from 'react'
import {HomeHeader} from '../../components/Header'
import styled from 'styled-components'
import HomePokemonCard from '../../components/HomePokemonCard';

const StyledPokemonCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px;
    flex:1;
    justify-content: center;
    overflow-y:hidden;
`;


export default function Home() {
    return (
        <main>
        <HomeHeader/>
        <StyledPokemonCard>
            <HomePokemonCard/>
        </StyledPokemonCard>
        </main>
    )
}