import React from "react";
import memeData from "../memeData";

function Meme() {
  let url;
  function getImage() {
    const memesArray = memeData.data.memes;
    const randomNumbers = Math.floor(Math.random() * memesArray.length);

    url = memesArray[randomNumbers].url;
  }
  return (
    <form className="form">
      <input className="input-text" placeholder="input text here" type="text" />
      <input className="input-text" placeholder="input text here" type="text" />
      <button className="button-generator" onClick={getImage}>
        get a new meme image
      </button>
    </form>
  );
}

export default Meme;
