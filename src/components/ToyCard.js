import React from "react";

function ToyCard({id, name, image, likes, deleteToyFromState, updateLikesInState}) {
  
  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method: 'DELETE'
    })
    deleteToyFromState(id)
  }
  function handleLikeClick(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        likes: likes+1
      })
    })
    .then(res => res.json())
    .then(data => updateLikesInState(data))
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
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
