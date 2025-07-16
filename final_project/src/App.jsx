import { useState, useEffect } from 'react'
import './Style.css'
import Navbar from './components/header/Navbar.jsx'
import AppointmentList from './components/appointment/AppointmentList.jsx'
import AppointmentListContainer from './components/appointment/container/AppointmentListContainer.jsx'
import AppointmentForm from './components/appointment/AppointmentForm.jsx'
import FootSection from './components/footer/FootSection.jsx'
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
    function editAppoint( {id, name, date, time, specialty} ){
        console.log(`Llegamos pa ${id + name + date + time + specialty}`);
        const editedAppoint = appoint.map((i) => 
            i.id == id ? { ...i, name, date, time, specialty } : i
        );
        setAppoint(editedAppoint);
        localStorage.setItem('appointments', JSON.stringify(editedAppoint));
    }

    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const toggleCreateWindow = () => {
        setIsCreateOpen(!isCreateOpen);
    }

    const [showBackToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {window.pageYOffset > 100 ? setBackToTopButton(true) : setBackToTopButton(false);});
    }, []);

    return (
        <>  
            <header>
                <Navbar></Navbar>
            </header>
                
            <main className='min-h-screen'>
                <div className='flex justify-between mr-40 mt-4'>
                    <h2 className='title'>Appointments List</h2>
                </div>
                <div>
                    <button onClick={toggleCreateWindow} className={`${isCreateOpen ? 'bg-red-500' : 'bg-green-500' } text-white px-2 rounded py-1 cursor-pointer hover:opacity-70`} title={`${isCreateOpen ? 'Close Window' : 'Schedule a New Appointment'}`}>
                        {isCreateOpen ? 'Close' : 'New +'}
                    </button>
                    {isCreateOpen && (
                        <div className="absolute bg-white shadow-2xl p-5 rounded-2xl">
                            <AppointmentForm onCreate={createAppoint} specialties={specialties} timetables={timetables} appoint={appoint}></AppointmentForm>
                        </div>
                    )}
                </div>

                {appoint.length === 0 && (
                    <p className="flex h-[75vh] items-center justify-center text-center font-mono text-2xl text-gray-400 italic">
                        No appointments scheduled yet...
                    </p>
                )}

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

                        timetables={timetables}
                        specialties={specialties}

                        onUpdate={editAppoint}
                        onDelete={deleteAppoint}

                        appoint={appoint}
                    />
                    ) )
                }
                </AppointmentListContainer>
                {showBackToTopButton && ( <a href="#top" title='Back to Top' className='fixed right-6 bottom-6 h-10 w-10 rounded-full bg-blue-900 text-center text-xl leading-[40px] font-bold text-white hover:opacity-60'>^</a>)}
            </main>
            
            <footer>
                <FootSection />
            </footer>
        </>
    )
}

export default App
