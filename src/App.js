import React, { useState, useRef } from "react";
// Import styles
import "./styles/app.scss";
// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
// Import Data
import data from "./data";

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
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  // Functions
  const timeUpdateHandler = (e) => {
    let current = e.target.currentTime;
    let songDuration = e.target.duration;
    // Calaculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(songDuration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    console.log(songInfo.animationPercentage);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: songDuration,
      animationPercentage: animation,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs.at((currentIndex + 1) % songs.length));
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
