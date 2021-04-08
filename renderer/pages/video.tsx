import { NextPage } from 'next'
import Youtube, { Options } from 'react-youtube'
import styles from '../styles/video.module.css'

const Video: NextPage<any> = ({ id }) => {
  const opts: Options = {
    playerVars: {
      autoplay: 1,
      rel: 0,
      controls: 0,
      modestbranding: 1,
      disablekb: 0,
      showinfo: 0,
      fs: 0
    }
  }

  return (
    <div className="">
      <div className="">
        <Youtube 
          className={"h-screen w-screen" + " " + styles.vid}
          videoId={id}  
          opts={opts} 
        >
        </Youtube>
      </div>
    </div>
  );
}

Video.getInitialProps = async ({ query }) => {
  return { id: query.id }
}

export default Video;