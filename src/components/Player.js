import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  // Ref
  const audioRef = useRef(null); // Links audio tag
  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause(); //Play music
      setIsPlaying(!isPlaying); //Toggles the state
    } else {
      audioRef.current.play(); //Pause Music
      setIsPlaying(!isPlaying); //Toggles the state
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" name="" id="" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
