import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToyFromState, updateLikesInState}) {
  const renderToys = toys.map(toy =>{
    return <ToyCard key={toy.id} id={toy.id} deleteToyFromState={deleteToyFromState} updateLikesInState={updateLikesInState} name={toy.name} image={toy.image} likes={toy.likes}/>
  })
  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
