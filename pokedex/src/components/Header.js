import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  color: whitesmoke;
  padding: 0 2%;

  nav {
    align-items: center;
    justify-content: space-between;
    display: flex;

    h1 {
      font-size: 35px;
    }
  }
`;

const Button = styled.button`
  background: white;
  border-radius: 10px;
  padding: 10px 20px;
  border: 1px solid white;
  transition-duration: 0.5s;

  a {
    font-size: 18px;
    font-weight: 700;
    color: #919191;
  }

  &:hover {
    background: transparent;
    color: white;

    a {
      color: white;
    }

    transform: scale(1.15);
  }
`;

export const Header = ({
  firstPath,
  firstButtonName,
  secondPath,
  secondButtonName,
  title,
}) => (
  <StyledHeader>
    <nav>
      <Button>
        <Link to={firstPath}>{firstButtonName}</Link>
      </Button>
      <h1>{title}</h1>
      {secondPath && (
        <Button>
          <Link to={secondPath}>{secondButtonName}</Link>
        </Button>
      )}
    </nav>
  </StyledHeader>
);
