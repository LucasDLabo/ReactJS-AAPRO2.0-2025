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
        window.addEventListener("scroll", () => {window.pageYOffset > 400 ? setBackToTopButton(true) : setBackToTopButton(false);});
    }, []);

    const [search, setSearch] = useState('');
    
    const filteredAppoints = appoint.filter((i) => {
        const term = search.toLowerCase();

        if (term.startsWith('#')) {
            const idToFind = parseInt(term.slice(1), 10);
            if (isNaN(idToFind)) {
                return true;
            }
            return i.id === idToFind;
        }

        return (
            i.name.toLowerCase().includes(term) ||
            i.formatted_date.toLowerCase().includes(term) ||
            i.time.toLowerCase().includes(term) ||
            i.specialty.toLowerCase().includes(term)
        );
    });

    const [viewMode, setViewMode] = useState(() => {
        return localStorage.getItem('viewMode') || 'all';
    });

    useEffect(() => {
        localStorage.setItem('viewMode', viewMode);
    }, [viewMode]);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const nextDays = new Date(today);
    nextDays.setDate(today.getDate() + 4);

    const thisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const toDate = (d) => new Date(d+'T00:00:00-04:00');

    const todayAppointments = filteredAppoints.filter(a => toDate(a.date).toDateString() === today.toDateString());
    const tomorrowAppointments = filteredAppoints.filter(a => toDate(a.date).toDateString() === tomorrow.toDateString());
    const nextDaysAppointments = filteredAppoints.filter(a => toDate(a.date) > tomorrow && toDate(a.date) <= nextDays);
    const monthAppointments = filteredAppoints.filter(a => toDate(a.date) > nextDays && toDate(a.date) <= thisMonth);
    const pastAppointments = filteredAppoints.filter(a => toDate(a.date).toDateString() < today.toDateString());
    const incomingAppointments = filteredAppoints.filter(a => toDate(a.date) > thisMonth);


    const renderSection = (title, appointments) => {

        if (!appointments || appointments.length === 0) {
            return (
                <>
                    <div className='flex flex-col'>
                        <h3 className="px-30 font-mono text-xl font-semibold text-blue-800 italic opacity-65 dark:text-blue-900">{title}</h3>
                        <div className='flex h-full items-center justify-center'>
                            <p className="flex h-full items-center text-center font-mono text-gray-500 italic">No appointments on this group...</p>
                        </div>
                    </div>
                </>
            );
        }
        return (

            <div className="mt-4">
                <h3 className="px-30 pb-3 font-mono text-xl font-semibold text-blue-800 italic dark:text-blue-600">{title}</h3>
                <AppointmentListContainer>
                    {appointments.map((data) => (
                        
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
                        
                    ))}
                </AppointmentListContainer>
            </div>
            
        );
    };

    return (
        <>  
            <header>
                <Navbar />
            </header>
                
            <main className='min-h-screen'>
                <section className='flex items-end justify-between px-30 h-30 mb-10'>
                    
                    <div className='w-full'>
                        <div className='mt-4'>
                            <h2 className='title'>Appointments List</h2>
                        </div>
                        <div>
                            <button onClick={toggleCreateWindow} className={`${isCreateOpen ? 'bg-red-500 hover:bg-red-700 dark:bg-red-800' : 'bg-green-600 hover:bg-green-800 dark:bg-green-700' } relative text-white px-2 rounded py-1 cursor-pointer z-20 transition-colors`} title={`${isCreateOpen ? 'Close Window' : 'Schedule a New Appointment'}`}>
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
                        <p className="text-sm text-gray-400 mt-1 ">
                            Tip: Use # to search by ID
                        </p>

                        <div className="flex gap-4 pt-2 items-center">
                            <label className="flex cursor-pointer items-center gap-2 rounded bg-gray-100 px-2 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700" title='Click to see all the appointments'>
                                <input
                                type="radio"
                                name="viewMode"
                                value="all"
                                checked={viewMode === 'all'}
                                onChange={() => setViewMode('all')}
                                />
                                See All
                            </label>

                            <label className="flex cursor-pointer items-center gap-2 rounded bg-gray-100 px-2 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700" title='Click to group appointments by day'>
                                <input
                                type="radio"
                                name="viewMode"
                                value="grouped"
                                checked={viewMode === 'grouped'}
                                onChange={() => setViewMode('grouped')}
                                />
                                Grouped
                            </label>
                        </div>
                        
                    </div>
                
                </section>

                {viewMode === 'all' && (
                    <>
                        {filteredAppoints.length === 0 ? (
                            <p className="flex h-[75vh] items-center justify-center text-center font-mono text-2xl text-gray-400 italic">
                                No appointments scheduled yet...
                            </p>
                            ) : (
                                renderSection("", filteredAppoints)
                            )
                            }
                    </>
                )}

                {viewMode === 'grouped' && (
                    <>
                        {renderSection("Today...", todayAppointments)} 
                        <hr className='mx-30 mt-8 text-gray-300'/>
                        {renderSection("Tomorrow...", tomorrowAppointments)}
                        <hr className='mx-30 mt-8 text-gray-300'/>
                        {renderSection("Next 4 days...", nextDaysAppointments)}
                        <hr className='mx-30 mt-8 text-gray-300'/>
                        {renderSection("This Month...", monthAppointments)}
                        <hr className='mx-30 mt-8 text-gray-300'/>
                        {renderSection("Incoming...", incomingAppointments)}
                        <hr className='mx-30 mt-8 text-gray-300'/>
                        <div className='opacity-60 dark:opacity-30'>
                        {renderSection("Previous Appointments", pastAppointments)}
                        </div>
                    </>
                )}
                {showBackToTopButton && ( <a href="#top" title='Back to Top' className='fixed right-6 bottom-6 h-10 w-10 rounded-full bg-blue-900 text-center text-xl leading-[40px] font-bold text-white hover:opacity-60'>^</a>)}
            </main>
            
            <footer>
                <FootSection />
            </footer>
        </>
    )
}

export default App
