import React from 'react';
import Router from './routes/Router';
import { createGlobalStyle } from 'styled-components';
import { GlobalStorage } from './components/GlobalStorage';

const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    padding:0;
    margin:0;
  } 

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  body {
    background: #EFEFBB;
    background: linear-gradient(to right, rgb(197, 230, 236), rgb(239, 187, 230));
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
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
`;
export default function App() {
  return (
    <GlobalStorage>
      <GlobalStyle />
      <Router />
    </GlobalStorage>
  );
}
