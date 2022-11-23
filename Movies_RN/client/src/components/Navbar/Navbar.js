import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./navbar.css";
import ToWatchContext from "../../ToWatchContext";

function Navbar() {
  const { setMovies } = useContext(ToWatchContext);
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=26f87ad40f63d2ee632c63c856315e1b";
  function fetchPopularMovies() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("found data drom site");
        setMovies(data.results);
      });
  }

  return (
    <nav className="nav">
      <Link to="/" className="site-title" onClick={fetchPopularMovies}>
        Movies Right Now
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsV3agfaUv35ldluXX7OckvkISNCqS99-izA&usqp=CAU"
          alt="logo"
          style={{ height: "30px", width: "30px", marginLeft: "20px" }}
        ></img>
      </Link>
      <div>
        <div className="navLinks">
          <ul className="ulLinks">
            <li>
              <Link to="/About-site">About </Link>
            </li>
            <li>
              <Link to="/Suggestions">Editor's suggestions</Link>
            </li>
            <li>
              <Link to="/watchlist">Your Watchlist</Link>
            </li>
            <li>
              <Link to="/Extras">Extras</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
