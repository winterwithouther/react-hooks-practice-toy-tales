import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, removeToy, addLike}) {
  const displayToy = toys.map(toy => {
    return <ToyCard 
    key={toy.id} 
    id={toy.id} 
    name={toy.name} 
    image={toy.image} 
    likes={toy.likes}
    removeToy={removeToy}
    addLike={addLike} 
    />
  })

  return (
    <div id="toy-collection">{displayToy}</div>
  );
}

export default ToyContainer;
