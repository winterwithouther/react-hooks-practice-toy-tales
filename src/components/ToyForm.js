import React, { useState } from "react";

function ToyForm({addToy}) {

  const initial = {
    name: "",
    image: "",
    likes: 0
  }

  const [toy, setToy] = useState(initial);

  function handleForm(event) {
    const {name, value} = event.target;

    setToy({
      ...toy,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    addToy(toy)
    setToy(initial);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toy.name}
          onChange={handleForm}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toy.image}
          onChange={handleForm}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
