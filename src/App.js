import React, { useState } from 'react';
import './App.css';
import Player from './components/Player/index'
import songlist from './components/music/music'
function App() {
  let [song,setSong] = useState(songlist[0])
  function ChangeSong(index){ 

    setSong(songlist[index])
  }
  return (
    <div className="App" style={
      {
        backgroundImage : `url('./bg.jpeg')`
      }
    }>
      <Player song={song} changeSong ={ChangeSong}></Player>
    </div>
  );
}

export default App;
