import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import EditorsSay from "./pages/EditorSay/EditorSay";
import WatchList from "./pages/WatchList/WatchList";
import Extras from "./pages/Extras/Extras";
import About from "./pages/About/About";
import ToWatchContext from "./ToWatchContext";
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [Watchlist, setWatchlist] = useState([]);
  const [movies, setMovies] = useState([]);

  return (
    <>
      <ToWatchContext.Provider
        value={{ Watchlist, setWatchlist, movies, setMovies }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Suggestions" element={<EditorsSay />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/Extras" element={<Extras />} />
          <Route path="/About-site" element={<About />} />
        </Routes>
        <Footer />
      </ToWatchContext.Provider>
    </>
  );
}
export default App;
