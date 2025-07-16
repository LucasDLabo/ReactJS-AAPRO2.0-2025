import { useState } from 'react';
import Modal from '../../modal/Modal'

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
            alert('Make sure all fields are completed!');
            return;
        }

        if (new Date(getDate).getTime() <= Date.now() && getDate != date ){
            alert('You cannot schedule an appointment for today or a past date!')
            return;
        }

        if(appoint.some((i) => i.id !== id && i.date == getDate && i.time == getTime && i.specialty == getSpecialty)){
            alert('Date already appointed!');
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
            <div className="w-72 rounded-md border-2 border-gray-300 bg-indigo-50 p-4 shadow-2xl shadow-gray-400">
                <ul className="flex min-h-52 flex-col">
                    <div className='flex justify-between items-center'>
                        <li className="text-xl font-bold text-gray-500 italic">Reference Number #{id}</li>
                        <img onClick={() => setShowEditModal(true)} className='cursor-pointer w-5 h-5 opacity-60' src="https://img.icons8.com/fluency-systems-filled/48/create-new.png" alt="Edit Appointment icon" title='Modify Appointment'/>
                        <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
                            <div className='flex flex-col items-start gap-3'>
                                <h3 className='text-lg font-bold'> 
                                    <i className='text-orange-400'>Appoint Number #{id}</i> 
                                    <br /> 
                                    Please, enter the desired changes for this appointment...
                                </h3>
                                <form action="" onSubmit={submit} className='flex flex-col w-full px-10'>

                                    <label htmlFor="patientName">* Patient name: </label>
                                    <input type="text" name="patientName" id="patientName" className="border-b-2 border-blue-800 mb-3"
                                        placeholder='Enter patient name...'
                                        value={getName}
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                    <label htmlFor="selectedDate">* Select Date: </label>
                                    <input type="date" name="selectedDate" id="selectedDate" className="border-b-2 border-blue-800 mb-3"
                                        value={getDate}
                                        onChange={(e) => setDate(e.target.value)}
                                    />

                                    <label htmlFor="selectedTime">* Select a Time: </label>
                                    <select name="selectedTime" id="selectedTime" className='border-b-2 border-blue-800 cursor-pointer mb-3'
                                        value={getTime}
                                        onChange={(e) => setTime(e.target.value)}
                                    >
                                        {
                                            timetables.map( (i) => 
                                                <option value={i.time} key={i.id}>{i.time}{ i.time == time ? ' (Current)' : ''}</option>
                                            )
                                        }
                                    </select>

                                    <label htmlFor="selectedSpecialty">* Select Specialty: </label>
                                    <select name="selectedSpecialty" id="selectedSpecialty" className='border-b-2 border-blue-800 cursor-pointer mb-3'
                                        value={getSpecialty}
                                        onChange={(e) => setSpecialty(e.target.value)}
                                    >
                                    {
                                        specialties.map( (i) => 
                                            <option value={i.name} key={i.id}>{i.name}{ i.name == specialty ? ' (Current)' : null}</option>
                                        )
                                    }
                                    </select>
                                    <div className='flex justify-between gap-5 items-center h-full'>
                                        <a className='cursor-pointer bg-gray-300 px-3 py-0.5 rounded text-center text-gray-600 hover:text-black hover:bg-gray-400 transition-colors' onClick={cleanForm}>Reset Changes</a>
                                        <button className='btn-delete px-5 bg-blue-600 hover:bg-blue-500 transition-colors ' title='Confirm Changes'>Confirm Changes</button>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
                    <hr className="text-gray-500"/>
                    <div className="flex flex-grow flex-col justify-evenly gap-2 py-5">
                        <li><b className="text-blue-900">Patient name:</b> {name}</li>
                        <li><b className="text-blue-900">Date:</b> {formatted_date} at {time}hs</li>
                        <li><b className="text-blue-900">Medical field:</b> {specialty}</li>
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