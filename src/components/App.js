import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  },[])
 
  function addToy(newToy){
    setToys([...toys, newToy])
  }
  function deleteToyFromState(id){
    setToys(toys.filter(toy =>{
      return toy.id !== id
    }))
  }
  function updateLikesInState(toyObj){
    setToys(toys.map(toy =>{
      if(toy.id === toyObj.id) return toyObj
      else return toy
    }))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToyFromState={deleteToyFromState} updateLikesInState={updateLikesInState}/>
    </>
  );
}

export default App;
