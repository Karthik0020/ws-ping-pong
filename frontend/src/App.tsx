
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState()
  const inputRef = useRef<HTMLInputElement>()

  function sendMessage(){
    if(!socket){
      return
    }
    const msg = inputRef.current.value
    //@ts-ignore
    socket.send(msg)
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")
    setSocket(ws)
    ws.onmessage = (e) => {
      alert(e.data)
    }
  }, [])

  return <div>
      <input ref={inputRef} type="text" placeholder='Message....' />
      <button onClick = {sendMessage} > Send </button>
  </div>
}

export default App
