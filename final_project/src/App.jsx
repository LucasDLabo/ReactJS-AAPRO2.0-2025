import { useState } from 'react'
import './Style.css'
import Appointment from './components/appointment/Appointment.jsx'
import exampleData from './utils/data.js'

function App() {

  return (
    <>
      {
        exampleData.map( (data)=> (
          
          <Appointment 
            key={data.id}
            name={data.name}
            date={data.date}
            specialty={data.specialty}
          />

        ) )
      }
    </>
  )
}

export default App
