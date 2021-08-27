import React, {useState,useEffect} from 'react'
import Router from './routes/Router'
import styled, {createGlobalStyle} from 'styled-components'
import { GlobalStorage } from './components/GlobalStorage'

const GlobalStyle = createGlobalStyle`
  html, body {
  font-family: 'Rubik', sans-serif;
  margin:0;
  padding:0;
  box-sizing: border-box;
  overflow-x: hidden;
  }
  body {
    background: #EFEFBB;
    background: linear-gradient(to right, rgb(197, 230, 236), rgb(239, 187, 230));
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    margin: 0 auto;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }
  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }
`
export default function App() {
  return(
    <GlobalStorage>
      <GlobalStyle/>
      <Router/>
    </GlobalStorage>
  )
}