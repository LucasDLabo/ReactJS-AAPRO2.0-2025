import { useState } from 'react'
import './Style.css'
import AppointmentList from './components/appointment/AppointmentList.jsx'
import AppointmentForm from './components/appointment/AppointmentForm.jsx'
import exampleData from './utils/data.js'

function App() {

  const [appoint, setAppoint] = useState(exampleData);

  function deleteAppoint(id){
    console.log(`id pasado ${id} - Turno borrado`)
    setAppoint(appoint.filter((i) => i.id !== id));
  }

  function createAppoint( {name, datetime, specialty} ){
    const newAppoint = {
      id: Date.now(), name, datetime, specialty
    };
    setAppoint([newAppoint, ...appoint]);

  }

  return (
    <>  
      <AppointmentForm onCreate={createAppoint}></AppointmentForm>

      {
        appoint.map( (data)=> (
          
          <AppointmentList 
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
