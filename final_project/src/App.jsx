import { useState } from 'react'
import './Style.css'
import AppointmentList from './components/appointment/AppointmentList.jsx'
import AppointmentForm from './components/appointment/AppointmentForm.jsx'
import exampleData from './utils/data.js'
import specialties from './utils/specialties.js'

function App() {
  const [appoint, setAppoint] = useState(exampleData);

  function deleteAppoint(id){
    console.log(`id pasado ${id} - Turno borrado`)
    setAppoint(appoint.filter((i) => i.id !== id));
  }

  function createAppoint( {name, date, time, specialty} ){
    const newAppoint = {
      id: Date.now(), name, date, time, specialty
    };
    setAppoint([newAppoint, ...appoint]);

  }

  return (
    <>  
      <AppointmentForm onCreate={createAppoint} specialties={specialties}></AppointmentForm>

      {
        appoint.map( (data)=> (
          
          <AppointmentList 
            key={data.id}
            id={data.id}
            name={data.name}
            date={data.date}
            time={data.time}
            specialty={data.specialty}

            onDelete={deleteAppoint}
          />

        ) )
      }
    </>
  )
}

export default App
