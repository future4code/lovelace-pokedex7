import styled from "styled-components";

export const StyledPokemonCardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 20px 0;
  border-radius: 20px;
  background-color: ${({ type }) => {
    if (type === "water") {
      return "#DEF3FD";
    }
    if (type === "fire") {
      return "#FDDFDF";
    }
    if (type === "grass") {
      return "#DEFDE0";
    }
    if (type === "bug") {
      return "#F8D5A3";
    }
    if (type === "normal") {
      return "#F5F5F5";
    }
  }};
  transition: all 0.5s ease;
  //all aplica a trasição para todos os elementos envoltos em card.
  &:hover {
    transform: translateY(-6px);
  }
  opacity: .8;
`;
export const StyledInternPokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: #403e3e;

  center {
    column-gap: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  figure {
    background-color: white;
    border-radius: 50%;
      img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  }

  h2 {
    text-transform: capitalize;
  }

  p {
    font-weight: 500;
    font-size: 1.2rem;
  }
`;
export const StyledPokemonCardButton = styled.button`
  border: 0;
  box-shadow: 0px 0px 20px -4px #827e7e;
  border-radius: 10px;
  font-family: "Rubik", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 12.5px 5px;
  background-color: ${({ type }) => {
    const colors = {
      water: "#bfe3f5",
      fire: "#f2bdbd",
      grass: "#b9f0bc",
      bug: "#edd7b7",
      normal: "#ebebeb",
    };
    return colors[type];
  }};
    color: ${({ type }) => {
    const colors = {
      water: "#49819c",
      fire: "#632e2e",
      grass: "#2f6332",
      bug: "#634e2f",
      normal: "#919191",
    };
    return colors[type];
  }};
  //Estilo senior, o cara cria uma const colors e passa o type.
  a {
    text-decoration: none;
    color: ${({ type }) => {
    const colors = {
      water: "#49819c",
      fire: "#632e2e",
      grass: "#2f6332",
      bug: "#634e2f",
      normal: "#919191",
    };
    return colors[type];
  }};
  }
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition-duration: 0.3s;
    z-index: 1;
  }
`;
