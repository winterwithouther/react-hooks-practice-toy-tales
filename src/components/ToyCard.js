import React from "react";

// I didn't feel like sending this as a prop
const url = "http://127.0.0.1:3001/toys"

function ToyCard({id, name, image, likes, removeToy, addLike}) {

  function handleDelete() {
    removeToy(id);
  }

  function handleLike() {
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
        likes: likes + 1
      })
    })
    .then(response => response.json())
    .then(toyData => {
      addLike(toyData);
    })
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
