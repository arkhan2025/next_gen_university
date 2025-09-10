import React, { useRef } from 'react'
import './Video.css'
import vid from '../../assets/video.mp4'

const Video = ({playState, setPlayState}) => {

    const player= useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={vid} autoPlay muted controls/>
    </div>
  )
}


export default Video