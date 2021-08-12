import './App.css';
import { useState, useEffect } from "react"
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

function App() {
  const [id, setId] = useState('')
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      const id = socket.id;
      setId(id);
      console.log(id)
      socket.on('call', ({ msg }) => {
        setMsg(msg);
      })
    })
    const random = Math.floor(Math.random() * 100);
    socket.emit('online-dummy-customer', { d_customer_id: `C${random}` })

  }, [])
  return (
    <>
      <h1>Hello: {id ? id : null}</h1>
      <h1>{msg && msg}</h1>
    </>
  );
}

export default App;
