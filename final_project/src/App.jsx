import { useState } from 'react'
import './Style.css'
import AppointmentList from './components/appointment/AppointmentList.jsx'
import AppointmentForm from './components/appointment/AppointmentForm.jsx'
import exampleData from './utils/data.js'
import specialties from './utils/specialties.js'
import timetables from './utils/timetables.js'

function App() {
    const [appoint, setAppoint] = useState( () => {
        const localstorage = localStorage.getItem('appointments');
        return localstorage ? JSON.parse(localstorage) : localStorage.setItem('appointments', JSON.stringify(exampleData));
    });

    function deleteAppoint(id){
        console.log(`id pasado ${id} - Turno borrado`)
        const updatedAppoint = appoint.filter((i) => i.id !== id);
        setAppoint(updatedAppoint);
        localStorage.setItem('appointments', JSON.stringify(updatedAppoint));
    }

    function createAppoint( {name, date, time, specialty} ){
        const newAppoint = {
        id: Date.now(), name, date, time, specialty
        };
        setAppoint([newAppoint, ...appoint]);
        localStorage.setItem('appointments', JSON.stringify([newAppoint, ...appoint]));
    }

    return (
        <>  
            <AppointmentForm onCreate={createAppoint} specialties={specialties} timetables={timetables} appoint={appoint}></AppointmentForm>

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
