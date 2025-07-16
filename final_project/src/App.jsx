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
import dateFormatter from './utils/dateFormatter.js'

function App() {
    const [appoint, setAppoint] = useState( () => {
        const localstorage = localStorage.getItem('appointments');
        return localstorage ? JSON.parse(localstorage) : localStorage.setItem('appointments', JSON.stringify(exampleData));
    });
    function deleteAppoint(id){
        const updatedAppoint = appoint.filter((i) => i.id !== id);
        setAppoint(updatedAppoint);
        localStorage.setItem('appointments', JSON.stringify(updatedAppoint));
    }
    function createAppoint( {name, date, time, specialty} ){

        const formattedDate = dateFormatter(date);

        const newAppoint = {
        id: appoint.length > 0 ? appoint.at(0).id + 1 : 1, 
        name, date, time, specialty, 
        formatted_date: formattedDate
        };
        setAppoint([newAppoint, ...appoint]);
        localStorage.setItem('appointments', JSON.stringify([newAppoint, ...appoint]));

        setIsCreateOpen(false);
    }
    function editAppoint( {id, name, date, time, specialty} ){

        const formattedDate = dateFormatter(date);

        const editedAppoint = appoint.map((i) => 
            i.id == id ? { ...i, name, date, time, specialty, formatted_date: formattedDate } : i
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

    const [search, setSearch] = useState('');
    
    const filteredAppoints = appoint.filter((i) => {
        const term = search.toLowerCase();
        return (
            i.name.toLowerCase().includes(term) ||
            i.formatted_date.toLowerCase().includes(term) ||
            i.time.toLowerCase().includes(term) ||
            i.specialty.toLowerCase().includes(term)
        );
    });
    return (
        <>  
            <header>
                <Navbar></Navbar>
            </header>
                
            <main className='min-h-screen'>
                <section className='mb-5 flex items-end justify-between px-30'>
                    
                    <div className='w-full'>
                        <div className='mt-4'>
                            <h2 className='title'>Appointments List</h2>
                        </div>
                        <div>
                            <button onClick={toggleCreateWindow} className={`${isCreateOpen ? 'bg-red-500 dark:bg-red-800' : 'bg-green-500 dark:bg-green-700' } relative text-white px-2 rounded py-1 cursor-pointer hover:opacity-70 z-20`} title={`${isCreateOpen ? 'Close Window' : 'Schedule a New Appointment'}`}>
                                {isCreateOpen ? 'Close' : 'New +'}
                            </button>
                                        

                            {isCreateOpen && (
                                <div>
                                    <div className="absolute z-50 rounded-2xl border-2 border-gray-300 bg-white p-5 shadow-2xl shadow-black dark:bg-gray-800 dark:text-gray-400">
                                        <AppointmentForm onCreate={createAppoint} specialties={specialties} timetables={timetables} appoint={appoint}></AppointmentForm>
                                    </div>
                                    <div className='fixed inset-0 z-10' onClick={toggleCreateWindow}></div>
                                </div>
                            )}
                        </div>
                    </div>
                <div className="w-full max-w-sm">
                    <input
                        type="text"
                        placeholder="Search by name, date, time or specialty..."
                        className="w-full rounded border border-gray-200 px-4 py-1 shadow dark:bg-blue-950 dark:text-gray-200"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                
                </section>
                {appoint.length === 0 && (
                    <p className="flex h-[75vh] items-center justify-center text-center font-mono text-2xl text-gray-400 italic">
                        No appointments scheduled yet...
                    </p>
                )}

                <AppointmentListContainer>
                {   
                    filteredAppoints.length === 0 ? (
                        <p className="flex h-[75vh] items-center justify-center text-center font-mono text-2xl text-gray-400 italic">
                            No results were found :(
                        </p>
                    ) :
                    filteredAppoints.map( (data)=> (
                    <AppointmentList 
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        date={data.date}
                        formatted_date={data.formatted_date}
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
