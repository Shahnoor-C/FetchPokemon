import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  
  const [allPokemon,setAllPokemon] = useState([])
  
  const getPokemon = ()=>{
    console.log("clicked!")
    // fetch("https://pokeapi.co/api/v2/pokemon")
    //       .then(response => {
    //         return response.json();
    //     }).then(response => {
    //         console.log(response);
    //     }).catch(err=>{
    //         console.log(err);
     
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807")
    .then(response =>{
      console.log("*********")
      console.log(response)
      console.log("*********")
      return response.json();
    })
    .then(response =>{
      console.log("!!!!!!!!!!!!!!!!")
      console.log(response)
      console.log("!!!!!!!!!!!!!!!!")
      setAllPokemon(response.results)
    })
    .catch(error =>{
    
      console.log(error)

     
    })

  }



  return (
    <div className="App">
      <button onClick = {getPokemon}>Fetch Pokemon!</button>
      {allPokemon.map((pokemon,idx)=>{
        return <h1>{idx}: {pokemon.name}</h1>
      })}
     
   
    </div>
  );
}

export default App;
