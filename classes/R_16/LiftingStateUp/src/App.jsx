import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Adding from './components/Adding'
import Subtract from './components/Subtract'
import Encuesta from './components/Entregable/Encuesta'
import './App.css'

function App() {
  const [count, setCount] = useState(10);

  const [respuesta, setRespuesta] = useState("");

  return (
    <>
      <h1>Contador: {count}</h1>
      <Adding count={count} onChangeAdd={setCount} />
      <Subtract count={count} onChangeSub={setCount} />
      <Encuesta></Encuesta>
    </>
  )
}

export default App
