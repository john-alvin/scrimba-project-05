import React from "react";
import memeData from "../memeData";

function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  let url;
  function getImage() {
    const memesArray = memeData.data.memes;
    const randomNumbers = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumbers].url);
  }
  return (
    <main>
      <div className="form">
        <input
          className="input-text"
          placeholder="input text here"
          type="text"
        />
        <input
          className="input-text"
          placeholder="input text here"
          type="text"
        />
        <button className="button-generator" onClick={getImage}>
          get a new meme image
        </button>
      </div>
      <div className="image-meme">
        <img src={memeImage} className="image-main" />
      </div>
    </main>
  );
}

export default Meme;
