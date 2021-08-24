import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "../components/Header";
import Home from '../pages/Home/Home'
import Pokedex from "../pages/Pokedex/Pokedex";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pokedex">
          <Pokedex />
        </Route>
        <Route exact path="/pokemon">
          <PokemonDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
