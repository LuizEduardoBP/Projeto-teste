import React, {useState} from "react";

import Teste from '../../Components/Teste';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import List from '../../Components/List';


export function ListPage(){
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");


  function addItem(){
    if (name !== "" && year !== "" && genre !== ""){
        setItems([...items, {name: name, year: year, genre: genre}]);
    setName("");
    setYear("");
    setGenre("");
    
    }
  }

  function removeList(){
    setItems([])
  }
  
  function onChangeName(event){
    setName(event.target.value)
  }

  function onChangeYear(event){
    setYear(event.target.value)
  }

  function onChangeGenre(event){
    setGenre(event.target.value)
  }
  
    return (
    <>
      <Teste value="Lista de Filmes"/>
    
      <div className="section">
        <Input onChange={onChangeName} value={name} placeholder="Digite um filme"/>
        <Input onChange={onChangeYear} value={year} placeholder="Ano do filme"/>
        <Input onChange={onChangeGenre} value={genre} placeholder="Genero"/>
        <Button value="Adicionar Filme" onClick={addItem}/>
        <Button value="Limpar Lista" onClick={removeList}/>
        <div className="movies">
        <List items={items}/>
        </div>
      </div>
    </>
    ) 
}