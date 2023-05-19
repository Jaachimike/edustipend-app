import React, { useState } from "react";
import "../styles/trending.css";

const Trending = () => {
  const initialSongs = [
    "Davido",
    "Davido",
    "Davido",
    "Davido",
    "Davido",
    "Davido",
    "Davido",
    "Davido",
    "Davido",
  ];

  const [songs, setSongs] = useState(initialSongs);
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
    setSongs(initialSongs);
  };

  const visibleSongs = showAll ? songs : songs.slice(0, 3);

  return (
    <div className="trending">
      <h2>Trending Songs</h2>
      <ul>
        {visibleSongs.map((song, index) => (
          <li key={index} className="song-item">
            Unavailable by <span className="artist-name">{song}</span>
            <span className="plus-sign">+</span>
          </li>
        ))}
      </ul>
      {!showAll && (
        <button className="view-more-button" onClick={handleViewMore}>
          View More
        </button>
      )}
    </div>
  );
};

export default Trending;
