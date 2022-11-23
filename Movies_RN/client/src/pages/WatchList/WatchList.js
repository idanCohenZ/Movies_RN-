import ToWatchContext from "../../ToWatchContext";
import React, { useContext } from "react";
import MovieDisplayOnly from "../../components/MovieDisplayOnly";
import "./WatchList.css";

//A watchlist component that saves the movies you picked and you can also remove them
function WatchList() {
  const { Watchlist } = useContext(ToWatchContext);
  return (
    <div>
      <h2 className="message"> This is your currrent watch list:</h2>
      {Watchlist !== undefined && Watchlist.length > 0 ? (
        <div className="grid">
          {Watchlist.map((movieReq) => (
            <MovieDisplayOnly key={movieReq.id} {...movieReq} />
          ))}
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
            <h3>
              You haven't added any movies yet,
              <br /> why wouldn't you go browse some right now?
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
export default WatchList;
