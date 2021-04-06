import { useEffect } from 'react'

const IndexPage = () => {
  useEffect(() => {});

  function spawnWindow() {
    global.ipcRenderer.send('spawnWindow', ['https://github.com']);
  }

  return (
    <div>
      <div>Index Page</div>
      <button onClick={() => spawnWindow()}>Click here</button>
    </div>
  );
}

export default IndexPage