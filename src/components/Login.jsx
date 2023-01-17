import React, { useState } from "react";
import Input from "./Input";

function Login() {
  customBodyStyle: {
    backgroundColor: "black";
  }

  let url = "shorturl.at/uGTV6";
  const [isMousedOver, setMousedOver] = false;
  const [isMousedOut, setMousedOut] = true;
  function handleMousedOver() {
    setMousedOver(true);
  }
  function handleMousedOut() {
    setMousedOut(false);
  }
  const customStyle = {
    color: "red"
  };
  return (
    <div className="container">
      style=
      {{
        backgroundColor: "blue",
        width: "100px",
        height: "100px"
      }}
      <form className="form">
        <Input
          style={customStyle}
          type="text"
          placeholder="Enter your Username"
        />{" "}
        <br />
        <Input
          style={customStyle}
          type="text"
          placeholder="Enter your Password"
        />{" "}
        <br />
        <button
          type="submit"
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onMouseOver={handleMousedOver}
          onMouseOut={handleMousedOut}
        >
          SignIn
        </button>{" "}
        <br />
      </form>
      <a href={url}>SignIn with Google?</a>
    </div>
  );
}
