import React from "react";
import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      //1
      name: "Everyday",
      artist: "Aves",
      cover: "https://i.scdn.co/image/ab67616d0000b273c7ca2ada3536de8f9d570732",
      id: uuidv4(),
      active: true,
      color: ["#b6915a", "#fcdf67"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41890",
    },
    {
      //2
      name: "A Reminder",
      artist: "Sleepy Fish, coa",
      cover: "https://i.scdn.co/image/ab67616d0000b27326b04e87d8297b1b507c2cd8",
      id: uuidv4(),
      active: false,
      color: ["#f67f00", "#febe36"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
    },
    {
      //3
      name: "Making a Way",
      artist: "The BREED",
      cover: "https://i.scdn.co/image/ab67616d0000b27368b3919dab921f1452202bb0",
      id: uuidv4(),
      active: false,
      color: ["#f3684a", "#ffd245"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41956",
    },
    {
      //4
      name: "Passing Storm",
      artist: "Moderator",
      cover: "https://i.scdn.co/image/ab67616d0000b2732ba2b7bbc1537c41ca67543d",
      id: uuidv4(),
      active: false,
      color: ["#1f322c", "#bc9355"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=42056",
    },
    {
      //5
      name: "In Minutes",
      artist: "Shrimpnose",
      cover: "https://i.scdn.co/image/ab67616d0000b27382649b5b0d2af7f4e506d3a6",
      id: uuidv4(),
      active: false,
      color: ["#e4b1b6", "#6a85b4"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41689",
    },
    {
      //6
      name: "Night Owl",
      artist: "brillion.",
      cover: "https://i.scdn.co/image/ab67616d0000b27344c53b2c3a1457e1498ce55e",
      id: uuidv4(),
      active: false,
      color: ["#9773f7", "#47247c"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35641",
    },
    {
      //7
      name: "Blessed",
      artist: "Moods, Yasper",
      cover: "https://i.scdn.co/image/ab67616d0000b273e5852cd50201ae82191cc7ba",
      id: uuidv4(),
      active: false,
      color: ["#264d6c", "#a9847c"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32860",
    },
  ];
}

export default chillHop;
