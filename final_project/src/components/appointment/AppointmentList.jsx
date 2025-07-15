function AppointmentList( {id, name, date, time, specialty, onDelete} ){

    const createdDate = new Date(`${date}T00:00:00-04:00`);

    const formatedDate = createdDate.toLocaleDateString('en-US', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

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
                    <li><button title="Cancel Appointment" className="btn-delete text-sm" onClick={() => onDelete(id)}>Cancel</button></li>
                </ul>
            </div>
        </>
    )
}

export default AppointmentList