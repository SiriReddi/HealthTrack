import React from "react";
import "./home.css";

function Home() {
  return (
    <div>
      <iframe
        src="https://giphy.com/embed/PPYXgSZaDGK4M"
        width="680"
        height="400"
        className="gif"
        allowFullScreen
      ></iframe>

      {/* <img
        className="gif"
        src={require("https://media.giphy.com/media/rDIbIO2O7UStO/giphy.gif")}
        alt="gif"
      /> */}
    </div>
  );
}

export default Home;