import { useState } from 'react'
import './Style.css'
import AppointmentList from './components/appointment/AppointmentList.jsx'
import AppointmentListContainer from './components/appointment/container/AppointmentListContainer.jsx'
import AppointmentForm from './components/appointment/AppointmentForm.jsx'
import Navbar from './components/header/Navbar.jsx'
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
        id: appoint.length > 0 ? appoint.at(0).id + 1 : 1, 
        name, date, time, specialty
        };
        setAppoint([newAppoint, ...appoint]);
        localStorage.setItem('appointments', JSON.stringify([newAppoint, ...appoint]));
        setIsCreateOpen(false);
    }

    const [isCreateOpen, setIsCreateOpen] = useState(false);

    const toggleCreateWindow = () => {
        setIsCreateOpen(!isCreateOpen);
    }

    return (
        <>  
            <header>
                <Navbar></Navbar>
            </header>
                
            <main>

                <div className='flex justify-between mr-40 mt-4'>
                    <h2 className='title'>Appointment List</h2>
                </div>
                <div>
                    <button onClick={toggleCreateWindow} className={`${isCreateOpen ? 'bg-red-400' : 'bg-green-500' } text-white px-2 rounded py-1 cursor-pointer hover:opacity-60`} title={`${isCreateOpen ? 'Close Window' : 'Schedule a New Appointment'}`}>
                        {isCreateOpen ? 'Close' : 'New +'}
                    </button>
                    {isCreateOpen && (
                        <div className="absolute bg-white shadow-2xl p-5 rounded-2xl">
                            <AppointmentForm onCreate={createAppoint} specialties={specialties} timetables={timetables} appoint={appoint}></AppointmentForm>
                        </div>
                    )}
                </div>
                
                <AppointmentListContainer>
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
                </AppointmentListContainer>

            </main>
        </>
    )
}

export default App
