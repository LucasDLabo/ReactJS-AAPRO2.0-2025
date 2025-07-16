import { useState } from 'react';
import Modal from '../../modal/Modal'

function AppointmentList( {id, name, date, time, specialty, onDelete} ){

    const createdDate = new Date(`${date}T00:00:00-04:00`);

    const formatedDate = createdDate.toLocaleDateString('en-US', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <>
            <div className="w-72 rounded-md border-2 border-gray-300 bg-indigo-50 p-4 shadow-2xl shadow-gray-400">
                <ul className="flex min-h-52 flex-col">
                    <li className="text-xl font-bold text-gray-500 italic">Reference Number #{id}</li>
                    <hr className="text-gray-500"/>
                    <div className="flex flex-grow flex-col justify-evenly gap-2 py-5">
                        <li><b className="text-blue-900">Patient name:</b> {name}</li>
                        <li><b className="text-blue-900">Date:</b> {formatedDate} at {time}hs</li>
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