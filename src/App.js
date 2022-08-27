import React, { useState, useRef } from "react";
// Import styles
import "./styles/app.scss";
// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
// Import Data
import data from "./util";

function App() {
  // Ref
  const audioRef = useRef(null); // Links audio tag
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // Functions
  const timeUpdateHandler = (e) => {
    let current = e.target.currentTime;
    let songDuration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: songDuration });
  };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
