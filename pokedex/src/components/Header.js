import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { goToPokedex } from "../routes/coordinator";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 8vh;
  background: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;
const StyledFirstButton = styled.button`
  position: absolute;
  left: 10px;
  :hover {
    cursor: pointer;
    transform: scale(1.15);
    transition-duration: 1s;
    z-index: 1;
  }
`;
const StyledSecondButton = styled.button`
  position: absolute;
  right: 10px;
  :hover {
    cursor: pointer;
    transform: scale(1.15);
    transition-duration: 1s;
    z-index: 1;
  }
`;

export default function Header() {
  const [pathName, setPathName] = useState("/");
  const [atualizador, setAtualizador] = useState(0);
  //Gambiarra para forçar atualização!!!
  const infosHeader = () => {
    if (pathName === "/") return {
        title:"Lista de Pokémons",
        button:'Ir para Pokédex',
        //Se o nome do valor for igual ao nome da propriedade, ele automaticamente seta a propriedade, seguindo sua definicição preliminar.
    };
    if (pathName === "/pokedex") return {
        title:"Pokédex",
        button:'Voltar para Lista de Pokémon',
    };
    if (pathName === "/pokemon") return {
        title:"Só Gambiarra",
        button:'Ir para Pokédex',
    };;
  };
  const {title, button} = infosHeader()

  useEffect(() => {
    setPathName(window.location.pathname);
    console.log(pathName);
  }, [atualizador]);

  return (
    <HeaderContainer>
      {pathName === "/pokemon" && (
        <StyledFirstButton>
            <Link
              onClick={() => {
                setAtualizador(atualizador + 1);
              }}
              to={"/"}
            >
              Voltar
            </Link>
        </StyledFirstButton>
      )}
      <h1>{title}</h1>
      <StyledSecondButton>
        <Link
          onClick={() => {
            setAtualizador(atualizador + 1);
          }}
          to={pathName === '/pokedex'? '/pokedex' : '/'}
        >
          {button}
        </Link>
      </StyledSecondButton>
    </HeaderContainer>
  );
}
