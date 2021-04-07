import { useState, useEffect } from 'react'

const IndexPage = () => {
  const [id, setId] = useState("");
  useEffect(() => {});

  function spawnWindow() {
    global.ipcRenderer.send('spawnWindow', [id.toString()]);
  }

  return (
    <div>
      <div>Index Page</div>
      <input onChange={(e) => setId(e.target.value)}></input>
      <button onClick={() => spawnWindow()}>Click here</button>
    </div>
  );
}

export default IndexPage