import { useEffect, useState } from 'react'
import Youtube, { Options } from 'react-youtube'
import styles from '../styles/video.module.css'

const Video = () => {
  useEffect(() => {});

  const opts: Options = {
    playerVars: {
      autoplay: 1,
      rel: 0,
      controls: 0,
      modestbranding: 1,
      disablekb: 1,
      fs: 0
    }
  }

  return (
    <div className="">
      <div className="absolute">
        <Youtube 
          className={"h-screen w-screen absolute" + " " + styles.vid}
          videoId={''}  
          opts={opts} 
        >
        </Youtube>
        <div className="fixed w-screen top-1/2 bg-red-600">Test</div>
      </div>
    </div>
  );
}

export default Video;