import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const url = "http://127.0.0.1:3001/toys"

function App() {

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setToys(data);
    })
  }, [])

  function addToy(newToy) {
    fetch(url, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(newToy)
    })
    .then(response => response.json())
    .then(toyData => {
      setToys([...toys, toyData])
    })
  }

  function removeToy(removedToyId) {
    fetch(`${url}/${removedToyId}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(nonData => {
      const newToys = toys.filter(toy => {
        return toy.id !== removedToyId;
      })

      setToys(newToys);
    })
  }

  function addLike(toyData) {
    toys[toyData.id - 1]["likes"] = toyData.likes;
    setToys([...toys])
  }

  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} removeToy={removeToy} addLike={addLike}/>
    </>
  );
}

export default App;
