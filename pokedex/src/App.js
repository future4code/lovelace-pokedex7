import React, {useState,useEffect} from 'react'
import Router from './routes/Router'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
  margin:0;
  padding:0;
  box-sizing: border-box;
  overflow-x: hidden;
  }
`
export default function App() {
  return(
    <div>
      <GlobalStyle/>
      <Router/>
    </div>
  )
}