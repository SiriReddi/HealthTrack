import React from "react";
import Nav from "./Nav";
import "./home.css";
import "../App.css";

function Home() {
  return (
    <div>
      <Nav />
      <iframe
        src="https://giphy.com/embed/PPYXgSZaDGK4M"
        width="680"
        height="400"
        className="gif"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Home;
