import React from 'react'
import {HomeHeader} from '../../components/Header'
import styled from 'styled-components'
import HomePokemonCard from './HomePokemonCard';

export const StyledPokemonCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px;
    flex:1;
    justify-content: center;
`;

export default function Home() {
    return (
        <div>
        <HomeHeader/>
        <StyledPokemonCard>
            <HomePokemonCard/>
            <HomePokemonCard/>
            <HomePokemonCard/>
            <HomePokemonCard/>
            <HomePokemonCard/>
            <HomePokemonCard/>
            <HomePokemonCard/>
            <HomePokemonCard/>
            {/* Obviamente será feito um MAP, algo do tipo:
                {array?.map(item => {return <HomePokemonCard key={item.name}})}
            */}
        </StyledPokemonCard>
        </div>
    )
}