import { useState } from 'react'
import Modal from '../../modal/Modal'
import { parseLocalDate } from '../../utils/parseLocalDate'


function AppointmentList( {id, name, date, formatted_date, time, specialty, onDelete, timetables, specialties, onUpdate, appoint} ){

    const createdDate = new Date(`${date}T00:00:00-04:00`);

    const formattedDate = createdDate.toLocaleDateString('en-US', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const [getName, setName] = useState(name);
    const [getDate, setDate] = useState(date);
    const [getTime, setTime] = useState(time);
    const [getSpecialty, setSpecialty] = useState(specialty);

    const submit = (e) => {
        e.preventDefault();

        if (!getName.trim() || !getDate.trim() || !getTime.trim() || !getSpecialty.trim()) {
            alert("❌ Appointment Scheduling Failed\n Please complete all required fields before modifying.");
            return;
        }

        const today = new Date();
        
        const selectedDate = parseLocalDate(getDate);

        if (selectedDate.getTime() <= today.getTime() && selectedDate != getDate ) {
            alert("❌ Appointment Scheduling Failed\n You cannot schedule an appointment for a past date!");
            return;
        }

        if(appoint.some((i) => i.id !== id && i.date == getDate && i.time == getTime && i.specialty == getSpecialty)){
            alert("❌ Appointment Scheduling Failed\n Date already taken.");
            return;
        }

        onUpdate( {id, name: getName, date: getDate, time: getTime, specialty: getSpecialty});
        setShowEditModal(false);
    }

    function cleanForm(){
        setName(name);
        setDate(date);
        setTime(time);
        setSpecialty(specialty);
    }

    return (
        <>
            <div className="w-72 rounded-md border-2 border-gray-300 bg-indigo-50 p-4 shadow-2xl shadow-gray-400 dark:bg-gray-700 dark:shadow-gray-700">
                <ul className="flex min-h-52 flex-col">
                    <div className='flex items-center justify-between'>
                        <li className="text-xl font-bold text-gray-500 italic">Reference Number #{id}</li>
                        <button onClick={() => setShowEditModal(true)} className='cursor-pointer text-gray-800 dark:text-gray-300' alt="Edit Appointment icon" title='Modify Appointment'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                            </svg>
                        </button>
                        <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
                            <div className='flex flex-col items-start gap-3'>
                                <h3 className='text-lg font-bold'> 
                                    <i className='text-orange-400'>Appoint Number #{id}</i> 
                                    <br /> 
                                    Please, enter the desired changes for this appointment...
                                </h3>
                                <form action="" onSubmit={submit} className='flex w-full flex-col px-10'>

                                    <label htmlFor="patientName">* Patient name: </label>
                                    <input type="text" name="patientName" id="patientName" className="mb-3 border-b-2 border-blue-800"
                                        placeholder='Enter patient name...'
                                        value={getName}
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                    <label htmlFor="selectedDate">* Select Date: </label>
                                    <input type="date" name="selectedDate" id="selectedDate" className="mb-3 border-b-2 border-blue-800"
                                        value={getDate}
                                        onChange={(e) => setDate(e.target.value)}
                                    />

                                    <label htmlFor="selectedTime">* Select a Time: </label>
                                    <select name="selectedTime" id="selectedTime" className='mb-3 cursor-pointer border-b-2 border-blue-800'
                                        value={getTime}
                                        onChange={(e) => setTime(e.target.value)}
                                    >
                                        {
                                            timetables.map( (i) => 
                                                <option value={i.time} key={i.id} className='dark:bg-gray-800'>{i.time}{ i.time == time ? ' (Current)' : ''}</option>
                                            )
                                        }
                                    </select>

                                    <label htmlFor="selectedSpecialty">* Select Specialty: </label>
                                    <select name="selectedSpecialty" id="selectedSpecialty" className='mb-3 cursor-pointer border-b-2 border-blue-800'
                                        value={getSpecialty}
                                        onChange={(e) => setSpecialty(e.target.value)}
                                    >
                                    {
                                        specialties.map( (i) => 
                                            <option value={i.name} key={i.id} className='dark:bg-gray-800'>{i.name}{ i.name == specialty ? ' (Current)' : null}</option>
                                        )
                                    }
                                    </select>
                                    <div className='flex h-full items-center justify-between gap-5'>
                                        <a className='flex items-center gap-1 cursor-pointer rounded bg-gray-300 px-3 py-0.5 text-center text-gray-600 transition-colors hover:bg-gray-400 hover:text-black dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:text-white' onClick={cleanForm}>
                                            Reset Changes
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                                            </svg>

                                        </a>
                                        <button className='btn-delete bg-blue-600 px-5 transition-colors hover:bg-blue-500' title='Confirm Changes'>Confirm Changes</button>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
                    <hr className="text-gray-500"/>
                    <div className="flex flex-grow flex-col justify-evenly gap-2 py-5">
                        <li className='dark:text-gray-300'><b className="text-blue-900 dark:text-blue-500">Patient name:</b> {name}</li>
                        <li className='dark:text-gray-300' title={`Date: ${date}`}><b className="text-blue-900 dark:text-blue-500">Date:</b> {formatted_date} at {time}hs</li>
                        <li className='dark:text-gray-300'><b className="text-blue-900 dark:text-blue-500">Medical field:</b> {specialty}</li>
                    </div>
                    
                    <li><button title="Cancel Appointment" className="btn-delete text-sm" onClick={() => setShowDeleteModal(true)}>Cancel</button></li>
                        <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
                            <div className='flex flex-col items-start gap-3'>
                                <h3 className='text-lg font-bold'> 
                                    <i className='text-orange-400'>Appoint Number #{id}</i> 
                                    <br /> 
                                    Are you sure you want to cancel this appointment?
                                </h3>
                                <p>This changes cannot be reverted.</p>
                                <button className='btn-delete' title='Confirm Cancelation' onClick={() => onDelete(id)}>Cancel Appointment</button>
                            </div>
                        </Modal>
                </ul>
            </div>
        </>
    )
}

export default AppointmentList