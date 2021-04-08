import { useState, useEffect, useRef } from 'react'

const IndexPage = () => {
  const [id, setId] = useState("");
  const inputEl = useRef(null);
  useEffect(() => {});

  function spawnWindow() {
    const i = id.substr(id.indexOf("?v=")+3);
    inputEl.current.value = "";
    global.ipcRenderer.send('spawnWindow', [i.toString()]);
  }

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <div className="input w-screen relative top-1/3 bottom-1/3">    
        <input ref={inputEl} onBlur={(e) => e.target.value = ""} onChange={(e) => setId(e.target.value)} type="text" id="input-a"/>  
        <label htmlFor="input-a" className=""> Youtube URL:</label>
        <div onClick={() => spawnWindow()} className="no-text-highlight button mx-20 text-center">button</div>
      </div>
    </div>
  );
}

export default IndexPage