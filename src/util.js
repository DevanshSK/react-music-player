export const playSong = (isPlaying, audioRef) => {
  // Check if the song is playing
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};

export const activeState = (songs, setSongs, id) => {
  // Add active state
  const newSongs = songs.map((song) => {
    if (song.id === id) {
      return {
        ...song,
        active: true,
      };
    } else {
      return {
        ...song,
        active: false,
      };
    }
  });
  setSongs(newSongs);
};
