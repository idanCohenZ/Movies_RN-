import React, { useState, useEffect, useContext } from "react";
import toWatchContext from "../../ToWatchContext";
import "./home.css";
import MovieBox from "../../components/Moviebox/Moviebox";
import "bootstrap/dist/css/bootstrap.min.css";
import Slideshow from "../../components/SlideShow/SlideShow";

//My Home-page component- using an outer API to show you the latest, best movies

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=26f87ad40f63d2ee632c63c856315e1b";

function Home() {
  const { movies } = useContext(toWatchContext);
  const { setMovies } = useContext(toWatchContext);
  const [query, setQuery] = useState("");
  const [initialMovies, setinitialMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("found data drom site");
        setMovies(data.results);
        setinitialMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=26f87ad40f63d2ee632c63c856315e1b&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setinitialMovies(data.results);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  const updateQuery = (e) => {
    if (!(e.target.value === undefined)) {
      setQuery(e.target.value);
    }
  };

  function change(grade) {
    let copy_items;
    if (initialMovies !== undefined) {
      copy_items = initialMovies.slice();
    } else {
      copy_items = [];
    }
    console.log("showing current grade:");
    console.log(grade);
    setMovies(
      grade === "All"
        ? initialMovies
        : copy_items.filter((movie) => movie.vote_average >= grade)
    );
  }

  return (
    <>
      <div className="search">
        <button onClick={searchMovie} className="searchButton">
          <span>search now !</span>
        </button>
        <input
          onChange={updateQuery}
          className="searchbar"
          type="text"
          placeholder="Search.."
        />
      </div>
      {/* // */}
      <div className="sort">
        <div className="custom-select">
          <select className="selectIt" onChange={(e) => change(e.target.value)}>
            {/* <option value="/">"All"</option> */}
            <option value="0">Select filter:</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="All">All</option>
          </select>
        </div>
      </div>

      <Slideshow />
      <div className="bigWrap">
        {movies !== undefined && movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <div className="containGif">
            <div className="mygif">
              <iframe
                src="https://giphy.com/embed/zLCiUWVfex7ji"
                width="480"
                height="270"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h3>Oops, there were no results with your search.</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
