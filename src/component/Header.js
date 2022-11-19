import React from "react";

function Header() {
  return (
    <header>
      <div className="left-header">
        <img
          src="../images/troll-face.png"
          alt="troll"
          className="troll-face"
        />
        <h1 className="main-title">Meme Generator</h1>
      </div>
      <h2 className="side-title">React Course - Project-05</h2>
    </header>
  );
}
export default Header;
