import { useState } from 'react'
import './Style.css'
import Appointment from './components/appointment/Appointment.jsx'
import exampleData from './utils/data.js'

function App() {

  const [appoint, setAppoint] = useState(exampleData);

  function deleteAppoint(id){
    console.log(`id pasado ${id} - Turno borrado`)
    setAppoint(appoint.filter((i) => i.id !== id));
  }

  return (
    <>
      {
        appoint.map( (data)=> (
          
          <Appointment 
            key={data.id}
            id={data.id}
            name={data.name}
            date={data.date}
            specialty={data.specialty}

            onDelete={deleteAppoint}
          />

        ) )
      }
    </>
  )
}

export default App
