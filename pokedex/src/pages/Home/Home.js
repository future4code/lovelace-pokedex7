import React from 'react'
import Header from '../../components/Header'
import {useHistory} from 'react-router-dom'
import {goToPokedex} from '../../routes/coordinator'
import styled from 'styled-components'

const StyledHomeDiv = styled.div`
    width: 100vw;
    height: 92vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
export default function Home() {
    const history = useHistory();
    return (
        <div>
        </div>
    )
}