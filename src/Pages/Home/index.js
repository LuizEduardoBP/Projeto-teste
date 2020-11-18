import React, {useState} from "react";
import "./style.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Teste from '../../Components/Teste';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import List from '../../Components/List';

export function Home(){ 
  return(
    <>
      <Teste value="Sua Lista de Filmes"/>
      <div className="section">
      <Link to="/Lista">
        <img className="add-btn" src="https://img.icons8.com/ios/452/add--v1.png"></img>
      </Link>
      </div>
    </>
    ) 
}