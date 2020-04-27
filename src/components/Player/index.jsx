import React, { useState } from "react";
import "./Player.css";
import classNames from 'classnames'
export default function (props) {
  let {  song, changeSong } = props;
  console.log(song);
  let [status,setStatus] = useState(false);
  let audioRef= React.createRef()
  function HandleChangeSong(index) {
    changeSong(index);
  }
  function HandleControlAudio(e){
      if(status){
        audioRef.current.pause()
      }
      else{
        audioRef.current.play()
      }
      setStatus(!status)
        
  }
  return (
    <div className="player">
      <div>
        <div
          className={classNames({
            'banner':true,
            'spin':status
          })}
          style={{
            backgroundImage: `url(${song.banner})`
          }}
          onClick={(e)=>HandleControlAudio(e)}
        >
          <div className="blur"><i className={classNames({
            "far fa-play-circle": !status,
            "far fa-pause-circle":status
          })}></i></div>
        </div>
        <div className="title">{song.title}</div>
        <div className="control">
          <label htmlFor="prev">
            <i class="fas fa-backward"></i>
          </label>
          <button className="btn" id="prev" onClick={() => HandleChangeSong(0)}>
            Prev
          </button>
          <audio
            controls="control"
            src={song.src}
            controlsList="nodownload noremoteplayback"
            ref={audioRef}
          ></audio>
          <label htmlFor="next">
            <i class="fas fa-forward"></i>
          </label>
          <button className="btn" id="next" onClick={() => HandleChangeSong(1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
