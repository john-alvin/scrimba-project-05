import React from "react";

function Meme() {
  return (
    <form className="form">
      <input className="input-text" placeholder="input text here" type="text" />
      <input className="input-text" placeholder="input text here" type="text" />
      <button className="button-generator">get a new meme image</button>
    </form>
  );
}

export default Meme;
