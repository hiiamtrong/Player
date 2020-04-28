import React, { useState } from 'react';
import './App.css';
import Player from './components/Player/index'
import songlist from './components/music/music'
function App() {
  let [index,setIndex] = useState(0)
  let song = songlist[index]
  document.title = `${song.title} - Player `
  function ChangeSong(index){ 
    if(index>= songlist.length ){
      setIndex(0)
    }else if( index<=0 ){
      setIndex(0)
    }else{
    setIndex(index)
    }
    
  }
  return (
    <div className="App" style={
      {
        backgroundImage : `url('./bg.jpeg')`
      }
    }>
      <Player song={song} changeSong ={ChangeSong} index={index}></Player>
    </div>
  );
}

export default App;
