import React from "react";
import { useState, useEffect } from "react";
import MovieBox from "../../components/Moviebox/Moviebox";
import "./EditorSay.css";

//A component- page to show my personal movie suggestions via a local JASON file i created and a Server
//I really do reccomend these movies- they are awesome
function EditorsSay() {
  // we start of with a blank page and then accept the suggestions from the server we made
  // and the use effect re-render the component to display them
  // notice that in this project it is pretty much unneccesary (the json file i mean) because we use outside server
  // but it would be unneccesary in the actual project
  useEffect(() => {
    fetch_suggestions();
    console.log(suggestions);
  }, []);

  const [suggestions, setSuggestions] = useState([]);

  const fetch_suggestions = () => {
    fetch("/Suggestions")
      .then((suggestions) => suggestions.json())
      .then((suggestions) => {
        console.log(suggestions);
        setSuggestions(suggestions);
      });
  };

  return (
    <div className="editor-say-boxes">
      <h2 className="message">Editor's suggestions are:</h2>
      <div className="grid">
        {suggestions.map((movieReq) => (
          <MovieBox key={movieReq.id} {...movieReq} />
        ))}
      </div>
    </div>
  );
}

export default EditorsSay;
