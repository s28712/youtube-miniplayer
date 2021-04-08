import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Youtube, { Options } from 'react-youtube'
import styles from '../styles/video.module.css'

const Video: NextPage<any> = () => {
  const [id, setId] = useState('');
  
  useEffect(() => {
    const st: string = global.ipcRenderer.sendSync('send-id');
    setId(st);
  }, []);

  const opts: Options = {
    playerVars: {
      autoplay: 0,
      rel: 0,
      controls: 0,
      modestbranding: 1,
      disablekb: 0,
      showinfo: 0,
      fs: 0
    }
  }

  function close() {
    return (
      <div className="fixed bottom-3 left-4" onClick={() => window.close()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-20 md:h-24 z-10" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    );
  }

  if(id !== '') {
    return (
      <div className="relative">
        <div className="absolute">
          <Youtube 
            className={"h-screen w-screen" + " " + styles.vid}
            videoId={id}  
            opts={opts} 
          />
        </div>
        <div className="absolute z-10">
          { close() }
        </div>
      </div>
    );
  }

  else {
    return (
      <div>
        Loading
      </div>
    )
  }
}

export default Video;