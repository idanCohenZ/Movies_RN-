import "../components/Moviebox/moviebox.css";
import { Modal, Button } from "react-bootstrap";
import React, { useState, useContext } from "react";
import toWatchContext from "../ToWatchContext";

//A Aiding component to show a certain movie but without the ability to add
//to watchlist or change anything

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieDisplayOnly = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { setWatchlist } = useContext(toWatchContext);
  const { Watchlist } = useContext(toWatchContext);

  function removeFromWatchlist(title) {
    setWatchlist(Watchlist.filter((name) => name.title !== title));
  }

  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <img
          className="card-img-top"
          src={API_IMG + poster_path}
          alt="poster card "
        />
        <div className="card-body">
          <button type="button" className="btn btn-dark" onClick={handleShow}>
            View More
          </button>
          <button
            type="button"
            className="remv-button"
            onClick={() => removeFromWatchlist(title)}
          >
            Remove from Watchlist
          </button>
          {/* Basically added a state to avoid the viewer from double adding a movie and to 
          inform them - their request has been granted. Replacing the button with an h3. */}

          {/* A neat little component that shows a little window at the click on "show more" button */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="card-img-top"
                style={{ width: "14rem" }}
                src={API_IMG + poster_path}
                alt="poster"
              />
              <h3>{title}</h3>
              <h4>IMDb: {vote_average}</h4>
              <h5>Release Date: {release_date}</h5>
              <br></br>
              <h6>Overview</h6>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieDisplayOnly;
